
async function homeScreen_chara(){
  //get layer
  var layer = GV_app.stage.getChildByName("charaLayer")

  //Load Json data
  const response = await fetch(ASSETS.chatterScriptPath + HomeScreen_FavChara + ".json");
  var jsonData = await response.json();

  //queue live2d model (will load async)
  var charaPath = ASSETS.l2d_path + HomeScreen_FavChara + "/model.json"
  makeL2D("favChara", charaPath, layer, 5, -150, 150, .28);

  //apply on click function to l2d model
  //this function will wait untill model is loaded to apply click lisenter and run fn
  l2dOnClick("favChara", layer, function(){

    stopSound("favCharaChatter"); //in case any sound is showing

    //find out how many voice lines there are
    var i = 1;
    while(objExist(jsonData.story["group_" + i])) {
      i++;
    }

    //get random voice line
    var groupIdx = rng(1, i-1);

    homeScreen_chara_playHSChatRecursive(layer, jsonData, groupIdx, 0)
  })

}


async function homeScreen_chara_playHSChatRecursive(layer, jsonData, group, line) {
  //stop recursuion if end group.
  if(line >= jsonData.story["group_" + group].length) {
    stopSound("HsChatter");
    layer.removeChild(layer.getChildByName("subtitlesText"))
    return;
  }

  var voiceToPlay = jsonData.story["group_" + group][line].chara[0].voice;
  var subtitles   = jsonData.story["group_" + group][line].chara[0].textHome;
  var timeToWait  = jsonData.story["group_" + group][line].autoTurnFirst;

  //play voice
  if(objExist(voiceToPlay)) {
    stopSound("HsChatter");
    talkl2d("favChara", layer, ASSETS.chatterVoicePath + voiceToPlay + "_hca.wav", "favCharaChatter")
  }

  //display subtitles
  if(objExist(subtitles)) {
    layer.removeChild(layer.getChildByName("subtitlesText"))

    var text = makeText(subtitles, HomeScreen_SubtitleFontSize);
    text.style.fill = HomeScreen_SubtitleColor; //font color
    text.style.stroke = HomeScreen_SubtitleOutline; //outline color
    text.style.strokeThickness = HomeScreen_SubtitleFontSize/4; //outline thickness
    text = placer(text, 5, -150, 200, 1);
    text.name="subtitlesText";
    layer.addChild(text)
  }



  //Wait for dialog to finish before moving on to the next line
  line++;
  setTimeout(function (){
    homeScreen_chara_playHSChatRecursive(layer, jsonData, group, line)
  }, timeToWait*1000);

}
