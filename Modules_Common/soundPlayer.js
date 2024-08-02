
var soundList = [];

function playSound(path, name) {
  var sound = PIXI.sound.Sound.from({
    url: path,
    autoPlay: true,
    loop:false,
  });
  soundList.push({sound: sound, name:name})
}

function playSoundLoop(path, name) {

  var sound = PIXI.sound.Sound.from({
    url: path,
    autoPlay: true,
    loop:true,
  });
  soundList.push({sound: sound, name:name})

}

function stopSound(name) {

  //todo: remove sound from sound list and stop playing sound
  for(var i = 0; i < soundList.length; i++) {

    if(soundList[i].name == name) {
      soundList[i].sound.stop();

      //close mouth if live2d
      if(objExist(soundList[i].model)) {
        soundList[i].model.talking = 0;
      }

      soundList.splice(i, 1);
      return;
    }

  }
}


//------------------------------------------------------------------------------
async function playSoundl2d(model, path, name) {

  model.talking = 1;
  //model.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthValue*model.talking);
  var data = null;
  var sound = await PIXI.Assets.load(path);
  var min = 100000;
  var max = -100000;
  var previousMouthVlaue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  sound.play().on('progress', function(percentPlayed) {

      //If first starting, set data, min and max
      if(data == null) {
        data = sound.media.buffer.getChannelData(0);
        for(var i = 0; i < data.length; i++) {
          var cd = Math.floor(data[i]*1000);
          if(cd < min) min = cd
          if(cd > max) max = cd
        }
        console.log(min + ' ' + max)
        min /=5;
        max /=5;
      }

      //sample sound at current location
      //do math to sample to clamp it
      var idx = Math.floor(data.length*percentPlayed)-1;
      var sample = ( Math.floor(data[idx]*1000)-min ) / (max-min)
      if(sample > .8) sample = 2;
      if(sample < .7) sample = 0;
      if(sample < .4) sample = -.01;

      //sum is to avarge out the mouth movments
      previousMouthVlaue.push(sample);
      previousMouthVlaue.shift();
      var sum = 0;
      for(var i = 0; i < previousMouthVlaue.length; i++) {
        sum += previousMouthVlaue[i]
      }
      sum /= previousMouthVlaue.length;
      if(sum < .2) sum = 0;

      model.mouthValue= sum; //Set mouth value

      //if complete, close mouth
      if(percentPlayed > .98) {
        model.mouthValue = 0;
        model.talking = 0;
        console.log("voice fin")
      }
  });

  console.log("playing " + name)
  soundList.push({sound: sound, name:name, model:model})
}
