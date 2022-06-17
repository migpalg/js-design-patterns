const FoodLogger = require("./foodLogger");

foodLogger = new FoodLogger().getFoodLoggerSingleton();

class Restaurant {
  quantity
  #food
  constructor(inventory) {
    this.quantity = inventory.count;
    this.foodsss = inventory.foodItem;
    foodLogger.log(inventory);
  }
}

module.export = Restaurant;