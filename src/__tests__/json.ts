import "jest-extended";
describe("json method test", () => {
  it("stringfy js value,object => json", () => {
    const user = {
      name: "khk",
      age: 26,
    };
    const jsonUser = JSON.stringify(user);
    console.log(jsonUser);
    expect(jsonUser).toBeString(`{"name":"khk","age":26}`);
  });
  it("parse json=>object", () => {
    const user = {
      name: "khk",
      age: 26,
    };
    const stringfyUser = JSON.stringify(user);
    const jsonUser = JSON.parse(stringfyUser);
    expect(jsonUser).toMatchObject({
      name: "khk",
      age: 26,
    });
  });
  it("stringfy arguments", () => {
    const user = {
      name: "khk",
      age: 26,
    };
    const jsonUser = JSON.stringify(user, ["name"]);
    expect(jsonUser).toBeString("khk");
  });
});
