import { reduce } from "../../infrun/overlap";

describe("go", () => {
  const go = (...args) => reduce((a, f) => f(a), args);
  const result = go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  );
  console.log(result);
  const pipe = (...funtions) => {
    return function (a) {
      go(a, ...funtions);
    };
  };
  const result2 = pipe(
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  );
});
