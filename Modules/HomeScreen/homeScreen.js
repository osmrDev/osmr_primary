function dispHomeScreen() {


  clearPixi();
  const bgLayer = dispHomeScreen_bg();
  const selMenuLayer = dispHomeScreen_mainSel();
  const homescreenChara = dispHomeScreen_chara();


  GV_app.stage.addChild(bgLayer);
  GV_app.stage.addChild(homescreenChara);
  GV_app.stage.addChild(selMenuLayer);

  cropFrame(AspectRatio);

  GV_ticker.start();
}
