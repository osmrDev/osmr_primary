var aa

function makeBackground(asset) {

  var bgImg = PIXI.Texture.from(asset[0])

  var bgObj = new PIXI.Sprite(bgImg);


  if(GV_app.screen.width/4/3 > GV_app.screen.height) place(bgObj, 5, 0, 0, GV_app.screen.width / asset[1])
  else place(bgObj, 5, 0, 0, GV_app.screen.height / asset[2])

  console.log(GV_app.screen.width)
  //scale to width
  //var scale = GV_app.screen.width / asset[1];
  //bgObj.scale.set(scale, scale)

  return bgObj
}
