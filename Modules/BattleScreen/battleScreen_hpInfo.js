

function battleScreen_addHpInfo(chara, hbxLoc, hbyLoc) {
  var layer = GV_app.stage.getChildByName("hpInfoLayer");

  var size = BattleScreen_hpInfo_charaHPinfoSize;
  var poffset = BattleScreen_hpInfo_charaHPinfoHeight;
  //draw chara hp bar
  var hp_barBase = ezPlaceCropped(layer, ASSETS.hp_bg01, 5, hbxLoc, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, size)
  var hp_barHP = ezPlaceCropped(layer, ASSETS.hp_bar01, 5, hbxLoc-27*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-42.5*size, size)
  hp_barHP.anchor.set(0,.50)
  hp_barHP.scale.set(1*size*PixelSize, 1*size*PixelSize);
  hp_barHP.name = chara.charaID;
  var element;
  if(chara.element == "light") ezPlaceCropped(layer, ASSETS.icon_light, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "dark") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "forest") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "fire") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "water") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "void") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)

  console.log(chara)
}

function battleScreen_updateHpInfo(chara) {
  var hpbar = GV_app.stage.getChildByName("hpInfoLayer").getChildByName(chara.charaID)
  hpbar.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(chara.hp_current/chara.hp_max)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);
}
