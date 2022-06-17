describe("bridge", function () {
  it("render vector square", function () {
    let sq = new Square(new VectorRenderer());
    expect(sq.toString()).toEqual("Drawing square as lines");
  });

  it("render raster triangle", function () {
    let sq = new Triangle(new RasterRenderer());
    expect(sq.toString()).toEqual("Drawing triangle as pixels");
  });
});
