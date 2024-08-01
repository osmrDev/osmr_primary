var aa

function makeBackground(asset) {

  var bgImg = PIXI.Texture.from(asset[0])

  var bgObj = new PIXI.Sprite(bgImg);


  place(bgObj, 5, 0, 0, 1)

  //scale to width
  var scale = GV_app.screen.width / asset[1];
  bgObj.scale.set(scale, scale)

  return bgObj
}
