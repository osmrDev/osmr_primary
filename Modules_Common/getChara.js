
//find and return a chara from your unlocked charas (passed as refrence)
function getMyChara(name) {
  for(var i = 0; i < SAVEGAME.my_chara.length; i++) {
    if(name == SAVEGAME.my_chara[i].charaID) return SAVEGAME.my_chara[i]
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
