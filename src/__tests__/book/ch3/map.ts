import { p1, p2, p3, p4 } from "../../../book/ch3/data";
import map from "lodash/fp/map";
import reverse from "lodash/fp/reverse";
import flow from "lodash/fp/flow";
import R from "ramda";
import _ from "lodash";
describe("", () => {
  const persons = [p1, p2, p3, p4];
  // console.log(persons);
  it("lodash map", () => {
    const getFullName = map((s: any) =>
      s !== null && s !== undefined ? s.fullname : ""
    );
    const getFullNameResult = getFullName(persons);
    expect(getFullNameResult).toEqual([
      "Haskell Curry",
      "Barkley Rosser",
      "John von Neumann",
      "Alonzo Church",
    ]);
    const reverseResult = flow(getFullName, reverse);
    expect(reverseResult(persons)).toEqual([
      "Alonzo Church",
      "John von Neumann",
      "Barkley Rosser",
      "Haskell Curry",
    ]);
  });
  it("ramda map", () => {
    const getFullName = (s: any) =>
      s !== null && s !== undefined ? s.fullname : "";
    const getFullNameMap = R.map(getFullName);
    expect(getFullNameMap(persons)).toEqual([
      "Haskell Curry",
      "Barkley Rosser",
      "John von Neumann",
      "Alonzo Church",
    ]);
    // const result = R.reverse(getFullNameMap(persons));
    const result = R.pipe(R.reverse, getFullNameMap);
    // const result = R.pipe(R.map(getFullName), R.reverse);
    expect(result(persons)).toEqual([
      "Alonzo Church",
      "John von Neumann",
      "Barkley Rosser",
      "Haskell Curry",
    ]);
  });
});
