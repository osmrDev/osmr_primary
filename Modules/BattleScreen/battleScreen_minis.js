

function battleScreen_updateTeamMinis() {

  var layer = GV_app.stage.getChildByName("teamMinis");

  //draw each mini
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {

    var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)

    var charaFloor;

    var offset = 0;

    if(chara.position >= 1 && chara.position <= 3) ;

    var a = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, 75, 0, 1)


    var colorMatrix =  [
      1, 0, 0, 0, 0.9,
      0, 1, 0, 0, 0.9,
      0, 0, 1, 0, 0.9,
      0, 0, 0, 1, 0
  ];
  var filter = new PIXI.ColorMatrixFilter();
  //filter.matrix = colorMatrix;
  //filter.lsd = true
  a.filters = [filter];
  }

}
