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
    @property(cc.EditBox) EditBox: cc.EditBox = null

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.globalVariables = window.globalVariables || null
        //window là 1 object của javascript
        //gán biến vào window để có thể sử dụng ở những node khác
        // console.log(window.globalVariables);
    }

    onSaveData() {
        window.globalVariables = this.EditBox.string
        // console.log(this.EditBox);
        // console.log(this.EditBox.string);
        
    }
    onLoadData() {
        this.EditBox.string = window.globalVariables
        // console.log(window.globalVariables);
    }
    onLoadScene1() {
        cc.director.loadScene('GlobalVariables')
    }
    onLoadScene2() {
        cc.director.loadScene('GlobalVariablesScene2')
    }
}
