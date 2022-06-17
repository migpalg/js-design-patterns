abstract class Shape {
  x: number = 0;
  y: number = 0;
  color: string = "red";

  constructor(target?: Shape) {
    if (target) {
      this.x = target.x;
      this.y = target.y;
      this.color = target.color;
    }
  }

  abstract clone(): Shape;
}

class Circle extends Shape {
  radius: number = 0;

  constructor(target?: Circle) {
    console.log("target", target);
    super(target);

    if (target) {
      this.radius = target.radius;
    }
  }

  clone(): Circle {
    return new Circle(this);
  }
}

function main2() {
  const circleOne = new Circle();
  circleOne.radius = 10;
  circleOne.x = 0;
  circleOne.y = 3;
  circleOne.color = "blue";

  const circleTwo = circleOne.clone();
  circleTwo.radius *= 2;

  console.log(circleOne);
  console.log(circleTwo);
}

main2();
