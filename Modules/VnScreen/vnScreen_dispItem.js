

function vnScreen_dspItem(currentScene) {

  //check if item parm exist
  var itemList = currentScene.item;
  if(!objExist(itemList)) {
    return;
  }

  //Loop for every item
  for(var i = 0; i < itemList.length; i++) {

    //create item if item DNE
    var currentItem = GV_app.stage.getChildByName("itemLayer").getChildByName(itemList[i].path);
    if( !objExist(currentItem) ) {
      currentItem = ezPlaceUI(GV_app.stage.getChildByName("itemLayer"), [itemList[i].path], 5, itemList[i].posX, itemList[i].posY, 1);
      currentItem.name = itemList[i].path;
    }

    //Visability Effect
    var currentEffect = itemList[i].visible;
    if(!objExist(currentItem)) return;

    if(currentEffect == "appear") {
      vnScreen_dspItem_fadeIn(currentItem);
    }
    if(currentEffect == "hide") {
      vnScreen_dspItem_fadeOut(currentItem);
    }



  }
}



function vnScreen_clrItemZLayer() {
  //clear layer
  for (var i = GV_app.stage.getChildByName("itemLayer").children.length - 1; i >= 0; i--) {
    GV_app.stage.getChildByName("itemLayer").removeChild(GV_app.stage.getChildByName("itemLayer").children[i]);
  }
}



function vnScreen_dspItem_fadeOut(currentItem) {
  var obj = GV_app.stage.getChildByName("itemLayer").getChildByName(currentItem.name);

  //obj.alpha = 1; //fade effect

  var itemTicker = new PIXI.Ticker();;

  function tickerAction(time) {
    obj.alpha -= Narration_effect_out_fadeRate * GV_ticker.deltaTime;
    if(obj.alpha <= 0) {
      itemTicker.destroy();
    }
  }

  itemTicker.add(tickerAction);
  itemTicker.start();
}



function vnScreen_dspItem_fadeIn(currentItem) {
  var obj = GV_app.stage.getChildByName("itemLayer").getChildByName(currentItem.name);

  //obj.alpha = 0; //fade effect

  var itemTicker = new PIXI.Ticker();;

  function tickerAction(time) {
    obj.alpha += Narration_effect_in_fadeRate * GV_ticker.deltaTime;
    if(obj.alpha >= 1) {
      itemTicker.destroy();
    }
  }

  itemTicker.add(tickerAction);
  itemTicker.start();
}
