let Application = PIXI.Application,
Container = PIXI.Container,
Sprite = PIXI.Sprite,
resources = PIXI.loader.resources,
Graphics = PIXI.Graphics,
AnimatedSprite = PIXI.extras.AnimatedSprite;
BitmapText = PIXI.extras.BitmapText,
Rectangle = PIXI.Rectangle;

let screenSetup = false;
let gameMan;

window.onresize = function(){
    //console.log("onresize window.innerWidth " + window.innerWidth + " / window.innerHeight " + window.innerHeight);
    trySetupScreen();
};

window.onload = function() {
    trySetupScreen();
}

function trySetupScreen(){
    
    if (window.innerWidth === 0 || window.innerHeight === 0) return;
    if (screenSetup) return;

    screenSetup = true;
    gameMan = new GameMan();
}