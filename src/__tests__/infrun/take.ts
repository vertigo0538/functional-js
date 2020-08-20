import R from "ramda";
import { take, L, test } from "../../infrun/overlap";
describe("take", () => {
  it("ramda", () => {
    const numbers = R.range(0, 10000);
    const transducer = R.compose(R.map(R.add(1)), R.take(2));
    const result = R.transduce(transducer, R.flip(R.append), []); //=> [2, 3]
    expect(result(numbers)).toEqual([2, 3]);
  });
  it("custom", () => {
    const list = L.range(10000000000000000000000000000);
    const result = take(2, list);
    expect(result).toEqual([0, 1]);
  });
});
