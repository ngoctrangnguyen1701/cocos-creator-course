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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log('onLoad');
        
    }

    start () {
        // console.log('start');

        const nodeAnimation = this.getComponent(cc.Animation)
        nodeAnimation.play('walk')
        // walk is name of animation that created at cocos creator screen

        //or use getAnimationState
        const animationState = nodeAnimation.getAnimationState('walk')

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (e) => {
            if(e.keyCode === cc.macro.KEY.p) {
                console.log('Press P');
                if(animationState.isPaused) {
                    animationState.play()
                }
                else {
                    animationState.pause()
                }
            }
        })
    }

    // update (dt) {}
}
