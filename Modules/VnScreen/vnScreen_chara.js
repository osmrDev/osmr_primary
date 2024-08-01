
var d

function vnScreen_chara(currentScene) {

  var layer = GV_app.stage.getChildByName("charaLayer");
  d = layer
  //check if current scene has chara
  if(!objExist(currentScene.chara)) return;

  //check if chara data is created, if not create one
  if(!objExist(layer.charaList)) layer.charaList = [];

  //loop thru scene data each chara
  for(var i = 0; i < currentScene.chara.length; i++) {

    var currentCharaJsonDat = currentScene.chara[i];

    //check if l2d model exist (or queued)
    var currentChara = null;
    for(var j = 0; j < layer.charaList.length; j++) {
      if(layer.charaList[j] == currentCharaJsonDat.id) {
        currentChara = j;
      }
    }

    //create chara if DNE
    if(currentChara == null) {

      //place char at the right place to avoid jumping once loaded
      var xloc;
      if(objExist(currentCharaJsonDat.pos)) {
        xloc = (currentCharaJsonDat.pos-1) * VnScreen_chara_spacing
      }

      if(currentCharaJsonDat.id >= 10000) { //create l2d chara if id has 5 digits
        makeL2D(""+currentCharaJsonDat.id, ASSETS.l2d_path+currentCharaJsonDat.id+"/model.json", layer, 5, xloc, VnScreen_chara_height, VnScreen_chara_charaZoom);
      }
      else if(currentCharaJsonDat.id >= 6000) { //flat sprite if id has 4 digits
        var temp = ezPlaceUI(layer, [ASSETS.enemySprite_path+"enemy_"+currentCharaJsonDat.id+"_l.png"], 5, xloc, VnScreen_chara_height, VnScreen_chara_spriteZoom);
        temp.name = ""+currentCharaJsonDat.id;
      }
      layer.charaList.push(currentCharaJsonDat.id);
    }


    //update chara based on given params
    if(objExist(currentCharaJsonDat.pos)) {
      if(currentCharaJsonDat.id >= 10000) {
        if(currentCharaJsonDat.pos == 0) movel2d(""+currentCharaJsonDat.id, layer, 5, -VnScreen_chara_spacing, VnScreen_chara_height, VnScreen_chara_charaZoom);
        if(currentCharaJsonDat.pos == 1) movel2d(""+currentCharaJsonDat.id, layer, 5, 0, VnScreen_chara_height, VnScreen_chara_charaZoom);
        if(currentCharaJsonDat.pos == 2) movel2d(""+currentCharaJsonDat.id, layer, 5, VnScreen_chara_spacing, VnScreen_chara_height, VnScreen_chara_charaZoom);
      }
    }

    //EFFECTS
    if(objExist(currentCharaJsonDat.effect)) {
      if(currentCharaJsonDat.effect == "fadeout") fadel2d(""+currentCharaJsonDat.id, layer, 100, 0, 1)
    }

    if(objExist(currentCharaJsonDat.voiceFullStop)) {
      stopSound(currentCharaJsonDat.voiceFullStop);
    }
    if(objExist(currentCharaJsonDat.voiceFull)) {
      playSound(ASSETS.questCharaVoice_path + currentCharaJsonDat.voiceFull +  "_hca.wav", currentCharaJsonDat.voiceFull);
    }

    //TODO motions


  }

}
