
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