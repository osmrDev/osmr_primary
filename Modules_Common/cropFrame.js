

//
var arho;
var arvo;
function cropFrame(aspect_ratio) {

  arho = (GV_app.screen.height - GV_app.screen.width / AspectRatio ) / 2
  if(arho < 0) arho = 0;
  arvo = (GV_app.screen.width - GV_app.screen.height * AspectRatio ) / 2
  if(arvo < 0) arvo = 0;

  var blackBarHeight = (GV_app.screen.height - GV_app.screen.width / aspect_ratio ) / 2;
  var blackBarWidth = (GV_app.screen.width - GV_app.screen.height * aspect_ratio ) / 2;

  var blackBar = new PIXI.Graphics();
  blackBar.beginFill(0x500000);

  if(blackBarHeight > 0) {
    //Top
    blackBar.drawRect(0, 0, GV_app.screen.width, blackBarHeight);
    //Bttm
    blackBar.drawRect(0, GV_app.screen.height-blackBarHeight, GV_app.screen.width, blackBarHeight);
  }
  if(blackBarWidth > 0) {
    //Left
    blackBar.drawRect(0, 0, blackBarWidth, GV_app.screen.height);

    //Right
    blackBar.drawRect(GV_app.screen.width-blackBarWidth, 0, blackBarWidth, GV_app.screen.height);

  }

  GV_app.stage.addChild(blackBar);
}
