import _ from "lodash";
describe("filter", () => {
  const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "가방", price: 30000 },
    { name: "후드티", price: 25000 },
    { name: "시계", price: 50000 },
  ];
  it("original filter ", () => {
    let under20000 = [];
    for (const p of products) {
      if (p.price < 20000) under20000.push(p);
    }
    expect(under20000).toHaveLength(1);
  });
  it("custom filter ", () => {
    const filter = (f, iter) => {
      let result = [];
      for (const i of iter) {
        if (f(i)) result.push(i);
      }
      return result;
    };
    const result = filter((p) => p.price < 20000, products);
    const result2 = filter(
      (n) => n % 2,
      (function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
      })()
    ); // 즉시실행함수
    expect(result).toHaveLength(1);
    expect(result2).toHaveLength(3);
  });
  it("lodash filter", () => {
    const result = _.filter(products, (p) => p.price < 20000);
    const result2 = _.filter(
      (function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
      })(),
      (n) => n % 2
    );
    const result3 = _.filter(products, { price: 50000 });
    expect(result).toHaveLength(1);
    // expect(result2).toHaveLength(2);
    expect(result3).toHaveLength(1);
  });
  it("pure", () => {
    const result = (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })().filter((n) => n % 2);
    expect(result).toBe(4);
  });
});
