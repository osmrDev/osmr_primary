var PixelSize;
var UiSize;

var AspectRatio;
var ViewRes_Y_Start;
var ViewRes_Y_End;
var ViewRes_X_Start;
var ViewRes_X_End;
function setAaspectRatio(ar) {
  AspectRatio = ar;
  UiSize = 16/9/(AspectRatio/.9);
  PixelSize = window.innerWidth/1024;
  if(window.innerWidth - window.innerHeight * AspectRatio > 0 ) PixelSize = (window.innerWidth-(window.innerWidth - window.innerHeight * AspectRatio))/1024;
  //viewable height in pixels
  ViewRes_Y_Start = (window.innerHeight - window.innerWidth / AspectRatio ) / 2;
  if(ViewRes_Y_Start < 0) ViewRes_Y_Start = 0;
  ViewRes_Y_End = window.innerHeight-ViewRes_Y_Start;
  if(ViewRes_Y_End < 0) ViewRes_Y_End = 0;

  ViewRes_X_Start = (window.innerWidth - window.innerHeight * AspectRatio ) / 2;
  if(ViewRes_X_Start < 0) ViewRes_X_Start = 0;
  ViewRes_X_End = window.innerWidth-ViewRes_X_Start;
  if(ViewRes_X_End < 0) ViewRes_X_End = 0;
}

function setAaspectRatioFromURL() {

  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("AR");
      console.log(c)
  if(c != null) {
    var arr = c.split(":");
    var l = parseInt(arr[0])
    var w = parseInt(arr[1])
    setAaspectRatio(l/w);
  }
  else {
    setAaspectRatio(4/3);
  }
}
setAaspectRatioFromURL();
