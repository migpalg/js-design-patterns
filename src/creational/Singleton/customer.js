const FoodLogger = require("./foodLogger");

var outerFoodLogger = new FoodLogger().getFoodLoggerSingleton();

class Customer {
  constructor({ order, foodLogger }) {
    this.price = order.price;
    this.food = order.foodItem;
    foodLogger.log(order);
  }
}

module.export = Customer;
