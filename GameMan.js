
// TODO 
// social platforms 
// RUI classes 
// 

let GameStates = Object.freeze({Loader:1, MainMenu:2, DailySetup:3, Stats:4});

class GameMan {

    constructor(){
        this.setupScreen();

        this.state = null;
        this.gameState = 0;

        this._assetMan = new AssetMan(this);
        this._gameData = new GameData(this);
        this._guiMan = new GUIMan(this);
        
        this.socialPlatform = new FBPlatform(this); // TODO SocialPlatform  
        this._player = new Player(this);

        this.onGameStateChange = new BaseAction();

        this._gameData.retreiveGameData(()=>{
                this._assetMan.loadAssets(()=>{
                    this.socialPlatform.initPlatform((e)=>{

                        this.socialPlatform.startGame((e)=>{
                            
                            this.initGame();

                            this.setGameState(GameStates.Loader);

                        })
                    })
                });
        })
    }

    setupScreen(){
        this.screenWidth = 0;
        this.screenHeight = 0;

        if (window.innerHeight/1.5 >= window.innerWidth){
            // portrait
            this.screenWidth = 640;
            this.screenHeight = this.screenWidth * window.innerHeight/window.innerWidth;
        } else {
            // landscape
            this.screenHeight = 960;
            this.screenWidth = this.screenHeight * window.innerWidth/window.innerHeight;
        }
    
        this.app = new Application({
                width: this.screenWidth,
                height: this.screenHeight,
                antialias: true,
                transparent: false,
                backgroundColor: 0xffffff, 
                resolution: 1,
            }
        );

        console.log(this.screenWidth + ' / ' + this.screenHeight);
    
        let viewport = document.getElementById("viewport");
        this.app.view.className = "app-view";
        viewport.appendChild(this.app.view);
    }

    get assetMan(){
        return this._assetMan;
    }

    get gameData(){
        return this._gameData;
    }

    get guiMan(){
        return this._guiMan;
    }

    get player(){
        return this._player;
    }

    initGame(){
        this._guiMan.init();
        this.onGameStateChange.addListener(this._guiMan.gameStateChange);

        // TODO player - get SN data 

        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    setGameState(gameState){
        if (this.gameState !== gameState){
            this.gameState = gameState;

            this.onGameStateChange.callListeners(this.gameState);

            switch(this.gameState){
                case GameStates.Loader:
                    this.state = this.loader;
                break;

                case GameStates.MainMenu:
                    this.state = this.mainMenu;
                break;

                case GameStates.DailySetup:
                    this.state = this.dailySetup;
                break;

                case GameStates.Stats:
                    this.state = this.stats;
                break;
            }
        }
    }

    // physics
    // logic 
    // render

    gameLoop(delta){
        this.state(delta);
        
    }

    loader(delta){

    }

    mainMenu(delta){

    }

    dailySetup(delta){

    }

    stats(delta){

    }
}