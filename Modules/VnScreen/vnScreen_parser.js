
var aa; //for debug, remove later
var bb;
var debug_currentScene;

var jsonScript;
var sceneNum = 0;

var vnParserDBG = true;
var vnParserIgnore = ["autoTurnLast","item","narration","voice","voiceStop","bgm","nameLeft"]

function vnScreen_parser_rescursive(jsonScript) {

  if(sceneNum > jsonScript.length-1) return;

  bb = sceneNum

  aa = jsonScript

  var currentScene = jsonScript[sceneNum];

  debug_currentScene = currentScene;

  //background
  vnScreen_setBG(currentScene);

  //items
  vnScreen_dspItem(currentScene);

  //l2d charaters
  vnScreen_chara(currentScene);

  //SFX
  vnScreen_sfxParser(currentScene)

  //text
  vnScreen_textbox(currentScene);

  //narration
  vnScreen_narration(currentScene);

  //audio
  vnScreen_nonCharaAudio(currentScene);




  sceneNum++;
  GV_app.stage.interactive = true;
  GV_app.stage.once('pointerup', function(){
    console.log("cklick")
    vnScreen_parser_rescursive(jsonScript)
  });
}
