
var placerList = [];
var layerPlacerList = [];

var SimWidth = 0;
var SimHeight = 0;

var oldHeight = window.innerWidth;
var oldWidth = window.innerHeight;

addEventListener("resize", (event) => {
  if(DyamicResize) {
    setTimeout(function() { up8(); }, 100);
  }
});


function up8() {

  setAaspectRatio(AspectRatio);
  cropFrame(AspectRatio)

  //redraw sprites
  for(var i = 0; i < placerList.length; i++) {
    placer_updateObjLoc(placerList[i].obj, placerList[i].loction, placerList[i].offsetRight, placerList[i].offsetBtm, placerList[i].zoom, placerList[i].zoomRatio)
  }

  for(var i = 0; i < layerPlacerList.length; i++) {
    layerPlace_updateObjLoc(layerPlacerList[i].obj, layerPlacerList[i].loction, layerPlacerList[i].offsetRight, layerPlacerList[i].offsetBtm, layerPlacerList[i].zoom, layerPlacerList[i].zoomRatio)
  }

  battleScreen_updateHpInfoAll(); //must be placed after redraw
}
