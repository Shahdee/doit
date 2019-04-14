
// const TXT_FADE_IN_DISP_Y = 0.03; // % of screen
// const TXT_FADE_IN_START_ALPHA = 0;
// const TXT_FADE_IN_END_ALPHA = 1;
// const TXT_FADE_IN_ANIM_TIME = 0.7;

// const TXT_FADE_OUT_DISP_Y = 0.005; // % of screen
// const TXT_FADE_OUT_START_ALPHA = 1;
// const TXT_FADE_OUT_END_ALPHA = 0;
// const TXT_FADE_OUT_ANIM_TIME = 0.5;

// TODO Fade animation must be attached differently. Otherwise we're messing with a base class, which isn't good. 

/**
 * header object
 * @class
 * @param [options.name]
 * @param [options.posX]
 * @param [options.posY]
 * @param [options.anchorX]
 * @param [options.anchorY]
 *
 * @param [options.bitmapText] {Boolean}
 * @param [options.text] {String} header
 * @param [options.fontSize] {Number} fontSize
 * @param [options.fontWeight] {String}
 * @param [options.textColor] {String} header color
 * @param [options.textShadow]
 * @param [options.wordWrap]
 * @param [options.wordWrapWidth]
 * @param [options.align]
 */

class Header extends UIObject{
    constructor(options, parent){
        super(options.name);

        // TODO this must be somehow globally available
        // this.scrWidth = scrWidth;
        // this.scrHeight = scrHeight;

        this.createHeader(options);
        this.setParent(parent);
    }

    createHeader(options){

        if (! options.wordWrap)
            options.wordWrap = false;

        this.hdrText;

        if (options.bitmapText){
            this.hdrText = new BitmapText('0', { font: '48px Arial', align: 'center' });
        }
        else{
            console.log(';');

            this.hdrText = new PIXI.Text(options.text, {
                // fontFamily: FT_FAMILY_ARIAL,
                fontSize: options.fontSize,
                fontStyle: "normal",
                fontWeight: options.fontWeight,
                // fill: ['#ffffff', '#00ff99'], // gradient
                fill: options.textColor,
                // stroke: textColor,
                // strokeThickness: 1,
                dropShadow: options.textShadow,
                dropShadowColor: '#b9b9b9',
                // dropShadowBlur: 4,
                // dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 2,
                wordWrap: options.wordWrap,
                wordWrapWidth: options.wordWrapWidth,
                align: options.align // for multiline text
            });
        }
        this.container.addChild(this.hdrText);

        this.hdrText.name = "headerText";

        this.textCoordX = options.posX;
        this.textCoordY = options.posY;

        this.hdrText.x = this.textCoordX;
        this.hdrText.y = this.textCoordY;

        if (options.anchorX && options.anchorY){
            switch(options.anchorX) {
                case Anchor.left:
                    this.hdrText.anchor.x = 0;
                    break;

                case Anchor.center:
                    this.hdrText.anchor.x = 0.5;
                    break;

                case Anchor.right:
                    this.hdrText.anchor.x = 1;
                    break;

                default:
                    this.hdrText.anchor.x = 0;
                    break;
            }

            switch(options.anchorY) {
                case Anchor.top:
                    this.hdrText.anchor.y = 0;
                    break;

                case Anchor.center:
                    this.hdrText.anchor.y = 0.5;
                    break;

                case Anchor.bottom:
                    this.hdrText.anchor.y = 1;
                    break;

                default:
                    this.hdrText.anchor.y = 0;
                    break;
            }
        }
        else{
            this.hdrText.anchor.x = 0;
            this.hdrText.anchor.y = 0;
        }
    }

    setText(text){
        if (this.hdrText.text !== text)
            this.hdrText.text = text;
    }

    _resetAnimation(){
    }

    // showFading(){
    //     this.fadeIn = true;
    //     this.currFadeTime = 0;
    //     this.fadeInDispY = this.scrHeight * TXT_FADE_IN_DISP_Y;
    //     this._animateFadeIn(this.currFadeTime);

    //     this.show(true);
    //     this.startAnimation();
    // }

    // hideFading(){
    //     this.fadeOut = true;
    //     this.currFadeTime = 0;
    //     this.fadeOutDispY = this.scrHeight * TXT_FADE_OUT_DISP_Y;
    //     this._animateFadeOut(this.currFadeTime);

    //     this.startAnimation();
    // }

    _animate(delta) {
        this._animateFadeIn(delta);
        this._animateFadeOut(delta);
    }

    _animateFadeIn(delta){
        if (! this.fadeIn) return;

        // this._setFadeIn(this.currFadeTime/TXT_FADE_IN_ANIM_TIME);

        // this.currFadeTime += delta;

        // if (this.currFadeTime > TXT_FADE_IN_ANIM_TIME){
        //     this.fadeIn = false;
        //     this.stopAnimation();
        // }
    }

    _animateFadeOut(delta){
        if (! this.fadeOut) return;

        // this._setFadeOut(this.currFadeTime/TXT_FADE_OUT_ANIM_TIME);

        // this.currFadeTime += delta;

        // if (this.currFadeTime > TXT_FADE_OUT_ANIM_TIME){
        //     this.fadeOut = false;
        //     this.stopAnimation();
        //     this.show(false);
        // }
    }

    _setFadeIn(normTime){
        // this.hdrText.position.y = this.textCoordY + this.fadeInDispY * (1 - normTime);
        // this.hdrText.alpha = (TXT_FADE_IN_START_ALPHA + (TXT_FADE_IN_END_ALPHA - TXT_FADE_IN_START_ALPHA) * normTime);
    }

    _setFadeOut(normTime){
        // this.hdrText.position.y = this.textCoordY + this.fadeOutDispY * normTime;
        // this.hdrText.alpha = (TXT_FADE_OUT_START_ALPHA - (TXT_FADE_OUT_START_ALPHA - TXT_FADE_OUT_END_ALPHA) * normTime);
    }
}