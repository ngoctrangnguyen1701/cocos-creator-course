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
    text: string = 'hello';
    direction: number = 0
    maxVelocityX: number = 400
    rigidBody: cc.RigidBody
    walkForce: number = 1000

    onKeyDown(e) {
        switch (e.keyCode) {
            case cc.macro.KEY.left:
                this.direction = -1
                break;
            case cc.macro.KEY.right:
                this.direction = 1
                break;
        }
    }

    onKeyUp(e) {
        switch (e.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.direction = 0
                break;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
        this.rigidBody = this.node.getComponent(cc.RigidBody)
        console.log(this.node.position);
        this.node.position = cc.v3(0, 0, 0)
    }

    start () {

    }

    update (dt) {
        // console.log(this.rigidBody);
        // console.log(this.rigidBody.linearVelocity);
        // console.log(this.rigidBody.linearVelocity.x);
        
        if(this.direction > 0 && this.rigidBody.linearVelocity.x < this.maxVelocityX 
            || this.direction < 0 && this.rigidBody.linearVelocity.x > -this.maxVelocityX) {
                this.rigidBody.applyForceToCenter(cc.v2(this.direction * this.walkForce, 0), true)
                // this.node.setPosition(1000, 0, 0)
            }
    }
}
