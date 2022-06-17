export class Square {
  constructor(side) {
    this.side = side;
  }
}

export function area(rectangle) {
  return rectangle.width * rectangle.height;
}

export class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

// let sq = new Square(11);
// area(new SquareToRectangleAdapter(sq));
