// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //when click this node
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (e) => {
            console.log(e.target.name);
            e.stopPropagation()
        })
    },

    start () {

    },

    // update (dt) {},
});
