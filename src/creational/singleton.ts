const assert = require("assert");

class Singleton {
  private static _instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

function main() {
  const singletonA = Singleton.getInstance();
  const singletonB = Singleton.getInstance();

  assert.equal(singletonA, singletonB);
}

main();
