var a;

function tc() {
  vnScreen(STORY.prolouge_1)
}

async function vnScreen(scene) {

  clearPixi();

  const response = await fetch(scene.path);
  var jsonData = await response.json();
  a = jsonData


  var bgLayer = new PIXI.Container();
  bgLayer.name = "bgLayer"
  GV_app.stage.addChild(bgLayer)

  var itemLayer = new PIXI.Container();
  itemLayer.name = "itemLayer"
  GV_app.stage.addChild(itemLayer)

  var charaLayer = new PIXI.Container();
  charaLayer.name = "charaLayer"
  GV_app.stage.addChild(charaLayer)

  var textLayer = new PIXI.Container();
  textLayer.name = "textLayer"
  GV_app.stage.addChild(textLayer)

  var narrationLayer = new PIXI.Container();
  narrationLayer.name = "narrationLayer"
  GV_app.stage.addChild(narrationLayer)



  //Group 1
  vnScreen_narration_clr()
  vnScreen_parser_rescursive(jsonData.story.group_1, 0)



  cropFrame(AspectRatio);
  GV_ticker.start();
}

function layr() {

}
