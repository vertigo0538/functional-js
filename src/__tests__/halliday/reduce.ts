import { IProduct, products } from "../../utils/data";
import reduce from "ramda/src/reduce";
import filter from "ramda/src/filter";
import map from "ramda/src/map";
import pipe from "ramda/src/pipe";
import * as R from "ramda";
import { isNil, result } from "lodash";

describe("reduce halliday", () => {
  it("count", () => {
    const result = products.reduce((acc, product) => acc + 1, 0);
    expect(result).toEqual(5);
  });
  it("sum age", () => {
    const result = products.reduce((acc, product) => acc + product.price, 0);
    expect(result).toEqual(150000);
  });
  it("array of names", () => {
    const result = products.reduce<string[]>(
      (acc, product) => [...acc, product.name],
      []
    );
    expect(result).toEqual([
      "반팔티",
      "긴팔티",
      "핸드폰케이스",
      "후드티",
      "바지",
    ]);
  });
  it("convert to id", () => {
    // 배열로 id를 검색하려고 할때 map이나 filter를 쓴다면 전부 순회를 해서 찾아야 하므로
    // 배열에 데이터가 많을때 속도가 느리다.
    // key,value 형태의 dictionary 형태로 변환할수있다.

    // filter로 검색
    const searchId = (id: number) => {
      return function (product: IProduct) {
        // console.log("1");
        return product.id === id;
      };
    };
    const result2 = filter(searchId(2));
    // console.log(result2(products));
    // dictionary로 검색
    const result: { [userId: string]: string } = products.reduce(
      (acc, product) => {
        return { ...acc, [product.id]: product };
      },
      {}
    );
    expect(result["1"]).toEqual({
      id: 1,
      name: "반팔티",
      price: 15000,
    });
  });

  it("max price", () => {
    const prices = products.map((product) => product.price);
    const maxPrice = (a, b) => a - b;
    // 높은 가격 순
    const result = prices.sort(maxPrice);
    // 가장 높은 가격
    const result2 = prices.reduce((a, b) => Math.max(a, b));
    const result3 = Math.max(...prices);
    console.log(result3);
  });

  it("all over price", () => {
    const prices = products.map((product) => product.price);
    // 모든 가격이 40000이 넘느냐?
    const result = prices.reduce((acc, product) => {
      if (!acc) return false;
      return product > 40000;
    }, true);
    console.log(result);

    // 하나라도 50000원이 넘느냐
    const result2 = prices.reduce((acc, product) => {
      if (acc) return true;
      return product > 40000;
    }, false);
    console.log(result2);
  });

  it("order status", () => {
    const orders = [
      { id: 1, status: "pending" },
      { id: 2, status: "pending" },
      { id: 3, status: "shipping" },
      { id: 4, status: "done" },
      { id: 5, status: undefined },
      { id: 6, status: null },
    ];
    const result = orders.reduce((acc, order) => {
      acc[order.status] = R.isNil(acc[order.status])
        ? 1
        : acc[order.status] + 1;
      return acc;
    }, {});
    console.log(result);

    const result2 = orders.reduce((acc, order) => {
      return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
    }, {});
    console.log(result2);
  });
  it("string", () => {
    var strzip = (str) => str.replace(/(\D)\1*/g, (s) => s.length + s[0]);
    console.log(strzip("aaabbcccccca"));
  });
});
