import { profile } from "./data";
describe("Map Test", () => {
  let m = new Map();
  m.set("1", "hi");
  m.set("2", "hi2");
  m.set("3", "hi3");
  console.log(m);
  it = m[Symbol.iterator]();
  console.log(m.get("2"));
  console.log(it.next());
});

describe("Filter Test", () => {});
