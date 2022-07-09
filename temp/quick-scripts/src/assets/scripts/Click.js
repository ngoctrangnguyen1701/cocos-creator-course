"use strict";
cc._RF.push(module, 'b762e3pVW1In4F1gm9hI+5e', 'Click');
// scripts/Click.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //when click this node
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (e) {
      console.log(e.target.name);
      e.stopPropagation();
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();