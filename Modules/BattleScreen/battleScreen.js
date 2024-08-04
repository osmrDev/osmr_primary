

function battleScreen() {

  clearPixi();

  const myCharaLayer = new PIXI.Container();
  myCharaLayer.name = "myCharaLayer"
  GV_app.stage.addChild(myCharaLayer);

  const diskLayer = new PIXI.Container();
  diskLayer.name = "diskLayer"
  GV_app.stage.addChild(diskLayer);

  cropFrame(AspectRatio);
}
