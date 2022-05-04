// This class implements singleton pattern

class FoodLogger {
  constructor() {
    this.foodLogger = [];
  }

  log(order) {
    this.foodLogger.push(order);
  }
}

class FoodLoggerSingleton {
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger();
    }
  }

  getFoodLoggerInstance() {
    return FoodLoggerSingleton.instance;
  }
}

module.export = FoodLoggerSingleton;
