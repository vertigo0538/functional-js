import { p1, p2, p3, p4 } from "../../../book/ch3/data";
import map from "lodash/fp/map";
import flow from "lodash/fp/flow";
import isUndefined from "lodash/fp/isUndefined";
import reduce from "lodash/fp/reduce";
import R, { groupBy } from "ramda";
import _ from "lodash";
describe("", () => {
  const persons = [p1, p2, p3, p4];
  console.log(persons);
  it("rodash reduce", () => {
    const average = (stat: any, person: any) => {
      const country = person.address.country;
      stat[country] = isUndefined(stat[country]) ? 1 : stat[country] + 1;
      return stat;
    };
    const result = reduce(average, {});
    expect(result(persons)).toEqual({
      US: 2,
      Greece: 1,
      Hungary: 1,
    });
  });
  it("rodash reduce2", () => {
    const getCountry = (person) => person.address.country;
    const average = (stat: any, criteria: any) => {
      stat[criteria] = isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1;
      return stat;
    };
    const result = flow(map(getCountry), reduce(average, {}));
    expect(result(persons)).toEqual({
      US: 2,
      Greece: 1,
      Hungary: 1,
    });
  });
  it("ramda reduce", () => {
    const average = (stat: any, person: any) => {
      const country = person.address.country;
      // console.log(country);
      stat[country] = R.isNil(stat[country]) ? 1 : stat[country] + 1;
      return stat;
    };
    const result = R.reduce(average, {});
    expect(result(persons)).toEqual({
      US: 2,
      Greece: 1,
      Hungary: 1,
    });
  });
  it("ramda reduce2", () => {
    const getCountry = (person) => person.address.country;
    const average = (stat: any, criteria: any) => {
      console.log("stat", stat);
      stat[criteria] = R.isNil(stat[criteria]) ? 1 : stat[criteria] + 1;
      return stat;
    };
    const result = R.pipe(R.map(getCountry), R.reduce(average, {}));
    expect(result(persons)).toEqual({
      US: 2,
      Greece: 1,
      Hungary: 1,
    });
  });
  it("ramda reduce with R.lens", () => {
    const cityPath = ["address", "country"];
    const cityLens = R.lens(R.path(cityPath), R.assocPath(cityPath));
    const average = (stat: any, criteria: any) => {
      stat[criteria] = R.isNil(stat[criteria]) ? 1 : stat[criteria] + 1;
      return stat;
    };
    const cityView = R.view(cityLens);
    const result = R.pipe(R.map(cityView), R.reduce(average, {}));
    expect(result(persons)).toEqual({
      US: 2,
      Greece: 1,
      Hungary: 1,
    });
  });
  it("ramda reduce with R.lens, groupBy", () => {
    const cityPath = ["address", "country"];
    const cityLens = R.lens(R.path(cityPath), R.assocPath(cityPath));
    const result = R.groupBy(R.view(cityLens));
    console.log(result(persons));
  });
});
