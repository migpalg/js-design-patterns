// This class implements singleton pattern

class FoodLogger {
  constructor() {
    this.foodLogger = [];
  }

  log(order) {
    this.foodLogger.push(order);
    addEventListener()
  }
}

class FoodLoggerSingleton {
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger();
    } else {
      console.log("The instance already exists!!");
    }
  }

  getFoodLoggerInstance() {
    return FoodLoggerSingleton.instance;
  }

  #metodoPrivado() {
    return "esPrivado";
  }

  static getStaticFoodLoggerInstance() {
    return "esEstatico";
  }
}

module.export = FoodLoggerSingleton;