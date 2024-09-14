
var SAVEGAME = {

  save_name:"test",

  //There is function called "TODO" which will read the active team, then go into team list and apply the position to teach of your charas
  //This is to allow you to have preset team positions
  //NOTE: charaID have the OG ID followed by a hyphen digit. hyphen digit allows for duplicates of characters
  active_team: 0,
  num_charge: 0,
  diskBuffer: [],
  teamlist: [
    [{charaID:"100100-0", pos:1},{charaID:"100200-0", pos:5}],
  ],
  my_chara: [
    {charaID:"100100-0", pos:1, hp_base:1000, hp_max:1000, hp_current:1000, mp:0, def_base:100, def:100, dmg_base:100, connect:0, element:"light", disk:["accele", "accele", "charge", "charge", "blast_v"], effects:[]},
    {charaID:"100200-0", pos:5, hp_base:1000, hp_max:1000, hp_current:1000, mp:0, def_base:100, def:100, dmg_base:100, connect:0, element:"water", disk:["accele", "accele", "blast_h", "charge", "blast_v"], effects:[]},
  ],

  //enemies are handled like charas, their data is stored in "opponent" array
  //opfor is like teamlist except each element represents a wave instead of a preset
  targetedChara: "715000-0", //ID of targetedChara
  current_wave: 0,
  opfor: [
    [{charaID:"715000-0", pos:1},{charaID:"715000-1", pos:7},], //wave1
  ],
  opponent: [
    {charaID:"715000-0", pos:1, hp_base:1000, hp_max:1000, hp_current:1000, mp:0, def_base:100, def:100, dmg_base:100, connect:0, element:"dark", disk:["accele", "accele", "accele", "accele", "accele"], effects:[]},
    {charaID:"715000-1", pos:7, hp_base:1000, hp_max:1000, hp_current:1000, mp:0, def_base:100, def:100, dmg_base:100, connect:0, element:"dark", disk:["accele", "accele", "accele", "accele", "accele"], effects:[]},
  ]
}


function saveData() {

  //TODO: Save data using local storage api

}

function loadData(name) {
  //TODO: Save data using local storage api
}



//Chara IDS:
//100100 - iroha
