
//find and return a chara from your unlocked charas (passed as refrence)
function getMyChara(name) {
  for(var i = 0; i < SAVEGAME.my_chara.length; i++) {
    if(name == SAVEGAME.my_chara[i].charaID) return SAVEGAME.my_chara[i]
  }
  return null;
}
