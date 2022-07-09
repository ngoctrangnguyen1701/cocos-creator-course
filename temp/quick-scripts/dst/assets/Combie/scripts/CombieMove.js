
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