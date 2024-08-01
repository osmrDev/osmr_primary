nativeCallback = function (pram) {
  console.log(pram);
}

getBaseData = function (pram) {
  console.log(pram);
  JSON.parse(pram, function(key, value) {
    var name = "image" + key;
    var base64 = value;
    var image = "url(data:image/png;base64," + base64 + ")";
    document.getElementById(name).style.backgroundImage = image;
  });
}

function command(id, pram) {
  var message = "game:" + id + "," + pram;
  console.log("message: ", message);
  try {
    webkit.messageHandlers.gameCommand.postMessage(message);
  } catch (e) {
    alert(message);
  }
}

document.body.addEventListener('touchstart', function(e){
  console.log(e);
  var json = [];
  for (var i = 0; i < e.touches.length; i++){
    var identifier = e.touches[i].identifier;
    if (identifier < 0) {
      identifier = -identifier;
    }
    json[i] = {
      "identifier" : identifier,
      "clientX"    : e.touches[i].clientX,
      "clientY"    : e.touches[i].clientY
    }
  }
  command(Config["DATA_CALL_TOUCHES_BEGIN"], JSON.stringify(json));
});

document.body.addEventListener('touchmove', function(e){
  console.log(e);
  var json = [];
  for (var i = 0; i < e.touches.length; i++){
    var identifier = e.touches[i].identifier;
    if (identifier < 0) {
      identifier = -identifier;
    }
    json[i] = {
      "identifier" : identifier,
      "clientX"    : e.touches[i].clientX,
      "clientY"    : e.touches[i].clientY
    }
  }
  command(Config["DATA_CALL_TOUCHES_MOVE"], JSON.stringify(json));
});

