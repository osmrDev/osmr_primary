
function battleScreen_doDamage(disk, isCombo) {

  var damage = 100;
  var charaToHit = [getOpChara(SAVEGAME.targetedChara)];


  //todo
  if(disk.type == "blast") {
  }

  //deal damage
  for(var i = 0; i < charaToHit.length; i++) {
    if(isCombo) charaToHit[i].hp_current -= damage*2;
    else charaToHit[i].hp_current -= damage;
    battleScreen_updateHpInfo(charaToHit[i])
  }


}
