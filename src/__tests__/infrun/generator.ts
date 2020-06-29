import { odd, evenOdd } from "../../infrun/generator";
import _ from "lodash";
import { iterable2 } from "../../infrun/iterable";
describe("함수형 프로그래밍 제너레이터", () => {
  it("generator basic ", () => {
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
      return 100;
    }
    const result = gen();
    expect(result.next().value).toBe(1);
    // Symbol.iterator는 나 자신을 리턴한다
    expect(result[Symbol.iterator]() == result).toBeTrue();
    // for of 문을 순회 할 수 있다.
    // return 100은 for of 문에서 출력되지 않는다.
    for (const a of result) {
      console.log("generator basic", a);
      expect(a).toBeTruthy();
    }
  });
  it("odd", () => {
    function* odd(limit) {
      for (let i = 0; i < limit; i++) {
        if (i % 2) yield i;
      }
    }
    const result = odd(10);
    expect(result.next().value).toBe(1);
  });
  it("infinite odd", () => {
    function* infinite(i = 0) {
      while (true) yield i++;
    }
    function* limit(l, iter) {
      for (const a of iter) {
        yield a;
        if (a === l) return;
      }
    }
    function* odd(l) {
      for (const a of limit(l, infinite(1))) {
        if (a % 2) yield a;
      }
    }
    const result = odd(10);
    expect(result.next().value).toBe(1);
    expect(result.next().value).toBe(3);
  });
  it("40까지 순회하는 짝수 만들기", () => {
    function* infinite(i) {
      while (true) yield i++;
    }
    function* even(limit) {
      for (const a of infinite(1)) {
        if (a % 2 == 0) yield a;
        if (a === limit) return;
      }
    }
    const result = even(20);
    for (const a of result) {
      console.log(a);
    }
  });
  it("전개연산자", () => {
    console.log(...odd(10));
    console.log([...odd(10), ...odd(20)]);
    const [head, ...tail] = odd(10);
    console.log(head);
    console.log(tail);
    const [a, b, ...rest] = odd(10);
    console.log(a);
    console.log(b);
    console.log(rest);
  });
  it("조건을 받아서 커스텀 ", () => {
    const evenResult = evenOdd((a) => a % 2 == 0, 10);
    const oddResult = evenOdd((a) => a % 2, 20);
    for (const a of oddResult) {
      console.log(a);
    }
  });
  it("lodash map iterator", () => {
    function* gen() {
      yield 2;
      yield 4;
      yield 6;
    }
    const map = (f, iter) => {
      let res = [];
      for (const p of iter) {
        res.push(f(p));
      }
      return res;
    };
    const test = [...gen()];
    const result = _.map(gen(), (a) => a * a);
    console.log(result);
  });
  it("Symbol.iterator", () => {
    let m = new Map();
    m.set("a", 10);
    m.set("b", 20);
    const it = m[Symbol.iterator]();
    console.log(it.next());
  });
  it("enties", () => {
    const arr = [1, 4, 6];
    let m = new Map();
    m.set("a", 10);
    m.set("b", 20);
    const enties = m.entries();
    console.log(enties.next());
  });
});
