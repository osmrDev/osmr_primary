async function makeL2D(id, path, layer, loction, offsetRight, offsetBtm, zoom) {

  let model = await PIXI.live2d.Live2DModel.from(path);
  model.talking = 0;
  model.name = id;
  model.mouthValue = 0;

  //mouth movment
  model.internalModel.motionManager.update = (function() {
    var cached_function = model.internalModel.motionManager.update;

    return function() {
        var result = cached_function.apply(this, arguments);

        //model.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthValue*model.talking);
        model.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', model.mouthValue*model.talking);

        return result;
    };
  })();


  placer(model, loction, offsetRight*UiSize, offsetBtm*UiSize, zoom*UiSize);


  layer.addChild(model);
  //GV_app.stage.getChildByName(CharaID).alpha
}

//------------------------------------------------------------------------------
function l2dOnClick(modelName, layer, fn) {
  l2dOnClick_recursive(modelName, layer, fn, L2dloader_timeoutCount)
}
async function l2dOnClick_recursive(modelName, layer, fn, timeout) {
  //Timeout function to wait for obj to load
  //Function may be called and object isnt loaded
  if(timeout <= 0) return;
  timeout--;

  if(objExist(layer.getChildByName(modelName))) {
    //Code goes here
    layer.getChildByName(modelName).interactive = true;
    layer.getChildByName(modelName).on('pointerdown', fn);
  }
  else {
    setTimeout(function (){
      l2dOnClick_recursive(modelName, layer, fn, timeout)
    }, L2dloader_timeoutInterval);
  }

}

//------------------------------------------------------------------------------
function movel2d(modelName, layer, location, offsetRight, offsetBtm, zoom) {
  movel2d_recursive(modelName, layer, location, offsetRight, offsetBtm, zoom, L2dloader_timeoutCount);
}
async function movel2d_recursive(modelName, layer, location, offsetRight, offsetBtm, zoom, timeout) {
  //Timeout function to wait for obj to load
  //Function may be called and object isnt loaded
  if(timeout <= 0) return;
  timeout--;

  if(objExist(layer.getChildByName(modelName))) {
    //Code goes here
    placer(layer.getChildByName(modelName), location, offsetRight*UiSize, offsetBtm*UiSize, zoom*UiSize);
  }
  else {
    setTimeout(function (){
      movel2d(modelName, layer, location, offsetRight, offsetBtm, zoom, timeout)
    }, L2dloader_timeoutInterval);
  }

}

//------------------------------------------------------------------------------
function talkl2d(modelName, layer, soundPath, name) {
  talkl2d_recursive(modelName, layer, soundPath, name, L2dloader_timeoutCount);
}
async function talkl2d_recursive(modelName, layer, soundPath, name, timeout) {
  //Timeout function to wait for obj to load
  //Function may be called and object isnt loaded
  if(timeout <= 0) return;
  timeout--;

  if(objExist(layer.getChildByName(modelName))) {
    playSoundl2d(layer.getChildByName(modelName), soundPath, name)
  }
  else {
    setTimeout(function (){
      talkl2d_recursive(modelName, layer, soundPath, name, timeout)
    }, L2dloader_timeoutInterval);
  }

}

//------------------------------------------------------------------------------
function fadel2d(modelName, layer, startAlpha, endAlpha, time) {
  fadel2d_recursive(modelName, layer, startAlpha, endAlpha, time, L2dloader_timeoutCount)
}
async function fadel2d_recursive(modelName, layer, startAlpha, endAlpha, time, timeout) {
  //Timeout function to wait for obj to load
  //Function may be called and object isnt loaded
  if(timeout <= 0) return;
  timeout--;

  if(objExist(layer.getChildByName(modelName))) {
    //Code goes here
    layer.getChildByName(modelName).alpha = endAlpha;
  }
  else {
    setTimeout(function (){
      fadel2d(modelName, layer, startAlpha, endAlpha, time)
    }, L2dloader_timeoutInterval);
  }

}

//------------------------------------------------------------------------------

//GV_app.stage.getChildAt(2).getChildByName("favChara").motion("motion", 2, 100)
function motionl2d(modelName, layer, action) {
  motionl2d(modelName, layer, action, L2dloader_timeoutCount);
}
async function motionl2d(modelName, layer, action, timeout) {
  //Timeout function to wait for obj to load
  //Function may be called and object isnt loaded
  if(timeout <= 0) return;
  timeout--;

  if(objExist(layer.getChildByName(modelName))) {
    //Code goes here
    layer.getChildByName(modelName).alpha = endAlpha;
  }
  else {
    setTimeout(function (){
      motionl2d(modelName, layer, action, timeout)
    }, L2dloader_timeoutInterval);
  }

}
