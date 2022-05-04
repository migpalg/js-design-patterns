const FoodLogger = require("./foodLogger");

foodLogger = new FoodLogger().getFoodLoggerSingleton();

class Customer {
  constructor(order) {
    this.price = order.price;
    this.food = order.foodItem;
    foodLogger.log(order);
  }
}

module.export = Customer;
