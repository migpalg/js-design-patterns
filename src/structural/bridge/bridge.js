// class Shape
// {
//   constructor(name)
//   {
//     this.name = name;
//   }
// }
//
// class Triangle extends Shape
// {
//   constructor()
//   {
//     super('triangle');
//   }
// }
//
// class Square extends Shape
// {
//   constructor()
//   {
//     super('square');
//   }
// }
//
// class VectorSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as lines`;
//   }
// }
//
// class RasterSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as pixels`;
//   }
// }

// imagine VectorTriangle and RasterTriangle are here too

class Shape {
  constructor(renderer, name = null) {
    this.renderer = renderer;
    this.name = name;
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
  }
}

export class Triangle extends Shape {
  constructor(renderer) {
    super(renderer, 'triangle');
  }
}

export class Square extends Shape {
  constructor(renderer) {
    super(renderer, 'square');
  }
}

export class RasterRenderer {
  get whatToRenderAs() {
    return 'pixels';
  }
}

export class VectorRenderer {
  get whatToRenderAs() {
    return 'lines';
  }
}
