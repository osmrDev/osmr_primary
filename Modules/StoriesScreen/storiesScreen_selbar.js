function storiesScreen_selbar(){

  var layer = new PIXI.Container();

  var bg = makeBackground(ASSETS.bg_adv_11011);
  layer.addChild(bg);

  var darkenBar = new PIXI.Graphics();
  darkenBar.beginFill(0x000000);
  darkenBar.drawRect(0, 0, GV_app.screen.width, 60*PixelSize*UiSize);
  darkenBar.y = GV_app.screen.height-arho-60*PixelSize*UiSize;
  darkenBar.alpha = .75;
  layer.addChild(darkenBar);

  //----------------------------------------------------------------------------

  var sr = 50; //Shift Right
  var gap = 190;
  var mainStory = ezPlaceUI(layer, ASSETS.tab_main_quest_s, 7, sr, -10, 1);
  mainStory.eventMode = "static";
  mainStory.on('pointerdown', function(){
    mainStory.alpha = 1;
    annotherStory.alpha = .5
    magucaStory.alpha = .5
    labyrStory.alpha = .5
    storiesScreen_listStory("main")
  });
  var annotherStory = ezPlaceUI(layer, ASSETS.tab_side_quest_s, 7, sr+gap*1, -10, 1);
  annotherStory.eventMode = "static";
  annotherStory.on('pointerdown', function(){
    annotherStory.alpha = 1;
    mainStory.alpha = .5
    labyrStory.alpha = .5
    magucaStory.alpha = .5
    storiesScreen_listStory("side")
  });
  var magucaStory = ezPlaceUI(layer, ASSETS.tab_chara_quest_s, 7, sr+gap*2, -10, 1);
  magucaStory.eventMode = "static";
  magucaStory.on('pointerdown', function(){
    magucaStory.alpha = 1;
    mainStory.alpha = .5
    annotherStory.alpha = .5
    labyrStory.alpha = .5
    storiesScreen_listStory("chara")
  });
  var labyrStory = ezPlaceUI(layer, ASSETS.tab_event_quest_s, 7, sr+gap*3, -10, 1);
  labyrStory.eventMode = "static";
  labyrStory.on('pointerdown', function(){
    labyrStory.alpha = 1;
    mainStory.alpha = .5
    annotherStory.alpha = .5
    magucaStory.alpha = .5
    storiesScreen_listStory("event")
  });

  //----------------------------------------------------------------------------

  var line = ezPlaceUI(layer, ASSETS.footer_rainbow, 8, 0, -60, 1);
  lineScale = 1024/(GV_app.screen.width-arvo)
  line.scale.x = PixelSize

  var menuBttn = ezPlaceUI(layer, ASSETS.global_menu_off, 3, 0, 0, .5);
  menuBttn.eventMode = "static";
  menuBttn.on('pointerdown', dispHomeScreen);

  return layer;
}
