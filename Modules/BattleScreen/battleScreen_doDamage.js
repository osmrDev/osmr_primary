
function battleScreen_doDamage(disk, isPCombo, isDiskCombo) {

  var baseDamage
  var damage = 100;
  charaToHit = [getOpChara(SAVEGAME.targetedChara)];

  const gridCols = 3;
  const gridRows = 3;

  //select targets
  if(disk.type == "blast_v") {
    charaToHit = [];
    var col = getOpChara(SAVEGAME.targetedChara).pos % gridCols
    for(var i = 0; i < gridRows; i++) {
      if(getCharaAtPos(1+gridCols*i,1) != null) charaToHit.push(getCharaAtPos(1+gridCols*i,1));
    }
  }

  //damage modif
  if(isPCombo) damage *= 2;

  if(disk.type == "charge") {
    SAVEGAME.num_charge++;
  }
  else {
    damage += damage * .5 * SAVEGAME.num_charge //increse damage by 25% after every charge
    SAVEGAME.num_charge = 0;
  }


  //deal damage
  console.log(disk.type + " damage " + damage);
  for(var i = 0; i < charaToHit.length; i++) {
    charaToHit[i].hp_current -= damage;
    battleScreen_updateHpInfo(charaToHit[i])
  }


}
