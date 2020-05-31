// interface myObj {
//   f: () => void;
//   iter: Array<string>;
// }
type myFunc = (f: (a: any) => void, iter: Array<any>) => Array<any>;

export const map: myFunc = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

export const filter: myFunc = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

export const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
