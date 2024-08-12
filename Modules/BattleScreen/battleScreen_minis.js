

function battleScreen_updateTeamMinis() {

  var layer = GV_app.stage.getChildByName("teamMinis");

  //draw each mini
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {

    var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)

    var charaFloor;

    var offset = 0;

    battleScreen_highlightTile(chara.pos);

    //draw chara hitbox



  }


}

function t() {
  var current_chara = "100100"
  cc.loader.load([
                  //chara_bg
                    "./image/package/bg/web_common.ExportJson",
                    "./image/package/bg/web_common_petal_00.plist",
                    "./image/package/bg/web_common_petal_01.plist",
                    "./image/package/bg/web_common_petal_02.plist",
                    "./image/package/bg/web_common0.plist",
                     //mini down
                     "./image/package/web/web_ef_unit_marker/web_ef_unit_marker.ExportJson",
                     "./image/package/web/web_ef_unit_marker/web_ef_unit_marker0.plist",
            "./image/image_native/mini/anime_v2/mini_"+current_chara+"00_r.ExportJson",
            "./image/image_native/mini/anime_v2/mini_"+current_chara+"00_r0.plist",
        ], function () {
                    cc.director.runScene(new charaScene());
                }, this);
}
