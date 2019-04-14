
// TODO
// window should be able to invoke update of its content (interfaces)
// we might want to have just single bg object for any given window, which will be placed beneath all objetcs in scene 

/**
 * header object
 * @class
 * @param [options.name]
 * @param [options.pivotX]
 * @param [options.pivotY]
 * 
 * @param [options.back]
 * @param [options.backColor]
 * @param [options.backAlpha]
 */
class Window extends UIObject{
    constructor(options, parent){
        super(options.name, options.pivotX, options.pivotY);

        this._createBackground(options);
        this.setParent(parent);
    }

    _createBackground(options){
        if (options.back){
            this.graphics = new Graphics();
            this.graphics.name = "bg";
            // this.graphics.interactive = true;
            // this.graphics.buttonMode = true;
            this.graphics.alpha = 0.6;
            this.graphics.beginFill(options.backColor, 1);
            this.graphics.drawRect(0,0,options.width, options.height);
            this.graphics.endFill();
            this.container.addChild(this.graphics);
        }
    }
}