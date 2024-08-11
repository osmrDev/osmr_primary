
function battleScreen_bg() {

  var layer = GV_app.stage.getChildByName("bg");

  var backdrop = makeBackground([ASSETS.story_bg[0] + "bg_adv_96001.jpg", 1024, 768]); //temp

  //backdrop.tint = "aaaaaa"
  layer.addChild(backdrop)

  //draw tiles
  var a = ezPlaceCropped(layer, ASSETS.magicsqbase, 5, 569/2-28, 50, 1)
  var b = ezPlaceCropped(layer, ASSETS.magicsqbase, 5, -569/2+28, 50, 1)
  b.scale.y *= -1;

  battleScreen_tileHighlight_init(layer)
}
