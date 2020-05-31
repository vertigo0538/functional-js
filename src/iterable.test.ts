import { iterable } from "./iterable";
import { iterable2 } from "./iterable";

describe("Test custom iterble function", () => {
  test("iterable custom1", () => {
    let iterator = iterable[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    for (const a of iterable) console.log("iterable custom1", a);
  });
  test("잘 만들어진 iterable[arr, map, set]은 iterator를 만들어도 순회가 잘 된다.", () => {
    const arr = [1, 2, 3];
    const arrIterator = arr[Symbol.iterator]();
    for (const a of arr) console.log(a);
    for (const a of arrIterator) console.log(a);
  });
  test("Custom한 iterable1을 순회 시키면 실패한다", () => {
    const customIterator = iterable[Symbol.iterator]();
    for (const a of customIterator) console.log(a);
  });
  test("자기 자신을 return 하게 만드는 [Symbol.iterator]를 추가하면 순회를 할 수 있다.", () => {
    const customIterator = iterable2[Symbol.iterator]();
    for (const a of customIterator) console.log(a);
  });
  test("[Symbol.iterator가  구현 된 것", () => {
    const all = document.querySelectorAll("*");
    console.log(all[Symbol.iterator]());
    const iter = all[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
  });
});
