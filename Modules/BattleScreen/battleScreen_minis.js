

function battleScreen_updateTeamMinis() {

  var layer = GV_app.stage.getChildByName("teamMinis");

  //TODO: draw each mini
  initMinis()

  //draw each mini
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {

    var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)

    var charaFloor;

    var offset = 0;

    battleScreen_highlightTile(chara.pos);

    //draw chara hitbox



  }


}
