"use strict";
cc._RF.push(module, 'fc47862RthJiIOROaptytd2', 'Audio');
// scripts/Audio.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    music: cc.AudioClip //sử dụng methods này để chèn vào path của file âm thanh (ở màn hình cocos creator chính là hành động kéo thả)

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (e) {
      //when press SPACE, audio will be played
      // console.log(cc.macro.KEY);
      // if(e.keyCode === cc.macro.KEY.space) {
      //     const audio = this.node.getComponent(cc.AudioSource)
      //     //'AudioSource' is component that has added in cocos creator sceen
      //     if(audio != undefined) {
      //         audio.play()
      //     }
      // }
      //not use AudioSource, use audio parameter via audioEngine
      if (e.keyCode === cc.macro.KEY.space) {
        cc.audioEngine.play(_this.music, false);
      }
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();