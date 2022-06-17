class Car {
  public brand?: string;
  public color?: string;
  public price?: number;
}

class CarBuilder {
  private _instance: Car;

  constructor() {
    this._instance = new Car();
  }

  reset() {
    this._instance = new Car();
  }

  setBrand(brand: string) {
    this._instance.brand = brand;
    return this;
  }

  setColor(color: string) {
    this._instance.color = color;
    return this;
  }

  setPrice(price: number) {
    this._instance.price = price;
    return this;
  }

  getCar(): Car {
    const lastInstace = this._instance;
    this.reset();
    return lastInstace;
  }
}

function main() {
  const builder = new CarBuilder();

  const redAudi = builder
    .setBrand("Audi")
    .setColor("Red")
    .setPrice(500000.0)
    .getCar();

  const blueFerrari = builder
    .setBrand("Ferrari")
    .setColor("Blue")
    .setPrice(1000000.0)
    .getCar();

  console.log(redAudi);
  console.log(blueFerrari);
}

main();
