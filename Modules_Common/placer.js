

/*
┌──────────────────────────┐
│ 1           2         3  │
│                          │
│ 4           5         6  │
│                          │
│ 7           8         9  │
└──────────────────────────┘
*/


function placer(obj, loction, offsetRight, offsetBtm, zoom) {

  offsetRight *= PixelSize;
  offsetBtm *= PixelSize;

  obj.scale.set(PixelSize*zoom, PixelSize*zoom);

  //aspect ratio height offset
  //Without this, placer will place object at the top or bottom edge of screen
  //Arho and Varho provides offset so that it places at edge of viewable area
  //// TODO: move outside


  switch(loction) {
  case 1:
    obj.anchor.set(0.0,0.0);
    obj.position.set(0+offsetRight+arvo, 0+offsetBtm+arho);
    break;
  case 2:
    obj.anchor.set(0.5,0.0);
    obj.position.set(GV_app.screen.width/2+offsetRight, 0+offsetBtm+arho);
    break;
  case 3:
    obj.anchor.set(1,0.0);
    obj.position.set(GV_app.screen.width+offsetRight-arvo, 0+offsetBtm+arho);
    break;
  case 4:
    obj.anchor.set(0,0.5);
    obj.position.set(0+offsetRight+arvo, GV_app.screen.height/2+offsetBtm);
    break;
  case 5:
    obj.anchor.set(0.5,0.5);
    obj.position.set(GV_app.screen.width/2+offsetRight, GV_app.screen.height/2+offsetBtm);
    break;
  case 6:
    obj.anchor.set(1,0.5);
    obj.position.set(GV_app.screen.width+offsetRight-arvo, GV_app.screen.height/2+offsetBtm);
    break;
  case 7:
    obj.anchor.set(0.0, 1);
    obj.position.set(0+offsetRight+arvo, GV_app.screen.height+offsetBtm-arho);
    break;
  case 8:
    obj.anchor.set(0.5, 1);
    obj.position.set(GV_app.screen.width/2+offsetRight, GV_app.screen.height+offsetBtm-arho);
    break;
  case 9:
    obj.anchor.set(1, 1);
    obj.position.set(GV_app.screen.width+offsetRight-arvo, GV_app.screen.height+offsetBtm-arho);
    break;
  default: console.log("error: invalid obj place location"); break;
  }


  return obj;

}


function place(obj, loction, offsetRight, offsetBtm, zoom) {

  var obj = placer(obj, loction, offsetRight, offsetBtm, zoom);
  GV_app.stage.addChild(obj);

}

function ezPlaceGraphics(parent, gra, loction, offsetRight, offsetBtm, zoom) {

  zoom*=UiSize;
  offsetBtm*=UiSize;
  offsetRight*=UiSize;

  var char1tx = GV_app.renderer.generateTexture(gra);
  var sobj = new PIXI.Sprite(char1tx);
  placer(sobj, loction, offsetRight, offsetBtm, zoom);

  parent.addChild(sobj)
  return sobj;
}

function ezPlaceUI(parent, asset, loction, offsetRight, offsetBtm, zoom) {

  zoom*=UiSize;
  offsetBtm*=UiSize;
  offsetRight*=UiSize;

  var sobj = makeSprite(asset);
  placer(sobj, loction, offsetRight, offsetBtm, zoom);

  parent.addChild(sobj)
  return sobj;
}

function layerScale(layer) {

  var arho = (GV_app.screen.height - GV_app.screen.width / AspectRatio ) / 2
  if(arho < 0) arho = 0;
  var arvo = (GV_app.screen.width - GV_app.screen.height * AspectRatio ) / 2
  if(arvo < 0) arvo = 0;

  layer.scale.x *= UiSize
  layer.scale.y *= UiSize

  layer.x+=arvo*UiSize;
  layer.y+=arho*UiSize;
}
