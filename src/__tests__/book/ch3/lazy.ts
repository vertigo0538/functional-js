import R from "ramda";
import _ from "lodash";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import take from "lodash/fp/take";
import range from "lodash/fp/range";
describe("Lazy", () => {
  it("Lazy ramda", () => {
    const squre = (x) => Math.pow(x, 2);
    const isEven = (x) => x % 2 === 0;
    const numbers = R.range(0, 20000000);
    const transducer = R.compose(R.filter(isEven), R.map(squre), R.take(5));
    const pipe = R.pipe(R.map(squre), R.filter(isEven), R.take(5));
    const result = R.transduce(transducer, R.flip(R.append), []);
    // console.log(pipe(numbers));
    console.log(result(numbers));
  });
  // it("Lazy lodash", () => {
  //   const squre = (x) => Math.pow(x, 2);
  //   const isEven = (x) => x % 2 === 0;
  //   const numbers = _.range(20000000);
  //   const pipe = flow(map(squre), filter(isEven), take(3));
  //   const result = pipe(numbers);
  //   // console.log(result.length);
  // });
});
