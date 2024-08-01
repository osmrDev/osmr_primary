
function vnScreen_setBG(currentScene) {

    //check if bg pram exists
    var bgName = currentScene.bg;
    if(!objExist(bgName)) {
      return;
    }

    //remove file extension from name
    var bgName = currentScene.bg;
    var asset;
    if(bgName.includes("bg_adv")) {
      asset = [ASSETS.questBgAdv_path[0] + bgName, ASSETS.questBgAdv_path[1], ASSETS.questBgAdv_path[2]];
    }
    else {
      asset = [ASSETS.questBg_path[0] + bgName +".jpg", ASSETS.questBg_path[1], ASSETS.questBg_path[2]];
    }

    //create bg if scene does not have bg
    var bgObj = GV_app.stage.getChildByName("bgLayer").getChildByName(bgName);
    if( !objExist(bgObj) ) {
      bgObj = makeBackground(asset);
      bgObj.name = bgName;
      GV_app.stage.getChildByName("bgLayer").addChild(bgObj);
    }

    //apply effects if exist
    //TODO


}
