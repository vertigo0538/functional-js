import _ from "lodash";
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "가방", price: 30000 },
  { name: "후드티", price: 25000 },
  { name: "시계", price: 50000 },
];
describe("reduce1 배열안에 전부 더하기", () => {
  it("명령형", () => {
    const nums = [1, 2, 3, 4, 5];
    let total = 0;
    for (const n of nums) {
      total = total + n;
    }
    expect(total).toBe(15);
  });

  it("함수형", () => {
    const reduce = (f, acc, iter) => {
      if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
      }
      for (const a of iter) {
        acc = f(acc, a);
      }
      return acc;
    };
    const add = (a, b) => {
      // console.log("a", a);
      // console.log("b", b);
      return a + b;
    };
    const totalPrice = (total_price, product) => {
      console.log(total_price);
      // console.log(product);
      return total_price + product.price;
    };
    // expect(add(add(add(add(add(0, 1), 2), 3), 4), 5)).toBe(15);

    const result = reduce(add, [1, 2, 3, 4, 5]);
    expect(result).toBe(15);

    const result2 = reduce(
      (total_price, product) => total_price + product.price,
      0,
      products
    );
    expect(result2).toBe(140000);

    const result3 = reduce(totalPrice, 0, products);
    expect(result3).toBe(140000);
  });

  it("함수형 acc가 없을때", () => {
    const arr = [1, 2, 3, 4, 5];
    const entries = arr[Symbol.iterator]();
    const result = entries.next().value;
    expect(result).toBe(1);
  });
  it("lodash", () => {
    const add = (a, b) => a + b;
    const totalPrice = (total_price, product) => {
      // console.log(total_price);
      // console.log(product);
      return total_price + product.price;
    };
    const result = _.reduce([1, 2, 3, 4, 5], add);
    expect(result).toBe(15);
    const result2 = _.reduce(products, totalPrice, 0);
    expect(result2).toBe(140000);
  });

  it("pure", () => {
    const arr = [1, 2, 3, 4, 5];
    const add = (a, b) => a + b;
    const result = arr.reduce(add);
    expect(result).toBe(15);
  });
});
