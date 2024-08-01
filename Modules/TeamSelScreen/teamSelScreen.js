

function teamSelScreen(bg, fn, btnname) {

  clearPixi();

  var background = makeBackground(bg);
  var deckLayer = teamSelScreen_deck(bg, fn, btnname);
  var uiLayer = teamSelScreen_Ui(fn, btnname);


  GV_app.stage.addChild(background)
  GV_app.stage.addChild(deckLayer)
  GV_app.stage.addChild(uiLayer)

  cropFrame(AspectRatio);
}
