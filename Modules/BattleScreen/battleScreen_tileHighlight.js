
function battleScreen_tileHighlight_init(layer) {

  var tiles = [];

  tiles[0] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83), -4, 1) //1
  tiles[1] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83+135), -5, 1) //2
  tiles[2] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83+135*2-1), -6, 1) //3
  tiles[3] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (121), -5+56, 1) //4
  tiles[4] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (122+135), -5.75+56, 1) //5
  tiles[5] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (122+135*2), -6.5+56, 1) //6
  tiles[6] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (160), -5+112, 1) //7
  tiles[7] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (162+135), -5+112, 1) //8
  tiles[8] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (162+135*2), -5+111, 1) //9



  tiles[9] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83)*-1, -4, 1) //1
  tiles[10] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83+135)*-1, -5, 1) //2
  tiles[11] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (83+135*2-1)*-1, -6, 1) //3
  tiles[12] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (121)*-1, -5+56, 1) //4
  tiles[13] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (122+135)*-1, -5.75+56, 1) //5
  tiles[14] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (122+135*2)*-1, -6.5+56, 1) //6
  tiles[15] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (160)*-1, -5+112, 1) //7
  tiles[16] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (162+135)*-1, -5+112, 1) //8
  tiles[17] = ezPlaceCropped(layer, ASSETS.magicsqunit1, 5, (162+135*2)*-1, -5+111, 1) //9

  //make the highlights highlighted (brighter)
  var colorMatrix =  [
    1, 0, 0, 0, 0.9,
    0, 1, 0, 0, 0.5,
    0, 0, 1, 0, 0.4,
    0, 0, 0, 1, 0
  ];
  var filter = new PIXI.ColorMatrixFilter();
  filter.matrix = colorMatrix;

  for(var i = 0; i < tiles.length; i++) {
    tiles[i].filters = [filter];
    tiles[i].alpha = 0;
    tiles[i].name = "t"+(i+1);
  }

}

function battleScreen_highlightTile(tileNum, side) {
  if (side == 0) tileNum += 9;
  GV_app.stage.getChildByName("bg").getChildByName("t"+tileNum).alpha = 1;
}
function battleScreen_unhighlightTile(tileNum, side) {
  if (side == 0) tileNum += 9;
  GV_app.stage.getChildByName("bg").getChildByName("t"+tileNum).alpha = 0;
}
function battleScreen_unhighlightAll() {
  var tileNum = 1;
  while(objExist(GV_app.stage.getChildByName("bg").getChildByName("t"+tileNum))) {
    GV_app.stage.getChildByName("bg").getChildByName("t"+tileNum).alpha = 0;
    tileNum++;
  }
}
