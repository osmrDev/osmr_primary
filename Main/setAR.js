var PixelSize;
var UiSize;

var AspectRatio;
var ViewRes_Y_Start;
var ViewRes_Y_End;
var ViewRes_X_Start;
var ViewRes_X_End;

var arho;
var arvo;

var AspectRatio;
var VariableAspectRatio;

var ARMin = 2/1;
var ARMax = 4/3;
function setAaspectRatio(ar) {

  var h = window.innerHeight;
  var w = window.innerWidth;

  if(VariableAspectRatio) {
    if(w/h > ARMin) AspectRatio = ARMin
    else if(w/h < ARMax) AspectRatio = ARMax
    else AspectRatio = w/h
  }
  else AspectRatio = ar;

  arho = (h - w / AspectRatio ) / 2
  if(arho < 0) arho = 0;
  arvo = (w - h * AspectRatio ) / 2
  if(arvo < 0) arvo = 0;

  UiSize = 16/9/(AspectRatio/.9);
  PixelSize = w/1024;
  if(w - h * AspectRatio > 0 ) PixelSize = (w-(w - h * AspectRatio))/1024;
  //viewable height in pixels
  ViewRes_Y_Start = (h - w / AspectRatio ) / 2;
  if(ViewRes_Y_Start < 0) ViewRes_Y_Start = 0;
  ViewRes_Y_End = h-ViewRes_Y_Start;
  if(ViewRes_Y_End < 0) ViewRes_Y_End = 0;

  ViewRes_X_Start = (w - h * AspectRatio ) / 2;
  if(ViewRes_X_Start < 0) ViewRes_X_Start = 0;
  ViewRes_X_End = w-ViewRes_X_Start;
  if(ViewRes_X_End < 0) ViewRes_X_End = 0;
}

function updateAspectRatio() {
  setAaspectRatio(AspectRatio);
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
    VariableAspectRatio = false;
  }
  else {
    VariableAspectRatio = true;
    setAaspectRatio();
  }
}
setAaspectRatioFromURL();
