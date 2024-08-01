
function vnScreen_nonCharaAudio(currentScene) {

  if(objExist(currentScene.bgm)) {
    if(currentScene.bgm == "stop") {
      stopSound("bgm")
    }
    else {
      playSoundLoop(ASSETS.questBgm_path + currentScene.bgm + ".wav", "bgm");
    }
  }

  if(objExist(currentScene.voiceStop)) {
    stopSound(currentScene.voiceStop);
  }
  if(objExist(currentScene.voice)) {
    playSound(ASSETS.questVoice_path + currentScene.voice + "_hca.wav", currentScene.voice);
  }

}
