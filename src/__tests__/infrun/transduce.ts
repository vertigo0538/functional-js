import R from "ramda";
describe("transduce", () => {
  it("test", () => {
    const numbers = [1, 2, 3, 4];
    const transducer = R.compose(
      R.tap((x) => console.log("LEFT")),
      R.map(R.add(1)),
      R.tap((x) => console.log("ADD 1 to", x)),
      R.map(R.add(2)),
      R.tap((x) => console.log("ADD 2 to", x)),
      R.tap((x) => console.log("RIGHT"))
    );
    const result = R.transduce(transducer, R.flip(R.append), []);
    // console.log(result(numbers));
    console.log(transducer(numbers));
  });
});
