

function battleScreen_updateTeamMinis() {


  //TODO: draw each mini
  initMinis() //draw minis using coco2d

  //draw each mini's hitbox
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {

    var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)

    battleScreen_updateTeamMinis_draw(chara, 1)

  }

  //draw enemy minis
  for(var i = 0; i < SAVEGAME.opfor[SAVEGAME.current_wave].length; i++) {

    var chara = getOpChara(SAVEGAME.opfor[SAVEGAME.current_wave][i].charaID)
    battleScreen_updateTeamMinis_draw(chara, 0)

  }

}

//side 0 = left, side 1 = right
function battleScreen_updateTeamMinis_draw(charaObj, side) {
  var layer = GV_app.stage.getChildByName("teamMinis");

  var chara = charaObj
  var pos = charaObj.pos
  var charaFloor;

  var offset = 0;

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
  if(side == 0) { //mirror y if side is on left
    hbxLoc*= -1;
  }
  var charSp = ezPlaceGraphics(layer, hitboxGra, 5, hbxLoc, hbyLoc-BattleScreen_Minis_hitboxHeight/2, 1) //1
  charSp.interactive = true
  charSp.cursor = 'pointer';

  charSp.on('pointerdown', function() {
    battleScreen_unhighlightAll()
    battleScreen_highlightTile(chara.pos, side);
    SAVEGAME.targetedChara = chara.charaID;
  });

  //draw chara debug info
  var txt = makeText("CID:" + chara.charaID, 12);
  txt.anchor.set(0.5,0.5)
  charSp.addChild(txt);

  //draw chara hpinfo
  battleScreen_addHpInfo(chara, hbxLoc, hbyLoc);

}
