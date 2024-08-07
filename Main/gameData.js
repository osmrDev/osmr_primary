
var SAVEGAME = {

  save_name:"test",

  active_team: 0,
  teamlist: [
    [{charaID:"100100", pos:1},],
  ],

  my_chara: [
    {charaID:"100100", pos:1, hp_base:1000, hp_current:1000, mp:0, def_base:100, def:100, connect:0, element:"light", disk:["accele", "accele", "charge", "charge", "blast_v"], effects:[]},
  ]
}


function saveData() {

  //TODO: Save data using local storage api

}

function loadData(name) {
  //TODO: Save data using local storage api
}
