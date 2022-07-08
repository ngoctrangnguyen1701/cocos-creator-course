// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        typeTranslate: 'rightToLeft',
        speed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        //update that repeat every frame
        // console.log(this.typeTranslate);
        // // console.log('dt', dt);
        // // console.log('this.node.position.x', this.node.position.x);
        // const translateX = this.node.position.x - 100 * dt
        // // console.log('translateX: ', translateX);
        // const scaleX = this.node.scaleX
        // // console.log('scaleX: ', scaleX);
        // const maxTranslateX = -(this.node.parent.width / 2) + (this.node.width * scaleX / 2)
        // // console.log('maxTranslateX: ', maxTranslateX);
        // this.node.setPosition(translateX, 0)
        // if(translateX < maxTranslateX) {
        //     console.log('aaaaaaaa');
        //     this.node.setPosition(maxTranslateX, 0)
        // }

        if(this.typeTranslate === 'rightToLeft') {
            const translateX = this.node.position.x - this.speed * dt
            const scaleX = this.node.scaleX
            const maxTranslateX = -(this.node.parent.width / 2) + (this.node.width * scaleX / 2)
            this.node.setPosition(translateX, this.node.position.y)
            if(translateX < maxTranslateX) {
                //when node translate to the end of left side
                // console.log('aaaaaaaa');
                this.node.setPosition(maxTranslateX, this.node.position.y)
                this.typeTranslate = 'leftToRight'
            }
        }
        else {
            const translateX = this.node.position.x + this.speed * dt
            const scaleX = this.node.scaleX
            const maxTranslateX = (this.node.parent.width / 2) - (this.node.width * scaleX / 2)
            this.node.setPosition(translateX, this.node.position.y)
            if(translateX > maxTranslateX) {
                //when node translate to the end of right side
                // console.log('bbbbbbbb');
                this.node.setPosition(maxTranslateX, this.node.position.y)
                this.typeTranslate = 'rightToLeft'
            }
        }
    },
});
