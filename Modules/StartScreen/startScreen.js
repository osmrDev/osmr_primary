function startScreen() {

   clearPixi();

  //show bg
  var bg = makeBackground(ASSETS.web_0019)

  //on click
  bg.eventMode = 'static';
  bg.on('pointerdown', function(){
    dispHomeScreen();
  });
  place(bg, 5, 0, 0, 1)

  var ts = makeSprite(ASSETS.icon_skill_1012)
  place(ts, 9, 0, 0, 1)



  var txt = makeText("Magia ReRecord", 32);
  place(txt, 5, 0, 0, 1)

  cropFrame(AspectRatio);


}
