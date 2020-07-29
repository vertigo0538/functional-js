import { p1, p2, p3, p4, p5, p6 } from "../../../book/ch3/data";
import R from "ramda";
import _ from "lodash";
import statCase from "lodash/fp/startCase";
describe("", () => {
  const persons = [p1, p2, p3, p4];
  // console.log(persons);
  const isNotValid = (val: any) => R.isNil(val);
  const notAllValid = (args: any) => R.any(isNotValid)(args);
  const isValid = (val: any) => !R.isNil(val);
  const allValid = (args: any) => R.all(isValid)(args);

  // console.log(persons);
  it("validator", () => {
    expect(notAllValid(["string", 0, null, undefined])).toBeTrue();
    expect(notAllValid(["string", 0, {}])).toBeFalse();
    expect(allValid(["string", 0, null])).toBeFalse();
    expect(allValid(["string", 0, {}])).toBeTrue();
  });
  it("filter", () => {
    const fullName = (person) => person.fullname;
    const bornIn1903 = (person) => person.birthYear === 1903;
    // const result = R.pipe(R.filter(isValid), R.map(fullName));
    // console.log(result(persons));
    const result = R.pipe(
      R.filter(bornIn1903),
      R.map(fullName),
      R.join(" and ")
    );
    expect(result(persons)).toEqual("John von Neumann and Alonzo Church");
  });
  it("refactoring average ", () => {
    const getCountry = (person) => person.address.country;
    const average = (stat: any, country: any) => {
      if (isNotValid(stat[country])) {
        stat[country] = { name: country, count: 0 };
      }
      stat[country].count++;
      return stat;
    };
    const result = R.pipe(R.map(getCountry), R.reduce(average, {}));
    expect(result(persons)).toEqual({
      Greece: {
        count: 1,
        name: "Greece",
      },
      Hungary: {
        count: 1,
        name: "Hungary",
      },
      US: {
        count: 2,
        name: "US",
      },
    });
  });
  it("Lazy pipe", () => {
    const names = ["KHK", "AHK", "SSY", "SSY", "KIA"];
    const pipe = R.pipe(
      R.filter(isValid),
      R.map((s) => s.replace(/_/, " ")),
      R.uniq,
      R.map(statCase),
      R.sort(R.comparator(R.lt)),
      R.values
    );
    expect(pipe(names)).toEqual(["AHK", "KHK", "KIA", "SSY"]);
  });
  it("The largest population in Country ", () => {
    const propCountry = R.path(["address", "country"]);
    const average = (stat: any, country: any) => {
      if (isNotValid(stat[country])) {
        stat[country] = { name: country, count: 0 };
      }
      stat[country].count++;
      return stat;
    };
    const result = R.pipe(
      R.filter(isValid),
      R.map(propCountry),
      R.reduce(average, {}),
      R.values,
      R.sortBy(R.prop("count")),
      R.reverse,
      R.head,
      R.prop("name")
    );
    // console.log(pipe(persons));
    // const result = R.values(pipe(persons));
    expect(result(persons)).toBe("US");
  });
});
