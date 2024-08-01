

function teamSelScreen_chooseChara(slot , bg, fn, btnname) {

  //// TODO: Graphics
  teamDeck[slot] = window.prompt("Enter CharID for slot " + slot);

  teamSelScreen(bg, fn, btnname);
}
