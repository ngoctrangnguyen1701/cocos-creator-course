
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Audio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtdXNpYyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUVKLEVBQUUsQ0FBQ0ssU0FERixDQUNhOztBQURiLEdBRlA7QUFLTDtBQUVBQyxFQUFBQSxNQVBLLG9CQU9LO0FBQUE7O0FBQ05OLElBQUFBLEVBQUUsQ0FBQ08sV0FBSCxDQUFlQyxFQUFmLENBQWtCUixFQUFFLENBQUNTLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsVUFBQUMsQ0FBQyxFQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsVUFBR0EsQ0FBQyxDQUFDQyxPQUFGLEtBQWNiLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQTlCLEVBQXFDO0FBQ2pDaEIsUUFBQUEsRUFBRSxDQUFDaUIsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUksQ0FBQ2QsS0FBekIsRUFBZ0MsS0FBaEM7QUFDSDtBQUNKLEtBZkQ7QUFnQkgsR0F4Qkk7QUEwQkxlLEVBQUFBLEtBMUJLLG1CQTBCSSxDQUVSLENBNUJJLENBOEJMOztBQTlCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtdXNpYzogY2MuQXVkaW9DbGlwLCAvL3Phu60gZOG7pW5nIG1ldGhvZHMgbsOgeSDEkeG7gyBjaMOobiB2w6BvIHBhdGggY+G7p2EgZmlsZSDDom0gdGhhbmggKOG7nyBtw6BuIGjDrG5oIGNvY29zIGNyZWF0b3IgY2jDrW5oIGzDoCBow6BuaCDEkeG7mW5nIGvDqW8gdGjhuqMpXHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIGUgPT4ge1xyXG4gICAgICAgICAgICAvL3doZW4gcHJlc3MgU1BBQ0UsIGF1ZGlvIHdpbGwgYmUgcGxheWVkXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLm1hY3JvLktFWSk7XHJcbiAgICAgICAgICAgIC8vIGlmKGUua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBhdWRpbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICAgICAgICAgIC8vICAgICAvLydBdWRpb1NvdXJjZScgaXMgY29tcG9uZW50IHRoYXQgaGFzIGFkZGVkIGluIGNvY29zIGNyZWF0b3Igc2NlZW5cclxuICAgICAgICAgICAgLy8gICAgIGlmKGF1ZGlvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvL25vdCB1c2UgQXVkaW9Tb3VyY2UsIHVzZSBhdWRpbyBwYXJhbWV0ZXIgdmlhIGF1ZGlvRW5naW5lXHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWMsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=