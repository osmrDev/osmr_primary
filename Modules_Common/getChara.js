
/*
 0   1    <= side
--- ---
321 123
654 456   <= pos
987 789
*/


//find and return a chara from your unlocked charas (passed as refrence)
function getMyChara(cid) {
  for(var i = 0; i < SAVEGAME.my_chara.length; i++) {
    if(cid == SAVEGAME.my_chara[i].charaID) return SAVEGAME.my_chara[i]
  }
  return null;
}
//find and return a chara from your opponent charas (passed as refrence)
function getOpChara(cid) {
  for(var i = 0; i < SAVEGAME.opponent.length; i++) {
    if(cid == SAVEGAME.opponent[i].charaID) return SAVEGAME.opponent[i]
  }
  return null;
}
//add character from character manafest to unlocked chara list
function unlockChara() {
  //TODO
}

//Get character's position on battle grid
//returns null if not onfield
function getCharaGridPos(charaID) {
  for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {
    if(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID == charaID) return SAVEGAME.teamlist[SAVEGAME.active_team][i].pos
  }
  return null;
}


function getCharaAtPos(pos, side) {
  if(side == 1) {
      for(var i = 0; i < SAVEGAME.opfor[SAVEGAME.current_wave].length; i++) {
        if(SAVEGAME.opfor[SAVEGAME.current_wave][i].pos == pos) return getOpChara(SAVEGAME.opfor[SAVEGAME.current_wave][i].charaID)
    }
  }

  return null;
}
