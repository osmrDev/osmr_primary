

function battleScreen_updateTeamMinis() {

  var layer = GV_app.stage.getChildByName("teamMinis");


  //TODO: draw each mini
  initMinis()

  //draw each mini
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {

    var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)
    var pos = getCharaGridPos(chara.charaID);
    var charaFloor;

    var offset = 0;

    battleScreen_highlightTile(chara.pos);

    //draw chara hitbox
    let hitboxGra = new PIXI.Graphics();
    hitboxGra.beginFill(0x000000);
    hitboxGra.alpha = BattleScreen_Minis_HBAlpha;
    hitboxGra.drawRect(0, 0, BattleScreen_Minis_hitboxWidth, BattleScreen_Minis_hitboxHeight);
    var hbxLoc;
    var hbyLoc;
    if(pos == 1) {hbxLoc = 83,         hbyLoc = -4}
    if(pos == 2) {hbxLoc = 83+135,     hbyLoc = -5}
    if(pos == 3) {hbxLoc = 83+135*2-1, hbyLoc = -6}
    if(pos == 4) {hbxLoc = 121,        hbyLoc = -5+56}
    if(pos == 5) {hbxLoc = 122+135,    hbyLoc = -5.75+56}
    if(pos == 6) {hbxLoc = 122+135*2,  hbyLoc = -6.5+56}
    if(pos == 7) {hbxLoc = 160,        hbyLoc = -5+112}
    if(pos == 8) {hbxLoc = 162+135,    hbyLoc = -5+112}
    if(pos == 9) {hbxLoc = 162+135*2,  hbyLoc = -5+111}
    var charSp = ezPlaceGraphics(layer, hitboxGra, 5, hbxLoc, hbyLoc-BattleScreen_Minis_hitboxHeight/2, 1) //1
    charSp.interactive = true
    charSp.cursor = 'pointer';

    //draw chara debug info
    var txt = makeText("CID:" + chara.charaID, 12);
    txt.anchor.set(0.5,0.5)
    charSp.addChild(txt);

    //draw chara hpinfo
    battleScreen_addHpInfo(chara, hbxLoc, hbyLoc);

  }

  //draw enemy minis


}
