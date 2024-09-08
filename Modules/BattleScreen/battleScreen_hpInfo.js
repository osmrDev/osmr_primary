

function battleScreen_addHpInfo(chara, hbxLoc, hbyLoc) {
  var layer = GV_app.stage.getChildByName("hpInfoLayer");
  var pos = getCharaGridPos(chara.charaID);

  //positionOffset
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
  else if(chara.element == "forest") ezPlaceCropped(layer, ASSETS.icon_geen, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "fire") ezPlaceCropped(layer, ASSETS.icon_fire, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "water") ezPlaceCropped(layer, ASSETS.icon_water, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "void") ezPlaceCropped(layer, ASSETS.icon_void, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)

  console.log(chara)
}

function battleScreen_updateHpInfo(chara) {
  var hpbar = GV_app.stage.getChildByName("hpInfoLayer").getChildByName(chara.charaID)
  hpbar.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(chara.hp_current/chara.hp_max)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);
}
