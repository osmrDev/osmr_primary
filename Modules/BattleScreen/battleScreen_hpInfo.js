

function battleScreen_addHpInfo(chara, hbxLoc, hbyLoc) {

  console.log(chara)

  var layer = GV_app.stage.getChildByName("hpInfoLayer");

  var size = BattleScreen_hpInfo_charaHPinfoSize;
  var poffset = BattleScreen_hpInfo_charaHPinfoHeight;

  var hp_barBase = ezPlaceCropped(layer, ASSETS.hp_bg01, 5, hbxLoc, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, size)

  //draw chara hp bar
  var hp_barHP = ezPlaceCropped(layer, ASSETS.hp_bar01, 5, hbxLoc-27*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-42.5*size, size)
  hp_barHP.anchor.set(0,.50)
  hp_barHP.scale.set(1*size*PixelSize, 1*size*PixelSize);
  hp_barHP.name = chara.charaID+"hp";

  //draw chara mp bar
  var mp_bar = ezPlaceCropped(layer, ASSETS.hp_bar02, 5, hbxLoc-26*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-23.5*size, size)
  mp_bar.anchor.set(0,.50)
  mp_bar.name = chara.charaID+"mp";

  var mp_bar2 = ezPlaceCropped(layer, ASSETS.hp_bar03, 5, hbxLoc-26*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-23.5*size, size)
  mp_bar2.anchor.set(0,.50)
  mp_bar2.name = chara.charaID+"mp2";


  //draw chara element indicator
  var element;
  if(chara.element == "light") ezPlaceCropped(layer, ASSETS.icon_light, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "dark") ezPlaceCropped(layer, ASSETS.icon_dark, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "forest") ezPlaceCropped(layer, ASSETS.icon_geen, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "fire") ezPlaceCropped(layer, ASSETS.icon_fire, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "water") ezPlaceCropped(layer, ASSETS.icon_water, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)
  else if(chara.element == "void") ezPlaceCropped(layer, ASSETS.icon_void, 5, hbxLoc-57*size, hbyLoc-BattleScreen_Minis_hitboxHeight*poffset-40*size, 1.98*size)

  battleScreen_updateHpInfo(chara);
}

function battleScreen_updateHpInfo(chara) {
  var hpbar = GV_app.stage.getChildByName("hpInfoLayer").getChildByName(chara.charaID+"hp")
  if(chara.hp_current >= 0) hpbar.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(chara.hp_current/chara.hp_max)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);
  else hpbar.scale.set(0, 0);


  var mpbar = GV_app.stage.getChildByName("hpInfoLayer").getChildByName(chara.charaID+"mp")
  if(chara.mp <= 0) mpbar.scale.set(0, 0);
  else if(chara.mp >= BattleScreen_DMG_MPMax) mpbar.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(1)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);
  else mpbar.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(chara.mp/BattleScreen_DMG_MPMax)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);

  var mpbar2 = GV_app.stage.getChildByName("hpInfoLayer").getChildByName(chara.charaID+"mp2")
  if(chara.mp <= BattleScreen_DMG_MPMax) mpbar2.scale.set(0, 0);
  else if(chara.mp <= BattleScreen_DMG_MPOverfill) mpbar2.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*((chara.mp-BattleScreen_DMG_MPMax)/(BattleScreen_DMG_MPOverfill-BattleScreen_DMG_MPMax))*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);
  else mpbar2.scale.set(1*BattleScreen_hpInfo_charaHPinfoSize*(1)*PixelSize, 1*BattleScreen_hpInfo_charaHPinfoSize*PixelSize);

}
