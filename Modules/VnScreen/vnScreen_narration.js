
function vnScreen_narration(storyGroupItem) {

    //Update data
    if(storyGroupItem.narration != null && storyGroupItem.narration != undefined)
      VNV_narration = storyGroupItem.narration;

    if(storyGroupItem.narrationEffect != null && storyGroupItem.narrationEffect != undefined)
      VNV_narrationEffect = storyGroupItem.narrationEffect;

    //Act on data
    if(VNV_narration != "") {
      GV_app.stage.getChildByName("narrationLayer").removeChild(GV_app.stage.getChildByName("narrationLayer").getChildByName("text"))
      var text = VNV_narration;
      var jsFormatText = text.replaceAll("@", "\n");

      var txt = makeText(jsFormatText, 24);
      placer(txt, 5, 0, 0, 1)
      txt.name = "text";
      GV_app.stage.getChildByName("narrationLayer").addChild(txt);
    }

    if(VNV_narrationEffect == "out") {
      vnScreen_narration_effect_out();
    }
    if(VNV_narrationEffect == "in") {
      vnScreen_narration_effect_in();
    }

}

function vnScreen_narration_clr() {
  VNV_narration = "";
  VNV_narrationEffect = "";
}


//------------------------------------------------------------------------------
// EFFECTS
//------------------------------------------------------------------------------
function vnScreen_narration_effect_out() {
  GV_app.stage.getChildByName("narrationLayer").getChildByName("text").alpha = 0;

  function tickerAction(time) {
    if(GV_app.stage.getChildByName("narrationLayer").getChildByName("text").alpha < 1) GV_app.stage.getChildByName("narrationLayer").getChildByName("text").alpha -= Narration_effect_out_fadeRate * GV_ticker.deltaTime;
  }

  //prevents fade effects from stacking (without it effect will become faster at each run)
  if(GV_ticker.fadingOutStarted != true) {
    GV_ticker.add(tickerAction);
    GV_ticker.fadingOutStarted = true;
  }
}


function vnScreen_narration_effect_in() {
  var txtObj = GV_app.stage.getChildByName("narrationLayer").getChildByName("text");

  txtObj.alpha = 0; //fade effect
  txtObj.targetY = txtObj.y; //up movment end
  txtObj.y += Narration_effect_in_moveDist*PixelSize; //up movment start

  function tickerAction(time) {
    if(txtObj.alpha < 1) txtObj.alpha += Narration_effect_in_fadeRate * GV_ticker.deltaTime;
    if(txtObj.y > txtObj.targetY) txtObj.y -= Narration_effect_in_moveRate *PixelSize * GV_ticker.deltaTime;
  }

  GV_ticker.add(tickerAction);
}
