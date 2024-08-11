var GV_app;
var GV_ticker;

function initPixii() {
  //Alert if pixi dosnt load
  try {
    console.log("Running PIXI " + PIXI.VERSION);
  } catch (e) {
    alert("PIXI failed to load");
  }

  //Alert if WebGL is not supported
  if(PIXI.utils.isWebGLSupported() == false) {
    alert("WebGL is not supported");
  }

  //Create Pixi window
  GV_app = new PIXI.Application({
    resizeTo: window,
  	autoResize: true,
    resolution: devicePixelRatio,
    view: document.getElementById("gameCanvas")
  });


  document.body.appendChild(GV_app.view);

  GV_ticker = new PIXI.Ticker();;
  clearPixi();
}

function clearPixi() {

  GV_ticker.destroy();
  GV_ticker = new PIXI.Ticker();

  for (var i = GV_app.stage.children.length - 1; i >= 0; i--) {	GV_app.stage.removeChild(GV_app.stage.children[i]);};

  //show loading text
  const loadingtext = new PIXI.Text('Loading . . .', new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: 32,
      fill: "#ffffff",
      fontWeight: "bold"
  }));
  loadingtext.name = "loadingScreenText"
  loadingtext.anchor.set(0.5, 0.5);
  loadingtext.position.set(GV_app.screen.width/2 ,GV_app.screen.height/2 );
  GV_app.stage.addChild(loadingtext);

}
