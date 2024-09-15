var v;
function battleScreen_genDisk() {

  var layer = GV_app.stage.getChildByName("diskLayer");

  //Fill selection pool
  var avaliableDisk = [];
  var activeTeam = SAVEGAME.teamlist[SAVEGAME.active_team];
  for(var i = 0; i < activeTeam.length; i++) {
    var chara = getMyChara(activeTeam[i].charaID);
    for(var j = 0; j < chara.disk.length; j++) {
      avaliableDisk.push({cid:chara.charaID,diskType:chara.disk[j]});
    }
  }

  //console.log(diskPool)

  //make disks
  for(var i = 0; i < BattleScreen_Disk_DiskPoolSize; i++) {

    //choose random disk
    var randomDiskIdx = rng(0, avaliableDisk.length-1);
    var randomDisk = avaliableDisk[randomDiskIdx];
    avaliableDisk.splice(randomDiskIdx, 1);

    //select disk
    var disk = battleScreen_disk_mkdsk(randomDisk.cid, randomDisk.diskType);

    //place disk
    layerPlace(disk, 8, -(2*BattleScreen_Disk_DiskSpacing*UiSize)+i*BattleScreen_Disk_DiskSpacing*UiSize ,0,UiSize)
    disk.originalX = disk.x;
    disk.originalY = disk.y;
    layer.addChild(disk)
  }


}

