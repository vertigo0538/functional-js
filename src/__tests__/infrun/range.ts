import R from "ramda";
import { range, reduce, L } from "../../infrun/overlap";
describe("range", () => {
  it("ramda", () => {
    const result = R.range(0, 5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  it("custom", () => {
    const result = range(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("range add", () => {
  it("ramda", () => {
    const add = (a, b) => a + b;
    const list = R.range(0, 5);
    const result = R.reduce(add, 0, list);
    expect(result).toEqual(10);
  });
  it("custom", () => {
    const add = (a, b) => a + b;
    const list = range(5);
    const result = reduce(add, list);
    expect(result).toEqual(10);
  });
});
describe("Lazy range", () => {
  it("ramda", () => {});
  it("custom", () => {
    const add = (a, b) => a + b;
    const list = L.range(5);
    const result = reduce(add, list);
    expect(result).toEqual(10);
    console.log(list);
  });
});

describe("test range", () => {
  it("test", () => {
    const add = (a, b) => a + b;
    function test(name, time, f) {
      console.time(name);
      while (time--) f();
      console.timeEnd(name);
    }
    test("custom range", 10, () => {
      reduce(add, L.range(1000000));
    });
    test("ramda range", 10, () => {
      reduce(add, R.range(0, 1000000));
    });
  });
});
