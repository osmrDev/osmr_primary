
var VnScreen_textbox_nameLeft = "";
var VnScreen_textbox_nameRight = "";
var VnScreen_textbox_nameCenter = "";

var VnScreen_textbox_currentText = "";
var VnScreen_textbox_currentBox = "";

function vnScreen_textbox(currentScene) {

  var layer = GV_app.stage.getChildByName("textLayer");
  clearLayer(layer);

  //Updates Data----------------------------------------------------------------
  if(objExist(currentScene.textRight)) VnScreen_textbox_currentText = currentScene.textRight;
  if(objExist(currentScene.textLeft)) VnScreen_textbox_currentText = currentScene.textLeft;
  //TODO: Center Stuff

  if(objExist(currentScene.nameRight)) VnScreen_textbox_nameRight = currentScene.nameRight;
  if(objExist(currentScene.nameLeft)) VnScreen_textbox_nameLeft = currentScene.nameLeft;
  //TODO: Center Stuff

  //Draw Textbox based off data-------------------------------------------------
  var textBg = null;
  if(objExist(currentScene.textLeft) && VnScreen_textbox_nameLeft != "") textBg = ASSETS.story_ui_fukidashi_01_l;
  if(objExist(currentScene.textLeft) && VnScreen_textbox_nameLeft == "") textBg = ASSETS.story_ui_fukidashi_01_l02;
  //TODO: Center Stuff

  if(objExist(currentScene.textRight) && VnScreen_textbox_nameRight != "") textBg = ASSETS.story_ui_fukidashi_01_r;
  if(objExist(currentScene.textRight) && VnScreen_textbox_nameRight == "") textBg = ASSETS.story_ui_fukidashi_01_r02;
  //TODO: Center Stuff

  if(objExist(currentScene.textBg) && currentScene.textBg == "shout") textBg = ASSETS.story_ui_fukidashi_02_r;

  if(textBg == null) return;
  var bg = makeSubTexSprite(textBg);
  placer(bg, 8, 0, -60, 1)
  layer.addChild(bg)

  //Draw names based off data---------------------------------------------------

  var ntxt = null;

  if(textBg == ASSETS.story_ui_fukidashi_01_r) {
    ntxt = makeNTextNoScale(VnScreen_textbox_nameRight, VnScreen_textbox_nameTextSize)
    ntxt.anchor.set(1,0)
    ntxt.x = 320;
    ntxt.y = -ASSETS.story_ui_fukidashi_01_r[2] + 20;
    bg.addChild(ntxt);
  }
  if(textBg == ASSETS.story_ui_fukidashi_01_l) {
    ntxt = makeNTextNoScale(VnScreen_textbox_nameLeft, VnScreen_textbox_nameTextSize)
    ntxt.anchor.set(0,0)
    ntxt.x = -320;
    ntxt.y = -ASSETS.story_ui_fukidashi_01_r[2] + 20;
    bg.addChild(ntxt);
  }
  //TODO: Center Stuff

  //Draw Text-------------------------------------------------------------------

  //TODO: Text fromatting and effects
  var btxt = null;
  if(VnScreen_textbox_currentText != "") {
    btxt = makeNTextNoScale(VnScreen_textbox_currentText, VnScreen_textbox_nameTextSize);
    btxt.style.fill = VnScreen_textbox_bodyTextColor
    btxt.anchor.set(0,0)
    btxt.x = -360;
    btxt.y = -ASSETS.story_ui_fukidashi_01_r[2] + 70;
    bg.addChild(btxt);
  }



}
