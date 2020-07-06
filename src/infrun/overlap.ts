export const map = (f, iter) => {
  let res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};
export const filter = (f, iter) => {
  let result = [];
  for (const i of iter) {
    if (f(i)) result.push(i);
  }
  return result;
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
export const go = (...args) => reduce((a, f) => f(a), args);

export const pipe = (f, ...functions) => {
  return function (...a) {
    return go(f(...a), ...functions);
  };
};
