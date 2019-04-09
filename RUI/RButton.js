/**
 * An UI button object
 *
 * @class
 * @param [options.name}]
 * @param [options.posX}]
 * @param [options.posY]
 * @param [options.width] {Number|String} width
 * @param [options.height] {Number|String} height
 * @param [options.shape] {String}
 * @param [options.radius] {Number}
 * @param [options.color] {Number}
 * @param [options.alpha] {Number}
 */
class ButtonBase extends UIObject{

    constructor(options, clickHandler, downHandler, upHandler, outHandler, parent){
        super(options.name);
        
        this.createButton(options);
        this.setupHandlers(clickHandler, downHandler, upHandler, outHandler);

        this.setParent(parent);
        this.container.position.set(options.posX, options.posY); // x,y - left top corner
    }

    createButton(options){
        this.graphics = new Graphics();
        this.graphics.name = "Graphics";
        this.graphics.interactive = true;
        this.graphics.buttonMode = true;

        switch(options.shape){
            case Shape.circle:
                this.graphics.beginFill(options.color, options.alpha); // set the alpha here instead of graphics.alpha
                this.graphics.drawCircle(options.width/2,options.height/2, options.width/2); // x,y - left top corner
                this.graphics.endFill();
            break;
    
            default:
                this.graphics.beginFill(options.color, options.alpha);
                this.graphics.drawRoundedRect(0,0,options.width,options.height, options.radius); // x,y - left top corner
                this.graphics.endFill();
            break;
        }
    
        this.graphics.hitArea = new Rectangle(0,0, options.width, options.height);
        this.container.addChild(this.graphics);
    }

    setupHandlers(clickHandler, downHandler, upHandler, outHandler){
        if (clickHandler)
            this.graphics.on('pointertap', (e)=>{
                playClick();
                clickHandler(e);
            });

        if (downHandler)
            this.graphics.on('pointerdown', (e)=>{
                playClick();
                downHandler(e);
            });

        if (upHandler)
            this.graphics.on('pointerup', upHandler);

        if (outHandler)
            this.graphics.on('pointerout', outHandler);
    }
}

/**
 * An UI icon button object
 * @class
 * @param [options.name]
 * @param [options.pivotX]
 * @param [options.pivotY]
 *
 * @param [options.posX]
 * @param [options.posY]
 * @param [options.width] 
 * @param [options.height]
 *
 * @param [options.icon] 
 * @param [options.iconWidth] 
 * @param [options.iconHeight]
 * @param [options.iconFlipHor]
 * @param [options.iconFlipVert]
 *
 * @param [options.buttonShape]
 * @param [options.buttonRadius]
 * @param [options.buttonColor]
 * @param [options.buttonAlpha]
 */
class IconButton_New extends UIObject_New{

    constructor(options, click, down, up, out, parent){
        super(options.name, options.pivotX, options.pivotY);

        this.createButton(options, click, down, up, out);

        this.setParent(parent);

        this._setPivot();

        this.setPosition(options.posX, options.posY); // x,y - left top corner
    }

    createButton(options, click, down, up, out){
        this.button = new ButtonBase_New({
            posX: 0,
            posY: 0,
            width: options.width,
            height: options.height,
            shape: options.buttonShape,
            radius: options.buttonRadius,
            color: options.buttonColor,
            alpha: options.buttonAlpha,
        }, click, down, up, out, this);
    
        if (options.icon){
            this.icon = new Sprite(options.icon);
            this.icon.name = "icon";
            this.icon.anchor.x = 0.5;
            this.icon.anchor.y = 0.5;
            this.icon.position.set(options.width/2, options.height/2);
            this.icon.width = options.iconWidth;
            this.icon.height = options.iconHeight;

            if (options.iconFlipHor)
                this.icon.scale.x = -1;

            if (options.iconFlipVert)
                this.icon.scale.y = -1;

            this.container.addChild(this.icon);
        }
        else
            console.log("no res for icon button " + options.icon);
    }

    _resetAnimation(){
        this.container.scale.x = this.container.scale.y = 1;
    }

    _animate() {
        sizeScale = 1 + Math.sin(globalTimer * 12) * 0.12;//Music1
        this.container.scale.x = this.container.scale.y = sizeScale;
    }
}

