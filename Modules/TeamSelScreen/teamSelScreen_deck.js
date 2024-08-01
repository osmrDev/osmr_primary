var teamDeck = ["00000","00000","00000","00000","00000"];

function teamSelScreen_deck(bg, fn) {

  var layer = new PIXI.Container();

  var offsetPx = -320;
  for(var i = 0; i < 5; i++) {
    let char = new PIXI.Graphics();
    let slot = i;
    char.beginFill(0x000000);
    char.drawRect(0, 0, 150, 400);

    //// TODO: Replace text with graphics
    var txt = makeText("Chara ID\n" + teamDeck[slot], 12);
    txt.x = 150/2;
    txt.y = 400/2
    txt.anchor.set(0.5,0.5)
    char.addChild(txt);

    var charSp = ezPlaceGraphics(layer, char, 5, offsetPx, 0, 1)
    charSp.interactive = true
    charSp.cursor = 'pointer';
    var a = i;
    charSp.on('pointerdown', function(){
      teamSelScreen_chooseChara(slot, bg, fn)
    });


    ezPlaceGraphics(layer, char, 5, offsetPx, 0, 1)
    offsetPx+= 160;
  }




  return layer;

}
