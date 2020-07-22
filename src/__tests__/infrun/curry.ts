import {
  go,
  curry,
  curryFilter,
  curryMap,
  curryReduce,
} from "../../infrun/overlap";
import { products } from "../../utils/data";

describe("curry", () => {
  // const curry = (f) => (a, ..._) => console.log("inside curry", a, ..._);
  // const curry = (f) => {
  //   return function (a, ..._) {
  //     if (_.length) {
  //       return f(a, ..._);
  //     } else {
  //       return function (..._) {
  //         return f(a, ..._);
  //       };
  //     }
  //   };
  // };
  it("curry test", () => {
    const mult = curry((a, b) => a * b);
    expect(mult(1)(8)).toBe(8);
    const mult3 = mult(3);
    expect(mult3(10)).toBe(30);
  });
  it("curry 사용해서 다시 만들기", () => {
    const add = (a, b) => {
      return a + b;
    };
    const result = go(
      products,
      curryFilter((p) => p.price > 20000),
      curryMap((p) => p.price),
      curryReduce(add)
    );
    expect(result).toBe(115000);
  });
  it("should ", () => {
    const add1 = (a) => a + 1;
    const f1 = (a) => add1(a);
    const f2 = add1;
    expect(add1(3)).toBe(4);
    expect(f1(3)).toBe(4);
    console.log(f2(1));
  });
});