//when the number of required (3) disks are selected
function battleScreen_disk_onMaxDiskSelect() {

  var layer = GV_app.stage.getChildByName("diskLayer");

  var blastSel = 0;
  var acceleSel = 0;
  var chargeSel = 0;

  var lastChara = null; //used for dertimining Puella combo
  var isCombo = false;
  //distrubute combos and magia gems
  for(var i = 0; i < SAVEGAME.diskBuffer.length; i++) {
    var disk = SAVEGAME.diskBuffer[i]
    getMyChara(disk.charaID).connect++
    if(disk.type == "blast_h" || disk.type == "blast_v") blastSel++;
    else if(disk.type == "accele") acceleSel++;
    else if(disk.type == "charge") chargeSel++;

    if(lastChara == null) lastChara = disk.charaID;
    if(lastChara != disk.charaID) lastChara = "noCombo"
  }

  //bonuses
  if(lastChara != "noCombo") { //check for puella combo
    alert("Puella Combo")
    isCombo = true;
  }
  if(chargeSel == BattleScreen_Disk_MaxDiskSelect) {
    SAVEGAME.num_charge += BattleScreen_DMG_ChargeComboBonus;
  }
  //distrubute accell if combo
  if(acceleSel == BattleScreen_Disk_MaxDiskSelect) {
    for(var i = 0; i < SAVEGAME.teamlist[SAVEGAME.active_team].length; i++) {
      var chara = getMyChara(SAVEGAME.teamlist[SAVEGAME.active_team][i].charaID)
      chara.mp += BattleScreen_DMG_MPComboBonus;
      battleScreen_updateHpInfo(chara);
    }
  }

  //deal damage
  for(var i = 0; i < SAVEGAME.diskBuffer.length; i++) {
    var disk = SAVEGAME.diskBuffer[i];
    battleScreen_doDamage(disk, isCombo, (blastSel == BattleScreen_Disk_MaxDiskSelect));
  }

  //clear disks
  SAVEGAME.diskBuffer = [];
  clearLayer(layer);
  battleScreen_genDisk() //make new disks
  battleScreen_genDisk_drawDiskBuff();
  console.log("----- ");
}
//creates 1 disk
//input: name of chara from team (string), type of disk atack (string - blast, charge, etc.)
var Temp_SelectedDiskCount = 0;
function battleScreen_disk_mkdsk(charaID, type) {

  const disk = new PIXI.Container();

  //get chara
  var chara = null;
  for(var i = 0; i < SAVEGAME.my_chara.length; i++) {
    if(SAVEGAME.my_chara[i].charaID == charaID) {
      chara = SAVEGAME.my_chara[i];
      break;
    }
  }
  if(chara == null) {
    console.log("ERROR: you do not own " + charaID);
    return;
  }

  //----------------------------------------------------------------------------
  //Disk types
  var diskBg;
  var diskText;
  if(type == "blast_h") {
    diskBg = makeSubTexSprite(ASSETS.ui_command_12)
    diskText = makeSubTexSprite(ASSETS.ui_command_tx_01)
  }
  else if(type == "blast_v") {
    diskBg = makeSubTexSprite(ASSETS.ui_command_12)
    diskText = makeSubTexSprite(ASSETS.ui_command_tx_02)
  }
  else if(type == "accele") {
    diskBg = makeSubTexSprite(ASSETS.ui_command_13)
    diskText = makeSubTexSprite(ASSETS.ui_command_tx_03)
  }
  else if(type == "charge") {
    diskBg = makeSubTexSprite(ASSETS.ui_command_14)
    diskText = makeSubTexSprite(ASSETS.ui_command_tx_04)
  }
  diskBg.x = 9;
  diskText.anchor.set(0.5,1)
  diskText.x = 60;
  diskText.y = 120;

  //----------------------------------------------------------------------------
  //connect gems
  var connectGems;
  if(chara.connect <= 0) connectGems = makeSubTexSprite(ASSETS.connect_00);
  else if(chara.connect == 1) connectGems = makeSubTexSprite(ASSETS.connect_01);
  else if(chara.connect == 2) connectGems = makeSubTexSprite(ASSETS.connect_02);
  else connectGems = makeSubTexSprite(ASSETS.connect_03);
  connectGems.y=3;
  disk.connectGems = connectGems;

  //----------------------------------------------------------------------------
  //elements
  var element;
  if(chara.element == "light") element = makeSubTexSprite(ASSETS.icon_light);
  else if(chara.element == "dark") element = makeSubTexSprite(ASSETS.icon_dark);
  else if(chara.element == "forest") element = makeSubTexSprite(ASSETS.icon_green);
  else if(chara.element == "fire") element = makeSubTexSprite(ASSETS.icon_fire);
  else if(chara.element == "water") element = makeSubTexSprite(ASSETS.icon_water);
  else if(chara.element == "void") element = makeSubTexSprite(ASSETS.icon_void);
  element.y = 60
  element.x = 16
  //----------------------------------------------------------------------------
  //character icon
  var charaIco = makeSprite([ASSETS.minis_path+"mini_"+charaID.split('-')[0]+"_d.png"]);
  charaIco.x = -5
  charaIco.y = -20

  disk.addChild(diskBg)
  disk.addChild(charaIco)
  disk.addChild(connectGems)
  disk.addChild(element)
  disk.addChild(diskText)

  //----------------------------------------------------------------------------
  //Disk interaction Logic
  //----------------------------------------------------------------------------
  disk.interactive = true
  disk.cursor = 'pointer';
  disk.connectCharacter = null;
  disk.type = type;
  disk.charaID = charaID;
  disk.deadZone = true;
  disk.originalX = null;
  disk.originalY = null;
  disk.isSelected = false;
  disk.element = chara.element;

  var layer = GV_app.stage.getChildByName("diskLayer");


  disk.on('pointerdown', function() {
    disk.originalX = disk.x;
    disk.originalY = disk.y;

    disk.deadZone = true

    disk.on('pointermove', function(e) {

      setTimeout(function (){
        disk.deadZone = false;
      }, BattleScreen_Disk_MoveDeadzone);

      if(!disk.deadZone) {
        //make all other disk uninteractive to stop bug from overlaping disks causes wrong interaction
        for(var i = 0; i < layer.children.length; i++) {
          if(layer.children[i] != disk) layer.children[i].interactive = false;
        }

        disk.x = e.global.x - disk.width/2; //make disk follow pointer (offset to make it center)
        disk.y = e.global.y - disk.width/2; //disk.width is intentional, looks more centered
      }
    });
  });
  disk.on('pointerup', function() {
    disk.off('pointermove') //stop disk from following pointer

    for(var i = 0; i < layer.children.length; i++) layer.children[i].interactive = true; //renable interaction

    //if disk was dragged do connect get chara that is in drop range
    if(disk.originalX != disk.x && disk.originalY != disk.y) {
      //var charaLst = GV_app.stage.getChildByName("myCharaLayer").children;
      var charaLst = [];
      for(var i = 0; i < charaLst.length; i++) {
        if(     Math.abs(charaLst.children[i].x - (disk.x+disk.width/2)) <= BattleScreen_Disk_DropHitSize*PixelSize*PixelSize
             && Math.abs(charaLst.children[i].y - (disk.y+disk.width/2)) <= BattleScreen_Disk_DropHitSize*PixelSize*PixelSize) { //PixelSized squared. why? idk. Either geometry of pixel zoom is applied twice somewhere
          disk.connectCharacter = charaLst.children[i];
          for(var j = 0; j < disk.children.length; j++) {disk.children[j].tint = 0x999999;}
          //Temp_SelectedDiskCount++;
          //if(Temp_SelectedDiskCount == BattleScreen_Disk_MaxDiskSelect) battleScreen_disk_onMaxDiskSelect();
          break;
        }
      }

      disk.x = disk.originalX;
      disk.y = disk.originalY;
    }

    //if disk not dragged do regular select
    else {
      if(disk.isSelected) {   //Deselect disk if disk is selected
        for(var j = 0; j < disk.children.length; j++) {disk.children[j].tint = 0xffffff;} //untint disk
        battleScreen_genDisk_remDisk2buff(disk); //add disk to selected disk buffer;
        disk.isSelected = false;
      }

      else if(disk.connectCharacter != null) { //deconnect disk if disk is connected
        /*for(var j = 0; j < disk.children.length; j++) {disk.children[j].tint = 0xffffff;} //untint disk
        disk.connectCharacter = null;
        Temp_SelectedDiskCount--;*/

      }

      else { //unselected disk selected
        //TODO: selected disk logic
        disk.isSelected = true;
        battleScreen_genDisk_addDisk2buff(disk)
        for(var j = 0; j < disk.children.length; j++) {disk.children[j].tint = 0x999999;} //tint disk
      }
    }

  });

  disk.on('pointerleave', function() {
    //disk.off('pointermove')
    //disk.x = disk.originalX;
    //disk.y = disk.originalY;
  });


  return disk;
}


