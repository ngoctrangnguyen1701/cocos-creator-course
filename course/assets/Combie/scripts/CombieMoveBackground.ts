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
    
    typeTranslate: string = 'rightToLeft'
    speed: number = 100
    isMoving: boolean = false
    isStartGame: boolean = false
    maxFrameWidth: number = 640


    onKeyDown(e) {
        switch(e.keyCode) {
            case cc.macro.KEY.d:
                // console.log('press d');
                this.typeTranslate = 'leftToRight'
                this.isMoving = true
                break

            case cc.macro.KEY.a:
                // console.log('press a');
                this.typeTranslate = 'rightToLeft'
                this.isMoving = true
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

    start () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN , this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP , this.onKeyUp, this)
    }

    update (dt) {
        //The Background that slide in behind when the character move, it have same three parts, width of one part is 640px
        //first, set position center to the Background of second part (position of the Background is -640)
        //when the Background slide by right to left, if slide to the third part (position of the Background is -1280 (640*2)), the Background will be original setting (position is -640)
        //when the Background slide by left to right, if slide to the first part (position of the Background is 0), the Background will be original setting (position is -640)
        if(this.isStartGame && this.isMoving) {
            if(this.typeTranslate === 'leftToRight') {
                const translateX = this.node.position.x - this.speed * dt
                this.node.setPosition(translateX, this.node.position.y)
                
                if(translateX < -(this.maxFrameWidth * 2)) {
                    console.log('aaaaaaaa');
                    this.node.setPosition(-this.maxFrameWidth, this.node.position.y)
                }
            }
            else {
                const translateX = this.node.position.x + this.speed * dt
                this.node.setPosition(translateX, this.node.position.y)

                if(translateX > 0) {
                    console.log('bbbbbbbb');
                    this.node.setPosition(-this.maxFrameWidth, this.node.position.y)
                }
            }
        }
    }
}
