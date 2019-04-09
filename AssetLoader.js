
class AssetLoader{

    constructor(gameMan){
        this.gameMan = gameMan;
    }

    readTextFile(file, callback){
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                // console.log("readTextFile ok");
                callback(rawFile.responseText);
            }
        };
        rawFile.send(null);
    }

}