document.body.addEventListener('touchend', function(e){
  console.log(e);
  var json = [];
  for (var i = 0; i < e.changedTouches.length; i++){
    var identifier = e.changedTouches[i].identifier;
    if (identifier < 0) {
      identifier = -identifier;
    }
    json[i] = {
      "identifier" : identifier,
      "clientX"    : e.changedTouches[i].clientX,
      "clientY"    : e.changedTouches[i].clientY
    }
  }
  command(Config["DATA_CALL_TOUCHES_END"], JSON.stringify(json));

  var key = e.target.id;
  console.log(key);

  if (key == "DATA_GET_BASE64") {
    command(Config[key], obj);
  }
  if (key == "DATA_GET_DEVICE_INFO") {
    command(Config[key], "");
  }
   if (key == "DATA_CLOSE_APP") {
    command(Config[key], "");
   }
  if (key == "DATA_OPEN_EDIT_BOX") {
    command(Config[key], "{}");
  }
  if (key == "DATA_SET_CLIPBOARD") {
    command(Config[key], "\"a\\iueo");
  }
  if (key == "DATA_GET_CLIPBOARD") {
    var json = {
      "callback" : "clipboard",
    };
    command(Config[key], JSON.stringify(json));
  }
  if (key == "NOTI_GET_CONF_PNOTE") {
    command(Config[key], "{}");
  }
  if (key == "NOTI_AWAKE_PNOTE") {
    command(Config[key], JSON.stringify(NOTI_AWAKE_PNOTE_OBJ_1));
  }
  if (key == "NOTI_TURN_ON_PNOTE") {
    command(Config[key], JSON.stringify(NOTI_AWAKE_PNOTE_OBJ_2));
  }
  if (key == "NOTI_TURN_OFF_PNOTE") {
    command(Config[key], "{}");
  }
  if (key == "NOTI_GET_CONF_WEEKLY_QUEST") {
    command(Config[key], "{}");
  }
  if (key == "NOTI_TURN_ON_WEEKLY_QUEST") {
    command(Config[key], JSON.stringify(noti_turn_on_weekly_quest_obj));
  }
  if (key == "NOTI_TURN_OFF_WEEKLY_QUEST") {
    command(Config[key], JSON.stringify(noti_turn_off_weekly_quest_obj));
  }
  if (key == "NOTI_GET_CONF_AP_FULL") {
    command(Config[key], "{}");
  }
  if (key == "NOTI_TURN_ON_AP_FULL") {
    command(Config[key], "10");
  }
  if (key == "NOTI_TURN_OFF_AP_FULL") {
    command(Config[key], "{}");
  }
  if (key == "DISPLAY_ADD_MOVIE") {
    command(Config[key], "movie_1001.usm");
  }
  if (key == "DISPLAY_PLAY_COMPOSE_EFFECT") {
    command(400, "false");
    command(Config[key], "");
  }
  if (key == "DISPLAY_SHOW_COMPOSE_RESULT") {
    command(400, "false");
    command(Config[key], "");
  }
  if (key == "DISPLAY_HIDE_COMPOSE") {
    command(400, "false");
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_COMPOSE_MAGIA") {
    command(400, "false");
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_AWAKE_ABILITY") {
    var json = {
      "type" : "CHARGE",
      "value" : 66,
      "x" : 400,
      "y" : 200,
      "scale" : 1.2,
    };
    command(400, "false");
    command(Config[key], JSON.stringify(json));
  }
  if (key == "DISPLAY_PLAY_NORMAL_GACHA_TOP") {
    command(400, "false");
    command(Config[key], "{\"x\":512, \"y\":288, \"memoriaIdList\":[200302,290006,490102]}");
  }
  if (key == "DISPLAY_STOP_NORMAL_GACHA_TOP") {
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_MEMORIA_TOP") {
    command(400, "false");
    command(Config[key], "[200302,290006,490102]");
  }
  if (key == "DISPLAY_STOP_MEMORIA_TOP") {
    command(Config[key], "");
  }
  if (key == "SCENE_PUSH_TOP") {
    command(Config[key], "");
  }
  if (key == "SCENE_PUSH_ANOTHER_QUEST") {
    var json = [2001,2002,2004,2005,2006];
    command(Config[key], JSON.stringify(json));
  }
  if (key == "SCENE_POP_ANOTHER_QUEST") {
    command(Config[key], "");
  }
  if (key == "SCENE_PLAY_ANOTHER_QUEST") {
    var json = {
      "foucusId" : 2004,
      "isRightRotation" : false
    }
    command(Config[key], JSON.stringify(json));
  }
  if (key == "SCENE_PUSH_EVENT_TEST") {
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_FORMATION") {
    var json = [
      {
        "miniCharId" : 100100,
        "positionId" : 0,
        "isLeader" : true,
        "isSupport" : false
      },
      {
        "miniCharId" : 100200,
        "positionId" : 1,
        "isLeader" : false,
        "isSupport" : false
      },
      {
        "miniCharId" : 100300,
        "positionId" : 2,
        "isLeader" : false,
        "isSupport" : true
      },
      {
        "miniCharId" : 100400,
        "positionId" : 3,
        "isLeader" : true,
        "isSupport" : true,
        "isUnknown" : true
      },
      {
        "miniCharId" : 100500,
        "positionId" : 4,
        "isLeader" : false,
        "isSupport" : true
      }];
    command(400, "false");
    command(Config[key], JSON.stringify(json));
    command(400, "true");
  }
  if (key == "DISPLAY_STOP_FORMATION") {
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_WEEKLY_QUEST_TOP") {
    var json = [
        "resource/image_native/gift/item_gift_a_111.png",
        "resource/image_native/gift/item_gift_a_121.png",
        "resource/image_native/gift/item_gift_a_131.png",
        "resource/image_native/gift/item_gift_a_211.png",
      ];
    command(Config[key], JSON.stringify(json));
  }
  if (key == "DISPLAY_STOP_WEEKLY_QUEST_TOP") {
    command(Config[key], "");
  }
  if (key == "DISPLAY_PLAY_FORMATION_ENEMY") {
    var json = {"enemyList" : [
      {
        "miniCharId" : 710500,
        "pos" : 1,
        "bossType": 0,
        "align": "WATER",
        "hp": 10000
      },
      {
        "miniCharId" : 710500,
        "pos" : 2,
        "bossType": 0,
        "align": "FIRE",
        "hp": 10000
      },
     {
        "miniCharId" : 710500,
        "pos" : 3,
        "bossType": 0,
        "align": "TIMBER",
        "hp": 10000
      },
      {
        "miniCharId" : 710500,
        "pos" : 4,
        "bossType": 0,
        "align": "DARK",
        "hp": 10000
      },
     {
        "miniCharId" : 600100,
        "pos" : 5,
        "bossType": 3,
        "align": "VOID",
        "hp": 10000
      },
      {
        "miniCharId" : 710500,
        "pos" : 6,
        "bossType": 0,
        "align": "FIRE",
        "hp": 10000
      },
     {
        "miniCharId" : 710500,
        "pos" : 7,
        "bossType": 0,
        "align": "WATER",
        "hp": 10000
      },
      {
        "miniCharId" : 710500,
        "pos" : 8,
        "bossType": 0,
        "align": "LIGHT",
        "hp": 10000
      },
      {
        "miniCharId" : 710500,
        "pos" : 9,
        "bossType": 0,
        "align": "DARK",
        "hp": 10000
      }]};
    command(400, "false");
    command(Config[key], JSON.stringify(json));
    command(400, "true");
  }
  if (key == "DISPLAY_STOP_FORMATION_ENEMY") {
    command(Config[key], "");
  }
  if (key == "SCENE_PUSH_MOVIE") {
    command(Config[key], "resource/movie/other/op_movie.usm");
  }
  if (key == "SCENE_PUSH_MOVIE_CHAR") {
    command(Config[key], "movie_1001.usm");
  }
}, false);

command(Config["DISPLAY_SET_WEBVIEW_VISIBLE"], "true");
