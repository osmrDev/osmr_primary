


function makeSubTexSprite(asset) {

  //load texture and make sprite
  var renderTexture = PIXI.Texture.from(asset[0])

  subTexture = new PIXI.Texture(renderTexture, new PIXI.Rectangle(asset[3], asset[4], asset[1], asset[2]))

  var sprite = new PIXI.Sprite(subTexture);

  return sprite;


}


function makeSprite(asset) {

  var renderTexture = PIXI.Texture.from(asset[0])

  var sprite = new PIXI.Sprite(renderTexture);

  return sprite
}
