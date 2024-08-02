
var favChara = ASSETS.l2d_iroha;
function dispHomeScreen_chara(){
  var charaLayer = new PIXI.Container();

  makeL2D("favChara", favChara[0], charaLayer, 5, -150, 150, .28);

  l2dOnClick("favChara", charaLayer, function(){
    var voiceToPlay = rng(1,75);
    stopSound("HsChatter")
    if(voiceToPlay < 10) voiceToPlay = "0"+voiceToPlay
    talkl2d("favChara", charaLayer, "resource_conv/sound_native/voice/vo_char_1001_00_" + voiceToPlay + "_hca.wav", "HsChatter")

  })

  return charaLayer;

}
