//For live2d mouth movments
let RV_mouthValue = 0;
GV_app.ticker.add(() => {
  // mimic the interpolation value, 0-1
  mouthValue = Math.sin(performance.now() / 80) / 2 + 0.5;
});
