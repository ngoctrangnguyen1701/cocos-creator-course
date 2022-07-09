
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