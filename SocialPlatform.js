class SocialPlatform {

    constructor(){

    }

    initPlatform(callback){

    }

    startGame(callback){
        
    }

    // get player data from platform 

}

class FBPlatform extends SocialPlatform{

    initPlatform(callback){
        callback();
    }

    startGame(callback){
        callback();
    }

}

class OkPlatform extends SocialPlatform{

}