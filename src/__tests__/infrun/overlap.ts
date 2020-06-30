import { map, filter, reduce } from "../../infrun/overlap";
import _ from "lodash";
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "가방", price: 30000 },
  { name: "후드티", price: 25000 },
  { name: "시계", price: 50000 },
];
describe("중첩", () => {
  it("중첩1 custom", () => {
    const add = (a, b) => a + b;

    const result = reduce(
      add,
      map(
        (p) => p.price,
        filter((p) => p.price > 20000, products)
      )
    );
    expect(result).toBe(105000);
  });
  it("중첩1 lodash", () => {
    const add = (a, b) => a + b;
    const result = _.reduce(
      _.map(
        _.filter(products, (p) => p.price > 20000),
        (p) => p.price
      ),
      add
    );
    expect(result).toBe(105000);
  });
});
