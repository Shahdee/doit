let Anchor = Object.freeze({left:"left", right:"right", center:"center", top:"top", bottom: "bottom"});
let Align = Object.freeze({center:"center"});
let Shape = Object.freeze({circle:"circle", rounded:"rounded", rect:"rect"});

const FT_FAMILY_ARIAL = 'Arial';
const FT_WEIGHT_BLD = 700;
const FT_WEIGHT_REG = 400;
const FT_SIZE_STD_BTN = 34;
const FT_SIZE_STD_HDR = 48;


// a base abstract object for ui elements, can be animated
/**
 * An UI icon button object
 * @class
 * @param [options.name]
 * @param [options.pivotX]
 * @param [options.pivotY]
 */
class UIObject{
    constructor(name, pivotX, pivotY){
        this.name = name;
        this.container = new Container();
        this.container.name = name;

        this.pivotX = pivotX;
        this.pivotY = pivotY;

        this.animate = false;
    }

    // might be protected 
    setParent(parent){
        if (parent instanceof Container)
            this._addSelfToContainer(parent);
        else{
            let container;
            if (parent && parent.container)
                container = parent.container;
            // else
            //     container = app.stage; // TODO class and event

            this._addSelfToContainer(container);
        }
    }

    _setPivot(){
        this.container.pivot.x = (this.pivotX === Anchor.Left ? 0 : 0.5) * this.container.width;
        this.container.pivot.y = (this.pivotY === Anchor.Left ? 0 : 0.5) * this.container.height;
    }

// animation section. Any UI element can be prog animated
    _resetAnimation(){
    }

    startAnimation(){
        this.animate = true;
        this._resetAnimation();
    }

    stopAnimation(){
        this.animate = false;
        this._resetAnimation();
    }

    _tryAnimate(){
        if (! this.animate) return;

        // this._test();
        this._animate();
    }

    // _test(){
    //     console.log('a');
    // }

    _animate(){
    }
// eof animation

    setPosition(x,y){
        this.container.position.set(x,y);
    }

    show(show){
        this.container.visible = show;
    }

    isShown() {
        return this.container.visible;
    }

    update(delta){
        this._tryAnimate();
    }

    _addSelfToContainer(container){
        container.addChild(this.container);
    }
}

