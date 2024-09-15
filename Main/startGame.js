
//check if everything is loaded
function loadChk() {
  // TODO: everything
  return true;
}


document.getElementById("gameCanvas").style.display = "none" //hide canvas while things load so you see default loading screen
document.getElementById("pixiCanvas").style.display = "none" //hide canvas while things load so you see default loading screen
document.getElementById("pixiCanvas2").style.display = "none" //hide canvas while things load so you see default loading screen
function startGame() {

  cc.game.onStart = function() {
    initPixii();
    startScreen();
    document.getElementById("InitialLoadingScreen").remove(); //get rid of loading screen
    document.getElementById("pixiCanvas").style.display = "block" //show canvas
  }

  cc.game.run();

}

function startStoryEditor() {
  console.log("starting story editor")
  initPixii();
  startScreen();
  GV_app.screen.width = 500
  GV_app.view.width = 2500
  updateAspectRatio()
  document.getElementById("InitialLoadingScreen").remove(); //get rid of loading screen
  document.getElementById("pixiCanvas").style.display = "block" //show canvas
}

function getLaunchMode() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("mode");
  return(c)
}

if(loadChk()) {
  //GV_app.renderer.resize(40, 300);


  if(getLaunchMode() == "editor") startStoryEditor();
  else startGame();

}
