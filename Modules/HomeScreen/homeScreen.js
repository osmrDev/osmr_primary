function dispHomeScreen() {


  clearPixi();

  //old way of doing layers (dont do it like this)
  const bgLayer = dispHomeScreen_bg();
  const selMenuLayer = dispHomeScreen_mainSel();

  GV_app.stage.addChild(bgLayer);



  //new way of doing layers (do it this way)
  //this way allows for async loading while keeping layers in order
  const charaLayer = new PIXI.Container();
  charaLayer.name = "charaLayer"
  GV_app.stage.addChild(charaLayer);

  GV_app.stage.addChild(selMenuLayer);

  homeScreen_chara();


  cropFrame(AspectRatio);

  GV_ticker.start();
}
