const FoodLogger = require("./foodLogger");

foodLogger = new FoodLogger().getFoodLoggerSingleton();

class Restaurant {
  constructor(inventory) {
    this.quantity = inventory.count;
    this.food = inventory.foodItem;
    foodLogger.log(inventory);
  }
}

module.export = Restaurant;
