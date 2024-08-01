
var soundList = [];

function playSound(path, name) {

  //todo: check if sound is already in list b4 playing

  //path = ASSETS.questVoice_path + "fullvoice/section_000001/vo_full_000001-1-8" +  "_hca.wav"
  var sound = PIXI.sound.Sound.from({
    url: path,
    autoPlay: true,
    complete: function() {
    }
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
      console.log('Sound stopped');
      soundList[i].sound.stop();
      soundList.splice(i, 1);
      return;
    }

  }
}
