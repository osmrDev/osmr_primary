
//converts text into JS std string and pulls out sfx info
var VnScreen_JsConvertedString;
function vnScreen_sfxParser(currentScene) {

  /*                              Json Effects                               */
  var sceneTags = Object.keys(currentScene);
  for(var i = 0; i < sceneTags.length; i++) {
    var cmd = sceneTags[i] + ":" + currentScene[sceneTags[i]]
    vnScreen_sfxParser_parseCmd(cmd);
  }

  /*                           in text effects                               */
  //Get string
  var rawString;
  if(objExist(currentScene.textRight)) rawString = currentScene.textRight;
  else if(objExist(currentScene.textLeft)) rawString = currentScene.textLeft;
  else return;

  //Extracts command by parsing string char by char
  var cmdBuffer = "";
  var writeBuffer = false;
  var lastBarcketIdx = 0; //
  for(var i = 0; i < rawString.length; i++) {
    if(rawString[i] == "]") {
      writeBuffer = false;
      lastBarcketIdx = i+1;
      vnScreen_sfxParser_parseCmd(cmdBuffer) //sends command to parser when command finishes (brackets not included)
      cmdBuffer = "";
    }
    else if(writeBuffer) cmdBuffer += rawString[i];
    else if(rawString[i] == "[") {
      writeBuffer = true;
    }
  }

  VnScreen_JsConvertedString = rawString.slice(lastBarcketIdx).replace("@","\n"); //getRid of sfx data from string

}

//sfx from text data
function vnScreen_sfxParser_parseCmd(cmd) {
  //cmdPart[0] is the func
  //cmdPart[1] is the args
  var cmdPart = cmd.split(":");

  if(cmdPart[0] == "flashEffect") vnScreen_sfxParser_flashEffect(cmdPart[1]);
  else if(cmdPart[0] == "bgEffect") vnScreen_sfxParser_bgEffect(cmdPart[1]);
  //else alert("Unknown Tag : " + cmdPart);
}

//------------------------------------------------------------------------------
//                               SFX List
//------------------------------------------------------------------------------

function vnScreen_sfxParser_flashEffect(arg) {
  alert("flash sfx : " + arg);
}
function vnScreen_sfxParser_bgEffect(arg) {
  alert("bg sfx : " + arg);
}
