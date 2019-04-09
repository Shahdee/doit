class BaseAction {

    constructor(){
        this.allListeners = [];
    }

    addListener(listener) {
        this.allListeners.push(listener);
    }

    removeListener(listener) {
        for (let i = 0;i < this.allListeners.length;i++){
            if (this.allListeners[i] === listener){
                this.allListeners.splice(i, 1);
                break;
            }
        }
    }

    callListeners (...theArgs) {
        for (let i = 0;i < this.allListeners.length;i++)
            this.allListeners[i](...theArgs);
    }
}
