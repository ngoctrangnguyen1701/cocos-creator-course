// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property scene: string = '';
    @property(cc.Node) bgBlack: cc.Node = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (e) => {
            //when btn is be clicked, the bgBack will translate and cover sceen
            //next scene will be loaded, when loding is finish the bgBack will change position again
            cc.tween(this.bgBlack)
                .to(1, { position: cc.v2(320, 240) })
                .call(() => cc.director.loadScene(this.scene))
                .to(1, { position: cc.v2(-320, 240) })
                .start()
        })
    }

    // update (dt) {}
}
