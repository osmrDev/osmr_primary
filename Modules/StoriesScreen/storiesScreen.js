function storiesScreen() {

   clearPixi();

  //show bg
  var selbar = storiesScreen_selbar(ASSETS.web_0019)
  GV_app.stage.addChild(selbar)

  //Story List layer
  var slayer = new PIXI.Container();
  slayer.name = "slayer"
  GV_app.stage.addChild(slayer)

  cropFrame(AspectRatio);

  storiesScreen_listStory("main");
}
