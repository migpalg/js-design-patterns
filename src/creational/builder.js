var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this._instance = new Car();
    }
    CarBuilder.prototype.reset = function () {
        this._instance = new Car();
    };
    CarBuilder.prototype.setBrand = function (brand) {
        this._instance.brand = brand;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this._instance.color = color;
        return this;
    };
    CarBuilder.prototype.setPrice = function (price) {
        this._instance.price = price;
        return this;
    };
    CarBuilder.prototype.getCar = function () {
        var lastInstace = this._instance;
        this.reset();
        return lastInstace;
    };
    return CarBuilder;
}());
function main() {
    var builder = new CarBuilder();
    var redAudi = builder
        .setBrand("Audi")
        .setColor("Red")
        .setPrice(500000.0)
        .getCar();
    var blueFerrari = builder
        .setBrand("Ferrari")
        .setColor("Blue")
        .setPrice(1000000.0)
        .getCar();
    console.log(redAudi);
    console.log(blueFerrari);
}
main();