function battleScreen_genDisk_drawDiskBuff() {
  var layer = GV_app.stage.getChildByName("diskLayer");

  //undraw the old disks
  while(objExist(layer.getChildByName("disksels"))) {
    layer.removeChild(layer.getChildByName("disksels"))
  }

  //draw buffer
  var start = 0;
  var diskSeperation = 100;
  var diskSeperationTop = 25;
  for(var i = 0; i < SAVEGAME.diskBuffer.length; i++) {
    var d = battleScreen_disk_mkdsk(SAVEGAME.diskBuffer[i].charaID, SAVEGAME.diskBuffer[i].type);
    d.interactive = false;
    d.connectGems.alpha = 0
    d.name = "disksels"
    layerPlace(d, 2, start+diskSeperation*i*UiSize , diskSeperationTop*UiSize, UiSize*.7)
    layer.addChild(d)
  }
}

function battleScreen_genDisk_addDisk2buff(disk) {
  //Add disk to buffer
  SAVEGAME.diskBuffer.push(disk)

  //do attacks if buffer is full
  if(SAVEGAME.diskBuffer.length == BattleScreen_Disk_MaxDiskSelect) {
    battleScreen_disk_onMaxDiskSelect()
  }

  //draw buffer
  battleScreen_genDisk_drawDiskBuff();
}

function battleScreen_genDisk_remDisk2buff(disk) {

  for(var i = 0; i < SAVEGAME.diskBuffer.length; i++) {
    if(SAVEGAME.diskBuffer[i] == disk) {
      SAVEGAME.diskBuffer.splice(i, 1);
    }
  }

  battleScreen_genDisk_drawDiskBuff();
}
