var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(target) {
        this.x = 0;
        this.y = 0;
        this.color = "red";
        if (target) {
            this.x = target.x;
            this.y = target.y;
            this.color = target.color;
        }
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(target) {
        var _this = this;
        console.log("target", target);
        _this = _super.call(this, target) || this;
        _this.radius = 0;
        if (target) {
            _this.radius = target.radius;
        }
        return _this;
    }
    Circle.prototype.clone = function () {
        return new Circle(this);
    };
    return Circle;
}(Shape));
function main2() {
    var circleOne = new Circle();
    circleOne.radius = 10;
    circleOne.x = 0;
    circleOne.y = 3;
    circleOne.color = "blue";
    var circleTwo = circleOne.clone();
    circleTwo.radius *= 2;
    console.log(circleOne);
    console.log(circleTwo);
}
main2();
