"use strict";
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