
//check if everything is loaded
function loadChk() {
  // TODO: everything
  return true;
}


document.getElementById("gameCanvas").style.display = "none" //hide canvas while things load so you see default loading screen
function startGame() {

  cc.game.onStart = function() {
    initPixii();
    startScreen();
    document.getElementById("InitialLoadingScreen").remove(); //get rid of loading screen
    document.getElementById("gameCanvas").style.display = "block" //show canvas
  }

  cc.game.run();

}


if(loadChk()) {
  //GV_app.renderer.resize(40, 300);


  startGame()

}
