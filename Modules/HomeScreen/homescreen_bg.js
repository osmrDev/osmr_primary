
var s;

var homeScreen_bg_RaindropFallTime = 0.5;
var homeScreen_bg_AirshipSpeed = 0.2;
var homeScreen_bg_CloudSpeed = 0.1;
function dispHomeScreen_bg(){

    var bgLayer = new PIXI.Container();


    //Backgrounds
    var sky1 = makeSubTexSprite(ASSETS.sora02)
    placer(sky1, 8, 0, 0, 1)
    sky1.scale.x *= 2
    bgLayer.addChild(sky1)

    var bgclouds = makeSubTexSprite(ASSETS.sora03)
    placer(bgclouds, 2, 0, -64, 1)
    bgLayer.addChild(bgclouds)

    var bgclouds2 = makeSubTexSprite(ASSETS.sora)
    placer(bgclouds2, 8, 0, -250, 1)
    bgLayer.addChild(bgclouds2)

    var city = makeSubTexSprite(ASSETS.bill01)
    placer(city, 7, 0, 64, 1)
    bgLayer.addChild(city)

    //--------------------------------------------------------------------------
    //clouds and airship
    var cloud1 = makeSubTexSprite(ASSETS.kumo_07)
    placer(cloud1, 1, 0, 0, 1)
    bgLayer.addChild(cloud1)

    var cloud2 = makeSubTexSprite(ASSETS.kumo_05)
    placer(cloud2, 1, 100, 32, 1)
    bgLayer.addChild(cloud2)

    var cloud3 = makeSubTexSprite(ASSETS.kumo_04)
    placer(cloud3, 1, 200, 64, 1)
    bgLayer.addChild(cloud3)

    var cloud4 = makeSubTexSprite(ASSETS.kumo_08)
    placer(cloud4, 1, 300, 96, 1)
    bgLayer.addChild(cloud4)


    var airship = makeSubTexSprite(ASSETS.myp_sky_fune)
    placer(airship, 3, 180, 64, 1)
    bgLayer.addChild(airship)

    //--------------------------------------------------------------------------
    //raindrops

    var raindrop1 = makeSubTexSprite(ASSETS.shizuku_400_01);
    placer(raindrop1, 2, 0, -400, 1)
    bgLayer.addChild(raindrop1)

    var raindrop2 = makeSubTexSprite(ASSETS.shizuku_400_02);
    placer(raindrop2,2, 0, -400, 1)
    bgLayer.addChild(raindrop2)

    //same as 1 and 2 but offset to start later
    var raindrop3 = makeSubTexSprite(ASSETS.shizuku_400_01);
    placer(raindrop3, 2, 0, -800, 1)
    bgLayer.addChild(raindrop3)

    var raindrop4 = makeSubTexSprite(ASSETS.shizuku_400_02);
    placer(raindrop4, 2, 0, -800, 1)
    bgLayer.addChild(raindrop4)

    //--------------------------------------------------------------------------

    GV_ticker.add((time) =>
    {
        raindrop1.y += homeScreen_bg_RaindropFallTime * PixelSize * GV_ticker.deltaTime;
        if(raindrop1.y > ViewRes_Y_End ) raindrop1.y = ViewRes_Y_Start - raindrop1.height;

        raindrop2.y += homeScreen_bg_RaindropFallTime/2 * PixelSize * GV_ticker.deltaTime;
        if(raindrop2.y > ViewRes_Y_End ) raindrop2.y = ViewRes_Y_Start - raindrop2.height;

        //cpy paste of 1 and 2
        raindrop3.y += homeScreen_bg_RaindropFallTime * PixelSize * GV_ticker.deltaTime;
        if(raindrop3.y > ViewRes_Y_End ) raindrop3.y = ViewRes_Y_Start - raindrop3.height;

        raindrop4.y += homeScreen_bg_RaindropFallTime/2 * PixelSize * GV_ticker.deltaTime;
        if(raindrop4.y > ViewRes_Y_End ) raindrop4.y = ViewRes_Y_Start - raindrop4.height;



        airship.x -= homeScreen_bg_AirshipSpeed * PixelSize * GV_ticker.deltaTime;
        if(airship.x < ViewRes_X_Start ) airship.x = ViewRes_X_End + airship.width;

        cloud1.x += homeScreen_bg_CloudSpeed * PixelSize * GV_ticker.deltaTime * .75;
        if(cloud1.x > ViewRes_X_End ) cloud1.x = ViewRes_X_Start - cloud1.width;

        cloud2.x += homeScreen_bg_CloudSpeed * PixelSize * GV_ticker.deltaTime * 1;
        if(cloud2.x > ViewRes_X_End ) cloud2.x = ViewRes_X_Start - cloud2.width;

        cloud3.x += homeScreen_bg_CloudSpeed * PixelSize * GV_ticker.deltaTime * 1.25;
        if(cloud3.x > ViewRes_X_End ) cloud3.x = ViewRes_X_Start - cloud3.width;

        cloud4.x += homeScreen_bg_CloudSpeed * PixelSize * GV_ticker.deltaTime * 1.5;
        if(cloud4.x > ViewRes_X_End ) cloud4.x = ViewRes_X_Start - cloud4.width;



    });



    return bgLayer;

}
