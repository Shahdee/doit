// TODO 
// lower toggle panel 
// window concrete classes 
// RUI challenge bars 
// RUI - toggles 


const WinType = Object.freeze({WinLoader:1, WinMainMenu:2, WinDailySetup:3, WinStates:4});

class GUIMan{
    constructor(gameMan){
        this.gameMan = gameMan;
        this.scrWidth = this.gameMan.screenWidth;
        this.scrHeigh = this.gameMan.screenHeight;

        console.log(this.scrWidth + " / " + this.scrHeigh);

        this.windows = [];
        this.currState = 0;
        this.nextState = 0;
        this.currWinType = 0;
    }

    // setup windows 
    init(){
        this.setupLoader();
        this.setupMainMenu();
        this.setupDailySetup();
        this.setupStats();
        this.setupContact();
        
        this.setupControls();
    }

    setupLoader(){
        this.winLoader = new Window({
            name: "winLoader",
            pivotX: 0,
            pivotY: 0,
        }, this.gameMan.app.stage);

        this.loaderHeader = new Header({
                name: "hdrInspiration",
                posX: this.scrWidth/2,
                posY: this.scrHeigh/2,
                text: "Just do it",
                textColor: CL_STR_HX_BLACK,
                fontSize: FT_SIZE_STD_HDR,
                fontWeight: FT_WEIGHT_REG,
                anchorX: Anchor.center,
                anchorY: Anchor.top,
                wordWrap: true,
                align: Align.center,    
        }, this.winLoader)

        this.windows.push(this.winLoader);
    }

    setupMainMenu(){

    }

    setupDailySetup(){

    }

    setupStats(){

    }

    setupContact(){

    }

    setupControls(){

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