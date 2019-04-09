
let GameStates = Object.freeze({Loader:1, MainMenu:2, DailySetup:3, Stats:4});

class GameMan {

    constructor(){
        this.setupScreen();

        this.state = null;
        this.gameState = 0;

        this.assetLoader = new AssetLoader(this);
        this.gameData = new GameData(this);
        this.guiMan = new GUIMan(this);
        this.socialPlatform = new FBPlatform(this); // TODO SocialPlatform  
        this.player = new Player(this);

        this.onGameStateChange = new BaseAction();

        this.gameData.retreiveGameData(()=>{
                this.guiMan.loadAssets(()=>{
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
                transparent: true,
                resolution: 1,
            }
        );
    
        let viewport = document.getElementById("viewport");
        this.app.view.className = "app-view";
        viewport.appendChild(this.app.view);
    }

    get assetLoader(){
        return this.assetLoader;
    }

    get gameData(){
        return this.gameData;
    }

    get guiMan(){
        return this.gameData;
    }

    initGame(){
        this.guiMan.Init();
        this.onGameStateChange.addListener(this.guiMan.gameStateChange);

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