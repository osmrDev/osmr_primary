function dispHomeScreen_mainSel(){

  var layer = new PIXI.Container();
  /*
  ezPlaceUI(layer, ASSETS.global_menu, 3, 0, 0, .5, function(){console.log("ho")});
  ezPlaceUI(layer, ASSETS.global_unit, 3, -5, 31, .45);
  ezPlaceUI(layer, ASSETS.global_memoria, 3, -5, 31+96*1, .45);
  ezPlaceUI(layer, ASSETS.global_gacha, 3, -5, 31+96*2, .45);
  ezPlaceUI(layer, ASSETS.global_mission, 3, -5, 31+96*3, .45);
  ezPlaceUI(layer, ASSETS.global_shop, 3, -5, 31+96*4, .45);*/

  //left side chain buttons
  ezPlaceUI(layer, ASSETS.global_menu, 3, 0, 0, .5);
  ezPlaceUI(layer, ASSETS.global_unit, 3, 0, 32, .5);
  ezPlaceUI(layer, ASSETS.global_memoria, 3, 0, 32+106*1, .5);
  ezPlaceUI(layer, ASSETS.global_gacha, 3, 0, 32+106*2, .5);
  ezPlaceUI(layer, ASSETS.global_mission, 3, 0, 32+106*3, .5);
  ezPlaceUI(layer, ASSETS.global_shop, 3, 0, 32+106*4, .5);

  //big silver buttons
  // 352 x 382 each
  var story = ezPlaceUI(layer, ASSETS.global_quest, 9, -100, -75, .5);
  story.eventMode = "static";
  story.on('pointerdown', function() {
    stopSound("HsChatter")
    storiesScreen();
  });

  var mirror = ezPlaceUI(layer, ASSETS.global_battle, 9, -245, 0, .5);

  var team = ezPlaceUI(layer, ASSETS.global_team, 9, -220, -185, .5);
  team.interactive = true
  team.cursor = 'pointer';
  team.on('pointerdown', function() {
    teamSelScreen(ASSETS.bg_adv_11011, dispHomeScreen, "Home")
    stopSound("HsChatter")
  })




  return layer;
}
