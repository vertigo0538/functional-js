import { iterable } from "../iterable";
import { iterable2 } from "../iterable";

describe("Test custom iterble function", () => {
  test("iterable custom1", () => {
    let iterator = iterable[Symbol.iterator]();
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().done).toBeTrue();
  });

  // test("Custom한 iterable1을 순회 시키면 실패한다", () => {
  //   const customIterator = iterable[Symbol.iterator]();
  //   for (const a of customIterator) {
  //     expect(a).toError();
  //   }
  // });
  test("자기 자신을 return 하게 만드는 [Symbol.iterator]를 추가하면 순회를 할 수 있다.", () => {
    const customIterator = iterable2[Symbol.iterator]();
    for (const a of customIterator) {
      expect(a).toBeTruthy();
    }
  });
  test("[Symbol.iterator가  구현 된 것", () => {
    // const all = document.querySelectorAll("*");
    // console.log(all[Symbol.iterator]());
    // const iter = all[Symbol.iterator]();
    // console.log(iter.next());
    // console.log(iter.next());
    // console.log(iter.next());
  });
  test("map,set symbol.iterator ", () => {
    const arr = [0, 1, 3];
    expect(arr[0]).toBe(0);
    const map = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
    // 실패
    expect(map[0]).toBeUndefined();
    const iter = map[Symbol.iterator]();
    // 성공
    expect(iter.next().value).toMatchObject(["a", 1]);
  });
});
