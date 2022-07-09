
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Combie/scripts/CombieMove');
require('./assets/Combie/scripts/CombieMoveBackground');
require('./assets/scripts/Animation');
require('./assets/scripts/Audio');
require('./assets/scripts/Click');
require('./assets/scripts/Move');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9483av2gMxBvI7ijATmjeNB', 'Move');
// scripts/Move.js

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
    typeTranslate: 'rightToLeft',
    speed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
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
    if (this.typeTranslate === 'rightToLeft') {
      var translateX = this.node.position.x - this.speed * dt;
      var scaleX = this.node.scaleX;
      var maxTranslateX = -(this.node.parent.width / 2) + this.node.width * scaleX / 2;
      this.node.setPosition(translateX, this.node.position.y);

      if (translateX < maxTranslateX) {
        //when node translate to the end of left side
        // console.log('aaaaaaaa');
        this.node.setPosition(maxTranslateX, this.node.position.y);
        this.typeTranslate = 'leftToRight';
      }
    } else {
      var _translateX = this.node.position.x + this.speed * dt;

      var _scaleX = this.node.scaleX;

      var _maxTranslateX = this.node.parent.width / 2 - this.node.width * _scaleX / 2;

      this.node.setPosition(_translateX, this.node.position.y);

      if (_translateX > _maxTranslateX) {
        //when node translate to the end of right side
        // console.log('bbbbbbbb');
        this.node.setPosition(_maxTranslateX, this.node.position.y);
        this.typeTranslate = 'rightToLeft';
      }
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTW92ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR5cGVUcmFuc2xhdGUiLCJzcGVlZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0cmFuc2xhdGVYIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInNjYWxlWCIsIm1heFRyYW5zbGF0ZVgiLCJwYXJlbnQiLCJ3aWR0aCIsInNldFBvc2l0aW9uIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRSxhQURQO0FBRVJDLElBQUFBLEtBQUssRUFBRTtBQUZDLEdBRlA7QUFPTDtBQUVBO0FBRUFDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJO0FBZUxDLEVBQUFBLE1BZkssa0JBZUdDLEVBZkgsRUFlTztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFFBQUcsS0FBS0osYUFBTCxLQUF1QixhQUExQixFQUF5QztBQUNyQyxVQUFNSyxVQUFVLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxDQUFuQixHQUF1QixLQUFLUCxLQUFMLEdBQWFHLEVBQXZEO0FBQ0EsVUFBTUssTUFBTSxHQUFHLEtBQUtILElBQUwsQ0FBVUcsTUFBekI7QUFDQSxVQUFNQyxhQUFhLEdBQUcsRUFBRSxLQUFLSixJQUFMLENBQVVLLE1BQVYsQ0FBaUJDLEtBQWpCLEdBQXlCLENBQTNCLElBQWlDLEtBQUtOLElBQUwsQ0FBVU0sS0FBVixHQUFrQkgsTUFBbEIsR0FBMkIsQ0FBbEY7QUFDQSxXQUFLSCxJQUFMLENBQVVPLFdBQVYsQ0FBc0JSLFVBQXRCLEVBQWtDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQk8sQ0FBckQ7O0FBQ0EsVUFBR1QsVUFBVSxHQUFHSyxhQUFoQixFQUErQjtBQUMzQjtBQUNBO0FBQ0EsYUFBS0osSUFBTCxDQUFVTyxXQUFWLENBQXNCSCxhQUF0QixFQUFxQyxLQUFLSixJQUFMLENBQVVDLFFBQVYsQ0FBbUJPLENBQXhEO0FBQ0EsYUFBS2QsYUFBTCxHQUFxQixhQUFyQjtBQUNIO0FBQ0osS0FYRCxNQVlLO0FBQ0QsVUFBTUssV0FBVSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsQ0FBbkIsR0FBdUIsS0FBS1AsS0FBTCxHQUFhRyxFQUF2RDs7QUFDQSxVQUFNSyxPQUFNLEdBQUcsS0FBS0gsSUFBTCxDQUFVRyxNQUF6Qjs7QUFDQSxVQUFNQyxjQUFhLEdBQUksS0FBS0osSUFBTCxDQUFVSyxNQUFWLENBQWlCQyxLQUFqQixHQUF5QixDQUExQixHQUFnQyxLQUFLTixJQUFMLENBQVVNLEtBQVYsR0FBa0JILE9BQWxCLEdBQTJCLENBQWpGOztBQUNBLFdBQUtILElBQUwsQ0FBVU8sV0FBVixDQUFzQlIsV0FBdEIsRUFBa0MsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTyxDQUFyRDs7QUFDQSxVQUFHVCxXQUFVLEdBQUdLLGNBQWhCLEVBQStCO0FBQzNCO0FBQ0E7QUFDQSxhQUFLSixJQUFMLENBQVVPLFdBQVYsQ0FBc0JILGNBQXRCLEVBQXFDLEtBQUtKLElBQUwsQ0FBVUMsUUFBVixDQUFtQk8sQ0FBeEQ7QUFDQSxhQUFLZCxhQUFMLEdBQXFCLGFBQXJCO0FBQ0g7QUFDSjtBQUNKO0FBeERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHR5cGVUcmFuc2xhdGU6ICdyaWdodFRvTGVmdCcsXHJcbiAgICAgICAgc3BlZWQ6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy91cGRhdGUgdGhhdCByZXBlYXQgZXZlcnkgZnJhbWVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnR5cGVUcmFuc2xhdGUpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdkdCcsIGR0KTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygndGhpcy5ub2RlLnBvc2l0aW9uLngnLCB0aGlzLm5vZGUucG9zaXRpb24ueCk7XHJcbiAgICAgICAgLy8gY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMTAwICogZHRcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygndHJhbnNsYXRlWDogJywgdHJhbnNsYXRlWCk7XHJcbiAgICAgICAgLy8gY29uc3Qgc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWFxyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdzY2FsZVg6ICcsIHNjYWxlWCk7XHJcbiAgICAgICAgLy8gY29uc3QgbWF4VHJhbnNsYXRlWCA9IC0odGhpcy5ub2RlLnBhcmVudC53aWR0aCAvIDIpICsgKHRoaXMubm9kZS53aWR0aCAqIHNjYWxlWCAvIDIpXHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ21heFRyYW5zbGF0ZVg6ICcsIG1heFRyYW5zbGF0ZVgpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0cmFuc2xhdGVYLCAwKVxyXG4gICAgICAgIC8vIGlmKHRyYW5zbGF0ZVggPCBtYXhUcmFuc2xhdGVYKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdhYWFhYWFhYScpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obWF4VHJhbnNsYXRlWCwgMClcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudHlwZVRyYW5zbGF0ZSA9PT0gJ3JpZ2h0VG9MZWZ0Jykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5ub2RlLnBvc2l0aW9uLnggLSB0aGlzLnNwZWVkICogZHRcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWFxyXG4gICAgICAgICAgICBjb25zdCBtYXhUcmFuc2xhdGVYID0gLSh0aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMikgKyAodGhpcy5ub2RlLndpZHRoICogc2NhbGVYIC8gMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRyYW5zbGF0ZVgsIHRoaXMubm9kZS5wb3NpdGlvbi55KVxyXG4gICAgICAgICAgICBpZih0cmFuc2xhdGVYIDwgbWF4VHJhbnNsYXRlWCkge1xyXG4gICAgICAgICAgICAgICAgLy93aGVuIG5vZGUgdHJhbnNsYXRlIHRvIHRoZSBlbmQgb2YgbGVmdCBzaWRlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWFhYWFhYWEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihtYXhUcmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZVRyYW5zbGF0ZSA9ICdsZWZ0VG9SaWdodCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5zcGVlZCAqIGR0XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVhcclxuICAgICAgICAgICAgY29uc3QgbWF4VHJhbnNsYXRlWCA9ICh0aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMikgLSAodGhpcy5ub2RlLndpZHRoICogc2NhbGVYIC8gMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRyYW5zbGF0ZVgsIHRoaXMubm9kZS5wb3NpdGlvbi55KVxyXG4gICAgICAgICAgICBpZih0cmFuc2xhdGVYID4gbWF4VHJhbnNsYXRlWCkge1xyXG4gICAgICAgICAgICAgICAgLy93aGVuIG5vZGUgdHJhbnNsYXRlIHRvIHRoZSBlbmQgb2YgcmlnaHQgc2lkZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JiYmJiYmJiJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obWF4VHJhbnNsYXRlWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVUcmFuc2xhdGUgPSAncmlnaHRUb0xlZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Animation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17b56AEzS9D4oCbhu3rlwt7', 'Animation');
// scripts/Animation.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // console.log('onLoad');
    };
    NewClass.prototype.start = function () {
        // console.log('start');
        var nodeAnimation = this.getComponent(cc.Animation);
        nodeAnimation.play('walk');
        // walk is name of animation that created at cocos creator screen
        //or use getAnimationState
        var animationState = nodeAnimation.getAnimationState('walk');
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (e) {
            if (e.keyCode === cc.macro.KEY.p) {
                console.log('Press P');
                if (animationState.isPaused) {
                    animationState.play();
                }
                else {
                    animationState.pause();
                }
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUNDO1FBcENHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFnQ3ZCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0JHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0kseUJBQXlCO0lBRTdCLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksd0JBQXdCO1FBRXhCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JELGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsaUVBQWlFO1FBRWpFLDBCQUEwQjtRQUMxQixJQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFOUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztZQUNuRCxJQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtpQkFDeEI7cUJBQ0k7b0JBQ0QsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO2lCQUN6QjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVDNUI7SUFBRCxlQUFDO0NBdkNELEFBdUNDLENBdkNxQyxFQUFFLENBQUMsU0FBUyxHQXVDakQ7a0JBdkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Mb2FkJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCcpO1xyXG5cclxuICAgICAgICBjb25zdCBub2RlQW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIG5vZGVBbmltYXRpb24ucGxheSgnd2FsaycpXHJcbiAgICAgICAgLy8gd2FsayBpcyBuYW1lIG9mIGFuaW1hdGlvbiB0aGF0IGNyZWF0ZWQgYXQgY29jb3MgY3JlYXRvciBzY3JlZW5cclxuXHJcbiAgICAgICAgLy9vciB1c2UgZ2V0QW5pbWF0aW9uU3RhdGVcclxuICAgICAgICBjb25zdCBhbmltYXRpb25TdGF0ZSA9IG5vZGVBbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ3dhbGsnKVxyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVzcyBQJyk7XHJcbiAgICAgICAgICAgICAgICBpZihhbmltYXRpb25TdGF0ZS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0YXRlLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RhdGUucGF1c2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Combie/scripts/CombieMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ebca5JmQVDaJEsgc15CyHR', 'CombieMove');
// Combie/scripts/CombieMove.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.typeTranslate = 'rightToLeft';
        _this.speed = 100;
        _this.isMoving = false;
        return _this;
    }
    NewClass.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.d:
                // console.log('press d');
                this.typeTranslate = 'leftToRight';
                this.isMoving = true;
                this.node.setRotation(0, 0, 0, 0);
                break;
            case cc.macro.KEY.a:
                // console.log('press a');
                this.typeTranslate = 'rightToLeft';
                this.isMoving = true;
                this.node.setRotation(0, -1, 0, 0);
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.d:
            case cc.macro.KEY.a:
                this.isMoving = false;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.animationState = this.getComponent(cc.Animation).getAnimationState('Combie_Walk');
    };
    NewClass.prototype.update = function (dt) {
        if (this.isMoving) {
            this.animationState.play();
            // if(this.typeTranslate === 'rightToLeft') {
            //     const translateX = this.node.position.x - this.speed * dt
            //     const scaleX = this.node.scaleX
            //     const maxTranslateX = -(this.node.parent.width / 2) + (this.node.width * scaleX / 2)
            //     this.node.setPosition(translateX, this.node.position.y)
            //     if(translateX < maxTranslateX) {
            //         //when node translate to the end of left side
            //         // console.log('aaaaaaaa');
            //         this.node.setPosition(maxTranslateX, this.node.position.y)
            //     }
            // }
            // else {
            //     const translateX = this.node.position.x + this.speed * dt
            //     const scaleX = this.node.scaleX
            //     const maxTranslateX = (this.node.parent.width / 2) - (this.node.width * scaleX / 2)
            //     this.node.setPosition(translateX, this.node.position.y)
            //     if(translateX > maxTranslateX) {
            //         //when node translate to the end of right side
            //         // console.log('bbbbbbbb');
            //         this.node.setPosition(maxTranslateX, this.node.position.y)
            //     }
            // }
        }
        else {
            this.animationState.stop();
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property
    ], NewClass.prototype, "typeTranslate", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tYmllXFxzY3JpcHRzXFxDb21iaWVNb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0VDO1FBNUVHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQTtRQUV0QixtQkFBYSxHQUFXLGFBQWEsQ0FBQTtRQUNyQyxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLGNBQVEsR0FBWSxLQUFLLENBQUE7O0lBcUU3QixDQUFDO0lBbEVHLDRCQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsUUFBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLDBCQUEwQjtnQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDakMsTUFBSztZQUVULEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZiwwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsTUFBSztTQUNaO0lBQ0wsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ0wsUUFBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1NBQzVCO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDMUYsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMxQiw2Q0FBNkM7WUFDN0MsZ0VBQWdFO1lBQ2hFLHNDQUFzQztZQUN0QywyRkFBMkY7WUFDM0YsOERBQThEO1lBQzlELHVDQUF1QztZQUN2Qyx3REFBd0Q7WUFDeEQsc0NBQXNDO1lBQ3RDLHFFQUFxRTtZQUNyRSxRQUFRO1lBQ1IsSUFBSTtZQUNKLFNBQVM7WUFDVCxnRUFBZ0U7WUFDaEUsc0NBQXNDO1lBQ3RDLDBGQUEwRjtZQUMxRiw4REFBOEQ7WUFDOUQsdUNBQXVDO1lBQ3ZDLHlEQUF5RDtZQUN6RCxzQ0FBc0M7WUFDdEMscUVBQXFFO1lBQ3JFLFFBQVE7WUFDUixJQUFJO1NBQ1A7YUFDSTtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDN0I7SUFDTCxDQUFDO0lBM0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNhO0lBRXRCO1FBREMsUUFBUTttREFDNEI7SUFScEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStFNUI7SUFBRCxlQUFDO0NBL0VELEFBK0VDLENBL0VxQyxFQUFFLENBQUMsU0FBUyxHQStFakQ7a0JBL0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbydcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdHlwZVRyYW5zbGF0ZTogc3RyaW5nID0gJ3JpZ2h0VG9MZWZ0J1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMFxyXG4gICAgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgYW5pbWF0aW9uU3RhdGU6IGFueVxyXG5cclxuICAgIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ByZXNzIGQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZVRyYW5zbGF0ZSA9ICdsZWZ0VG9SaWdodCdcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oMCwgMCwgMCwgMClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ByZXNzIGEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZVRyYW5zbGF0ZSA9ICdyaWdodFRvTGVmdCdcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oMCwgLTEsIDAsIDApXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGUpIHtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiAsIHRoaXMub25LZXlEb3duLCB0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAgLCB0aGlzLm9uS2V5VXAsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZ2V0QW5pbWF0aW9uU3RhdGUoJ0NvbWJpZV9XYWxrJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pc01vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlLnBsYXkoKVxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLnR5cGVUcmFuc2xhdGUgPT09ICdyaWdodFRvTGVmdCcpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuc3BlZWQgKiBkdFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbWF4VHJhbnNsYXRlWCA9IC0odGhpcy5ub2RlLnBhcmVudC53aWR0aCAvIDIpICsgKHRoaXMubm9kZS53aWR0aCAqIHNjYWxlWCAvIDIpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odHJhbnNsYXRlWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgIC8vICAgICBpZih0cmFuc2xhdGVYIDwgbWF4VHJhbnNsYXRlWCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vd2hlbiBub2RlIHRyYW5zbGF0ZSB0byB0aGUgZW5kIG9mIGxlZnQgc2lkZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYWFhYWFhYScpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihtYXhUcmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMuc3BlZWQgKiBkdFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbWF4VHJhbnNsYXRlWCA9ICh0aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMikgLSAodGhpcy5ub2RlLndpZHRoICogc2NhbGVYIC8gMilcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0cmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgLy8gICAgIGlmKHRyYW5zbGF0ZVggPiBtYXhUcmFuc2xhdGVYKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy93aGVuIG5vZGUgdHJhbnNsYXRlIHRvIHRoZSBlbmQgb2YgcmlnaHQgc2lkZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiYmJiYmJiYicpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihtYXhUcmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZS5zdG9wKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Click.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2xpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0w7QUFFQUMsRUFBQUEsTUFMSyxvQkFLSztBQUNOO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFMLEVBQUUsQ0FBQ00sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFDQyxDQUFELEVBQU87QUFDOUNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBckI7QUFDQUosTUFBQUEsQ0FBQyxDQUFDSyxlQUFGO0FBQ0gsS0FIRDtBQUlILEdBWEk7QUFhTEMsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkksQ0FpQkw7O0FBakJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy93aGVuIGNsaWNrIHRoaXMgbm9kZVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Combie/scripts/CombieMoveBackground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf4770S/lFGU50bn5VWEfde', 'CombieMoveBackground');
// Combie/scripts/CombieMoveBackground.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.typeTranslate = 'rightToLeft';
        _this.speed = 100;
        _this.isMoving = false;
        _this.maxFrameWidth = 640;
        return _this;
    }
    NewClass.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.d:
                // console.log('press d');
                this.typeTranslate = 'leftToRight';
                this.isMoving = true;
                break;
            case cc.macro.KEY.a:
                // console.log('press a');
                this.typeTranslate = 'rightToLeft';
                this.isMoving = true;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.d:
            case cc.macro.KEY.a:
                this.isMoving = false;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.update = function (dt) {
        //The Background that slide in behind when the character move, it have same three parts, width of one part is 640px
        //first, set position center to the Background of second part (position of the Background is -640)
        //when the Background slide by right to left, if slide to the third part (position of the Background is -1280 (640*2)), the Background will be original setting (position is -640)
        //when the Background slide by left to right, if slide to the first part (position of the Background is 0), the Background will be original setting (position is -640)
        if (this.isMoving) {
            if (this.typeTranslate === 'leftToRight') {
                var translateX = this.node.position.x - this.speed * dt;
                this.node.setPosition(translateX, this.node.position.y);
                if (translateX < -(this.maxFrameWidth * 2)) {
                    console.log('aaaaaaaa');
                    this.node.setPosition(-this.maxFrameWidth, this.node.position.y);
                }
            }
            else {
                var translateX = this.node.position.x + this.speed * dt;
                this.node.setPosition(translateX, this.node.position.y);
                if (translateX > 0) {
                    console.log('bbbbbbbb');
                    this.node.setPosition(-this.maxFrameWidth, this.node.position.y);
                }
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tYmllXFxzY3JpcHRzXFxDb21iaWVNb3ZlQmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9FQztRQWpFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQVcsYUFBYSxDQUFBO1FBQ3JDLFdBQUssR0FBVyxHQUFHLENBQUE7UUFDbkIsY0FBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixtQkFBYSxHQUFXLEdBQUcsQ0FBQTs7SUE0RC9CLENBQUM7SUF6REcsNEJBQVMsR0FBVCxVQUFVLENBQUM7UUFDUCxRQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLE1BQUs7WUFFVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLE1BQUs7U0FDWjtJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsQ0FBQztRQUNMLFFBQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUM1QjtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsd0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLG1IQUFtSDtRQUNuSCxrR0FBa0c7UUFDbEcsa0xBQWtMO1FBQ2xMLHNLQUFzSztRQUN0SyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxJQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUFFO2dCQUNyQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7Z0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFdkQsSUFBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDbkU7YUFDSjtpQkFDSTtnQkFDRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7Z0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFdkQsSUFBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDbkU7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQWhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9FNUI7SUFBRCxlQUFDO0NBcEVELEFBb0VDLENBcEVxQyxFQUFFLENBQUMsU0FBUyxHQW9FakQ7a0JBcEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgdHlwZVRyYW5zbGF0ZTogc3RyaW5nID0gJ3JpZ2h0VG9MZWZ0J1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMFxyXG4gICAgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgbWF4RnJhbWVXaWR0aDogbnVtYmVyID0gNjQwXHJcblxyXG5cclxuICAgIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ByZXNzIGQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZVRyYW5zbGF0ZSA9ICdsZWZ0VG9SaWdodCdcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcmVzcyBhJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVUcmFuc2xhdGUgPSAncmlnaHRUb0xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChlKSB7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04gLCB0aGlzLm9uS2V5RG93biwgdGhpcylcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQICwgdGhpcy5vbktleVVwLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL1RoZSBCYWNrZ3JvdW5kIHRoYXQgc2xpZGUgaW4gYmVoaW5kIHdoZW4gdGhlIGNoYXJhY3RlciBtb3ZlLCBpdCBoYXZlIHNhbWUgdGhyZWUgcGFydHMsIHdpZHRoIG9mIG9uZSBwYXJ0IGlzIDY0MHB4XHJcbiAgICAgICAgLy9maXJzdCwgc2V0IHBvc2l0aW9uIGNlbnRlciB0byB0aGUgQmFja2dyb3VuZCBvZiBzZWNvbmQgcGFydCAocG9zaXRpb24gb2YgdGhlIEJhY2tncm91bmQgaXMgLTY0MClcclxuICAgICAgICAvL3doZW4gdGhlIEJhY2tncm91bmQgc2xpZGUgYnkgcmlnaHQgdG8gbGVmdCwgaWYgc2xpZGUgdG8gdGhlIHRoaXJkIHBhcnQgKHBvc2l0aW9uIG9mIHRoZSBCYWNrZ3JvdW5kIGlzIC0xMjgwICg2NDAqMikpLCB0aGUgQmFja2dyb3VuZCB3aWxsIGJlIG9yaWdpbmFsIHNldHRpbmcgKHBvc2l0aW9uIGlzIC02NDApXHJcbiAgICAgICAgLy93aGVuIHRoZSBCYWNrZ3JvdW5kIHNsaWRlIGJ5IGxlZnQgdG8gcmlnaHQsIGlmIHNsaWRlIHRvIHRoZSBmaXJzdCBwYXJ0IChwb3NpdGlvbiBvZiB0aGUgQmFja2dyb3VuZCBpcyAwKSwgdGhlIEJhY2tncm91bmQgd2lsbCBiZSBvcmlnaW5hbCBzZXR0aW5nIChwb3NpdGlvbiBpcyAtNjQwKVxyXG4gICAgICAgIGlmKHRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYodGhpcy50eXBlVHJhbnNsYXRlID09PSAnbGVmdFRvUmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5ub2RlLnBvc2l0aW9uLnggLSB0aGlzLnNwZWVkICogZHRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0cmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodHJhbnNsYXRlWCA8IC0odGhpcy5tYXhGcmFtZVdpZHRoICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhYWFhYWEnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oLXRoaXMubWF4RnJhbWVXaWR0aCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5ub2RlLnBvc2l0aW9uLnggKyB0aGlzLnNwZWVkICogZHRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0cmFuc2xhdGVYLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmFuc2xhdGVYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYmJiYmJiYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigtdGhpcy5tYXhGcmFtZVdpZHRoLCB0aGlzLm5vZGUucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
