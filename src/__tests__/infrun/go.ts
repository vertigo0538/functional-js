import { reduce, go, filter, map } from "../../infrun/overlap";
import { products } from "../../utils/data";

describe("go", () => {
  const add = (a, b) => {
    return a + b;
  };
  const go = (...args) => reduce((a, f) => f(a), args);
  const pipe = (f, ...functions) => {
    return function (...a) {
      return go(f(...a), ...functions);
    };
  };
  // const pipe = (...functions) => (a) => go(a, ...functions);
  const result = go(
    add(0, 1),
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  );
  it("go test", () => {
    expect(result).toBe(112);
  });

  const result2 = pipe(
    (a, b) => a + b,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  );
  // expect(result2(0)).toBe(111);
  expect(result2(0, 1)).toBe(112);
});

describe("go를 사용하여 읽기 좋은 코드로 만들기", () => {
  it("should ", () => {
    const add = (a, b) => {
      return a + b;
    };
    const result = go(
      products,
      (products) => filter((p) => p.price > 20000, products),
      (products) => map((p) => p.price, products),
      (prices) => reduce(add, prices)
    );
    expect(result).toBe(115000);
  });
});
