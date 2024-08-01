

//type: 1 = home, 2 = battle
function teamSelScreen_Ui(fn, btnname) {

  var layer = new PIXI.Container();

  var contbttn = ezPlaceUI(layer, ASSETS.generic_bttn, 9, -10, -10, 1)
  contbttn.interactive = true
  contbttn.cursor = 'pointer';

  var txt = makeText(btnname, 12);;
  contbttn.on('pointerdown', fn, dispHomeScreen)
  txt.x = -98/2;
  txt.y = -102/2
  txt.anchor.set(0.5,0.5)
  contbttn.addChild(txt);


  return layer;


}
