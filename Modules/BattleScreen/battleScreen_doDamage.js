



function battleScreen_doDamage(disk, isPCombo, isBlastCombo) {

  var myChara = getMyChara(disk.charaID);

  var damage = myChara.dmg_base;
  var accelGain = 0;
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
  if(isPCombo) damage *= BattleScreen_DMG_PuellaComboModif;

  if(disk.type == "charge") {
    SAVEGAME.num_charge++;
  }
  else {
    if(disk.type == "blast_v" || disk.type == "blast_h") damage += damage * BattleScreen_DMG_ChargeModifDmg * SAVEGAME.num_charge //increse damage by 25% after every charge
    if(disk.type == "accele") accelGain = BattleScreen_DMG_MPGainPerDisk + BattleScreen_DMG_MPGainPerDisk * BattleScreen_DMG_ChargeModifMp * SAVEGAME.num_charge
    SAVEGAME.num_charge = 0;
  }
  if(isBlastCombo) { //incrse damage by 50% of a blast
    damage *= BattleScreen_DMG_BlastComboModif
  }

  //deal damage

  for(var i = 0; i < charaToHit.length; i++) {
    //apply elemental bonus if match
    if( (disk.element == "light"  && charaToHit[i].element == "dark"  ) ||
        (disk.element == "dark"   && charaToHit[i].element == "light" ) ||
        (disk.element == "fire"   && charaToHit[i].element == "forest") ||
        (disk.element == "water"  && charaToHit[i].element == "fire"  ) ||
        (disk.element == "forest" && charaToHit[i].element == "water" ) ){
      damage *= BattleScreen_DMG_OppsiteAffinityBonus;
    }
    //apply elemental debuff if match
    else if(  (disk.element == "forest" && charaToHit[i].element == "fire"  ) ||
              (disk.element == "fire"   && charaToHit[i].element == "water" ) ||
              (disk.element == "water"  && charaToHit[i].element == "forest") ){
      damage /= BattleScreen_DMG_OppsiteAffinityBonus;
    }

    //update atacker info
    charaToHit[i].hp_current -= damage;
    battleScreen_updateHpInfo(charaToHit[i])

    //update atackee info
    myChara.mp += accelGain;
    battleScreen_updateHpInfo(myChara)

    console.log(disk.charaID + " " + disk.type + " damage " + damage + " to " + charaToHit[i].charaID + ". +" + accelGain + " mp");
  }


}
