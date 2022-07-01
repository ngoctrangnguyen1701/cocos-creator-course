// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello'
    @property
    typeTranslate: string = 'rightToLeft'
    speed: number = 100
    isMoving: boolean = false
    animationState: any

    onKeyDown(e) {
        switch(e.keyCode) {
            case cc.macro.KEY.d:
                // console.log('press d');
                this.typeTranslate = 'leftToRight'
                this.isMoving = true
                this.node.setRotation(0, 0, 0, 0)
                break

            case cc.macro.KEY.a:
                // console.log('press a');
                this.typeTranslate = 'rightToLeft'
                this.isMoving = true
                this.node.setRotation(0, -1, 0, 0)
                break
        }
    }

    onKeyUp(e) {
        switch(e.keyCode) {
            case cc.macro.KEY.d:
            case cc.macro.KEY.a:
                this.isMoving = false
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN , this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP , this.onKeyUp, this)
        this.animationState = this.getComponent(cc.Animation).getAnimationState('Combie_Walk')
    }

    update (dt) {
        if(this.isMoving) {
            this.animationState.play()
            // if(this.typeTranslate === 'rightToLeft') {
            //     const translateX = this.node.position.x - this.speed * dt
            //     const scaleX = this.node.scaleX
            //     const maxTranslateX = -(this.node.parent.width / 2) + (this.node.width * scaleX / 2)
            //     this.node.setPosition(translateX, this.node.position.y)
            //     if(translateX < maxTranslateX) {
            //         //when node translate to the end of left side
            //         // console.log('aaaaaaaa');
            //         this.node.setPosition(maxTranslateX, this.node.position.y)
            //     }
            // }
            // else {
            //     const translateX = this.node.position.x + this.speed * dt
            //     const scaleX = this.node.scaleX
            //     const maxTranslateX = (this.node.parent.width / 2) - (this.node.width * scaleX / 2)
            //     this.node.setPosition(translateX, this.node.position.y)
            //     if(translateX > maxTranslateX) {
            //         //when node translate to the end of right side
            //         // console.log('bbbbbbbb');
            //         this.node.setPosition(maxTranslateX, this.node.position.y)
            //     }
            // }
        }
        else {
            this.animationState.stop()
        }
    }
}
