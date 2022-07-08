// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node) labelScene: cc.Node = null
    @property(cc.Node) btnChangeScene: cc.Node = null
    @property(cc.Node) bigStreet: cc.Node = null
    @property(cc.Node) largeSprite: cc.Node = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (e) => {
            //when click button to start game, below node will be destroyed
            this.labelScene.destroy()
            this.btnChangeScene.destroy()
            this.node.destroy()
            
            this.bigStreet.getComponent('CombieMoveBackground').isStartGame = true
            this.largeSprite.getComponent('CombieMove').isStartGame = true
        })
    }

    // update (dt) {}
}
