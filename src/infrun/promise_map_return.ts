// import { map, filter, reduce } from "./utils/fx";
import { products } from "../utils/data";
// import { map } from "./utils/fxjs";
import { from } from "rxjs";
import { map, mergeAll, toArray, filter } from "rxjs/operators";
// const mapTest = map((p) => p.price, products);
// console.log(mapTest);

function delayI(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a), 100));
}

async function f2() {
  const list = [1, 2, 3, 4];
  // const res = list.map((a) => delayI(a * a));
  const res = await map(async (a) => await delayI(a * a), list);
  console.log(res);
}
// f2();

function f3() {
  const list = [1, 2, 3, 4];
  const res = list.map((a) => delayI(a * a));
  let resObservable = from(res);
  // console.log(resObservable);
  let squred = resObservable.pipe(mergeAll());
  let result = squred.subscribe((result) => console.log(result));
  return result;
  // console.log("result", result);
}
// f3();

function f4() {
  const one = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  const two = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
  const res = [one, two];
  // console.log(res);
  let resObservable = from(res);
  // console.log(resObservable);
  let squred = resObservable.pipe(mergeAll(), toArray());
  let result = squred.subscribe((result) => console.log(result));

  console.log("result", result);
}

// f4();

function f5() {
  let numbersObservable = from([1, 2, 3, 4, 5]);
  let squred = numbersObservable.pipe(
    filter((val) => val > 2),
    map((val) => val * val)
  );
  let subscription = squred.subscribe((result) => {
    console.log(result);
  });
  return subscription;
}

// f5();
