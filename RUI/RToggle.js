
// TODO
// should I merge  IconTextToggle and IconToggle somehow ? 

/**
 * An UI toggle base object
 * @class
 * @param [options.name]
 * @param [options.pivotX]
 * @param [options.pivotY]
 */
class ToggleBase extends UIObject{
    constructor(options, click, parent){
        super(options.name, options.pivotX, options.pivotY);
        this._createToggle(options, click);

        this.setParent(parent);
        this._setPivot();
        this.setPosition(options.posX, options.posY); 
        this.container.interactive = false;
    }

    _createToggle(options, click){
        this.isOn = false;
    }

    isTurnedOn(){
        return this.isOn;
    }

    setOn(on, force){
        if (this.isOn === on && !force)
            return;

        this.isOn = on;

        this.iconOn.visible = on;
        this.iconOff.visible = !on;
    }

    _resetAnimation(){
    }

    _animate() {
    }
}

/**
 * An UI icon toggle button object
 * @class
 * @param [options.posX}]
 * @param [options.posY]
 * @param [options.width]
 * @param [options.height] 
 *
 * @param [options.iconOn]
 * @param [options.iconOff]
 *
 * @param [options.iconOnWidth]
 * @param [options.iconOnHeight]
 * @param [options.iconOffWidth]
 * @param [options.iconOffHeight]
 *
 * @param [options.text] 
 * @param [options.textColor] 
 * @param [options.textAnchor] 
 * @param [options.fontSize] 
 * @param [options.fontWeight] 
 *
 * @param [options.buttonShape]
 * @param [options.buttonRadius]
 * @param [options.buttonColor]
 * @param [options.buttonAlpha]
 */
class IconTextToggle extends ToggleBase{

    _createToggle(options, click){
        super._createToggle(options, click);
    
        this.button = new ButtonBase({
            posX: 0,
            posY: 0,
            width: options.width,
            height: options.height,
            shape: options.buttonShape,
            radius: options.buttonRadius,
            color: options.buttonColor,
            alpha: options.buttonAlpha,
        }, click, null, null, null, this);
    
        if (options.iconOn){
            this.iconOn = new PIXI.Sprite(options.iconOn);
            this.iconOn.name = "on";
            this.iconOn.anchor.x = 0;
            this.iconOn.anchor.y = 0.5;
            this.iconOn.position.set(0, options.height/2);
            this.iconOn.width = options.iconOnWidth;
            this.iconOn.height = options.iconOnHeight;
            this.container.addChild(this.iconOn);
        }
        else{
            // if (showLogs)
                console.log("no res for icon button " + options.iconOn);
        }
    
        if (options.iconOff){
            this.iconOff = new PIXI.Sprite(options.iconOff);
            this.iconOff.name = "off";
            this.iconOff.anchor.x = 0;
            this.iconOff.anchor.y = 0.5;
            this.iconOff.position.set(0, options.height/2);
            this.iconOff.width = options.iconOffWidth;
            this.iconOff.height = options.iconOffHeight;
            this.container.addChild(this.iconOff);
        }
        else{
            // if (showLogs)
                console.log("no res for icon button " + options.iconOff);
        }
    
        this.header = new Header({
            posX: options.iconOnWidth,
            posY: options.height/2,
            text: options.text,
            textColor: options.textColor,
            fontSize: options.fontSize,
            fontWeight: options.fontWeight,
            anchorX:  options.textAnchor,
            anchorY: Anchor.center,
        }, this);
    
        this.setOn(false, true);
    }
}


/**
 * An UI icon toggle button object
 * @class
 * @param [options.posX}]
 * @param [options.posY]
 * @param [options.width]
 * @param [options.height] 
 *
 * @param [options.iconOn]
 * @param [options.iconOff]
 *
 * @param [options.iconOnWidth]
 * @param [options.iconOnHeight]
 * @param [options.iconOffWidth]
 * @param [options.iconOffHeight]
 *
 * @param [options.buttonShape]
 * @param [options.buttonRadius]
 * @param [options.buttonColor]
 * @param [options.buttonAlpha]
 */
class IconToggle extends UIObject{

    _createToggle(options, click){
        super._createToggle(options, click);
    
        this.button = new ButtonBase({
            posX: 0,
            posY: 0,
            width: options.width,
            height: options.height,
            shape: options.buttonShape,
            radius: options.buttonRadius,
            color: options.buttonColor,
            alpha: options.buttonAlpha,
        }, this.toggleClick, this);
    
        if (options.iconOn){
            this.iconOn = new PIXI.Sprite(options.iconOn);
            this.iconOn.name = "on";
            this.iconOn.anchor.x = 0.5;
            this.iconOn.anchor.y = 0.5;
            this.iconOn.position.set(options.width/2, options.height/2);
            this.iconOn.width = options.iconOnWidth;
            this.iconOn.height = options.iconOnHeight;
    
            this.container.addChild(this.iconOn);
        }
        else{
            // if (showLogs)
                console.log("no res for icon button " + options.iconOn);
        }
    
        if (options.iconOff){
            this.iconOff = new PIXI.Sprite(options.iconOff);
            this.iconOff.name = "off";
            this.iconOff.anchor.x = 0.5;
            this.iconOff.anchor.y = 0.5;
            this.iconOff.position.set(options.width/2, options.height/2);
            this.iconOff.width = options.iconOffWidth;
            this.iconOff.height = options.iconOffHeight;
    
            this.container.addChild(this.iconOff);
        }
        else{
            // if (showLogs)
                console.log("no res for icon button " + options.iconOff);
        }
        this.setOn(false, true);
    }
}