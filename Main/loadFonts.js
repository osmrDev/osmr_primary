var fontA = new FontFaceObserver('gamefont');
var fontLoaded = false;

fontA.load().then(function () {
  console.log("fontA loaded")
  fontLoaded = true;
});
