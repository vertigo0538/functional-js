import Person from "../../../model/Person";
describe("Name of the group", () => {
  it("data test", () => {
    const p1 = new Person("Haskell", "Curry", "111-11-1111");
    console.log(p1);
  });
});
