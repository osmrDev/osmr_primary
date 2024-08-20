var cocosd2Canvas = document.getElementById('gameCanvas');
var cocosd2CanvasCtx = cocosd2Canvas.getContext('2d');

function initMinis() {
  cocosd2Canvas.style.display = "block" //unhide canvas
  cocosd2CanvasCtx.globalAlpha = 0.0 //makes background transparent

  var mini_actions=[
  	["wait"],["stance"],["stance_con"],
  	["activate"],["app"],["reaction"],
  	["attack_in","attack_out"],["attackv_in","attackv_out"],["attackh_in","attackh_out"],
  	["flatline"],["damage"],["dead"]
  ]
  current_chara = "1001"

  var charaLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        ccs.armatureDataManager.clear()
	   ccs.armatureDataManager.addArmatureFileInfo(window.mini_res);
	   let armature_mini = new ccs.Armature(window.mini_name);

	   armature_mini.scale = 1;
	   // armature_mini.width=200
	   // armature_mini.height=200
	   armature_mini.x = 100;
	   armature_mini.y = 0;
	   armature_mini.getAnimation().setAnimationScale(1)
	   if(armature_mini.getAnimation().getAnimationData()["movementNames"].includes("waitUnique")){
		   armature_mini.getAnimation().playWithNames(mini_actions_sp[0],-1,1);
	   }
	   else{
		   armature_mini.getAnimation().playWithNames(mini_actions[0],-1,1);
	   }
	   // console.log(armature_mini.getAnimation().getAnimationData()["movementNames"])
	   // armature_mini.getAnimation().playWithIndex(0,-1,1);

		this.addChild(armature_mini);
		let i=1
        return true;
    },
    onEnter: function(){
    }
});


  var charaScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        console.log(this._super)
        let charalayer = new charaLayer();
        this.addChild(charalayer,0,1);
    }
});
  window.mini_res="./resource/image_native/mini/anime/mini_"+current_chara+"00_r.ExportJson"
  	window.mini_name="mini_"+current_chara+"00_r"
  	cc.loader.load([
  				    "./resource/image_native/mini/anime/mini_"+current_chara+"00_r.ExportJson",
  				    "./resource/image_native/mini/anime/mini_"+current_chara+"00_r0.plist",
  				], function () {
                      cc.director.runScene(new charaScene());
                  }, this);

}
