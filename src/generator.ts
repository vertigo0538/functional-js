export function* infinite(i = 0) {
  while (true) yield i++;
}
export function* odd(limit) {
  for (const a of infinite(1)) {
    if (a % 2) yield a;
    if (a === limit) return;
  }
}
export function* even(limit) {
  for (const a of infinite(1)) {
    if (a % 2 === 0) yield a;
    if (a === limit) return;
  }
}

export function* evenOdd(f, limit) {
  for (const a of infinite(1)) {
    if (f(a)) yield a;
    if (a === limit) return;
  }
}
