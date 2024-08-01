
var db
function storiesScreen_listStory(classification){

  var layer = GV_app.stage.getChildByName("slayer");
  clearLayer(layer);

  var stories = Object.entries(STORY);

  var offset = 100;
  for(var i = 0; i < stories.length; i++) {
    if(stories[i][1].type == classification) {


      let obj = ezPlaceUI(layer, ASSETS.bg_quest_battle, 3, 0, offset, 1)
      obj.scene = stories[i][1]

      let txt = makeNTextNoScale(stories[i][1].name, 25)
      txt.anchor.set(0.72,0.5)
      txt.x = -ASSETS.bg_quest_battle[1]/2;
      txt.y = ASSETS.bg_quest_battle[2]/2;
      //txt.scale.set(obj.scale.x, obj.scale.y)
      console.log(txt.x)
      obj.addChild(txt);

      obj.eventMode = "static";
      obj.on('pointerdown', function(){
        console.log(obj.scene)
        vnScreen(obj.scene)
      });

      offset+=StoriesScreen_storiesListSpacing;
    }
  }



}
