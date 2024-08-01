
function makeText(str, size) {

  //show loading text
  const txt = new PIXI.Text(str, new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: size*PixelSize,
      fill: "#ffffff",
      align: "center",
      fontWeight: "bold"
  }));
  //loadingtext.name = ""

  return txt;


}

function makeNTextNoScale(str, size) {

  //show loading text
  const txt = new PIXI.Text(str, new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: size,
      fill: "#ffffff",
      align: "center",
      fontWeight: "bold"
  }));
  //loadingtext.name = ""

  return txt;


}
