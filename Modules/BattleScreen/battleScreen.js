

function battleScreen() {

  clearPixi();

  const bg = new PIXI.Container();
  bg.name = "bg"
  GV_app.stage.addChild(bg);

  const myCharaLayer = new PIXI.Container();
  myCharaLayer.name = "myCharaLayer"
  GV_app.stage.addChild(myCharaLayer);

  const teamMinis = new PIXI.Container();
  teamMinis.name = "teamMinis"
  GV_app.stage.addChild(teamMinis);

  const enemyMinis = new PIXI.Container();
  enemyMinis.name = "enemyMinis"
  GV_app.stage.addChild(enemyMinis);

  const hpInfoLayer = new PIXI.Container();
  enemyMinis.name = "hpInfoLayer"
  GV_app.stage.addChild(enemyMinis);

  const diskLayer = new PIXI.Container();
  diskLayer.name = "diskLayer"
  GV_app.stage.addChild(diskLayer);


  battleScreen_startMission(); //temp
  

  cropFrame(AspectRatio);
}
