// import { map } from "./utils/fx";
import { from } from "rxjs";
import { mergeAll, toArray } from "rxjs/operators";
import { map } from "../../utils/fxjs";

describe("Promise array return", () => {
  // https://fireship.io/snippets/testing-rxjs-observables-with-jest/
  it("Rxjs-1", (done) => {
    function delayI(a: any) {
      return new Promise((resolve) => setTimeout(() => resolve(a), 100));
    }
    const list = [1, 2, 3, 4];
    const res = list.map((a) => delayI(a * a));
    const resObservable = from(res);
    const squred = resObservable.pipe(mergeAll(), toArray());
    expect.assertions(1);
    return squred.subscribe((result) => {
      expect(result).toStrictEqual([1, 4, 9, 16]);
      done();
    });
  });
  it("Rxjs-2", (done) => {
    function delayI(a: any) {
      return new Promise((resolve) => setTimeout(() => resolve(a), 100));
    }
    const list = [1, 2, 3, 4];
    const res = list.map((a) => delayI(a * a));
    const resObservable = from(res);
    const squred = resObservable.pipe(mergeAll());
    let index = 0;
    return squred.subscribe({
      next: (val) => {
        expect(val).toEqual(list[index] * list[index]);
        index++;
      },
      complete: () => done(),
    });
  });
  it("Fxjs", async () => {
    function delayI(a: any) {
      return new Promise((resolve) => setTimeout(() => resolve(a), 100));
    }
    const list = [1, 2, 3, 4];
    const res = await map((a: any) => delayI(a * a), list);
    expect.assertions(1);
    expect(res).toStrictEqual([1, 4, 9, 16]);
  });
  it("promise all", async (done) => {
    function delayI(a) {
      return new Promise((resolve) => setTimeout(() => resolve(a), 100));
    }
    const list = [1, 2, 3, 4];
    const res = await map((a: any) => delayI(a * a), list);
    expect.assertions(1);
    return Promise.all(res).then((results) => {
      expect(results).toStrictEqual([1, 4, 9, 16]);
      done();
    });
  });
});
