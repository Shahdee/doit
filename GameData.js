
const DATA_PATH = "data.json";

const JS_CATEGORIES = "categories";
const JS_CHALLENGES = "challenges";
const JS_ID = "id";
const JS_NAME = "name";
const JS_LOCAL_NAME = "localName";
const JS_LOCAL_DESCRIPTION = "localDescription";
const JS_CATEGORY_ID = "catId";

// available categories 
// available challenges 
    // available hints 

// available inspirations

class GameData {
    
    constructor(gameMan){
        this.gameMan = gameMan;
    }

    retreiveGameData(callback){
        this.gameMan.assetLoader.readTextFile(DATA_PATH, function(data){
            this.parseData(data);
            this.getInitialData();
            callback();
        });
    }
    
    parseData(data){
        if (data === null){
            // console.log("bad json data");
            return;
        }
        this.data = JSON.parse(data);
    }

    getInitialData(){
        this._showLogs = 1;

        this._setCategories();
        this._setChallenges();
        this._setInspirations();
    }

    // TODO - get localized data

    _setCategories(){
        if (! (JS_CATEGORIES in this.data)){
            console.log("no JS_CATEGORIES...");
        }
        else{
            this.categories = [];
            let cats = this.data[JS_CATEGORIES];
            let category;

            for (let i=0; i<cats.length; i++){
                category = new Category(cats[i][JS_NAME], cats[i][JS_ID]);
                this.categories.push(category);
            }
            console.log('JS_CATEGORIES ' + this.categories.length);
        }
    }

    _setChallenges(){
        if (! (JS_CHALLENGES in this.data)){
            console.log("no JS_CHALLENGES...");
        }
        else{
            this.challenges = [];
            let chals = this.data[JS_CHALLENGES];
            let challenge;

            for (let i=0; i<chals.length; i++){
                challenge = new Challenge(chals[i][JS_CATEGORY_ID], chals[i][JS_NAME], chals[i][JS_ID]);
                this.challenges.push(challenge);
            }
            console.log('JS_CHALLENGES ' + this.challenges.length);
        }
    }

    _setInspirations(){

    }

    getCategories(){
        return this.categories;
    }

    getChallenges(){
        return this.challenges;
    }

    getInspirations(){
        return null;
    }

    get showLogs(){
        return this._showLogs;
    }

    // TODO 
    // getChallenge type complexity 
}