
let WinType = Object.freeze({WinLoader:1, WinMainMenu:2, WinDailySetup:3, WinStates:4});

class GUIMan{

    constructor(gameMan){
        this.gameMan = gameMan;
        this.windows = [];
        this.currState = 0;
        this.nextState = 0;
        this.currWinType = 0;
    }

    init(){
        // setup windows 

        setupLoader();
        setupMainMenu();
        setupDailySetup();
        setupStats();
        
        setupMenu();
    }

    gameStateChange(newState){
        if (this.currState !== newState){
            this.nextState = newState;
        }
    }

    openWindow(){
        if (this.currState !== this.nextState){
            this.currState = this.nextState;
            let nextWinType;
            switch(this.currState){
                case GameStates.Loader:
                nextWinType = WinType.WinLoader;
                break;

                case GameStates.MainMenu:
                nextWinType = WinType.WinMainMenu;
                break;

                case GameStates.DailySetup:
                nextWinType = WinType.DailySetup;
                break;

                case GameStates.Stats:
                nextWinType = WinType.Stats;
                break;
            }
            this.showWindow(nextWinType);
        }
    }

    showWindow(nextWinType){
        if (this.currWinType !== nextWinType){

            if (this.currWinType){
                if (windows[this.currWinType-1])
                    windows[this.currWinType-1].show(false);
            }

            this.currWinType = nextWinType;
            if (windows[this.currWinType-1])
                windows[this.currWinType-1].show(true);
        }
    }

    update(delta){

        this.openWindow();
    }
}