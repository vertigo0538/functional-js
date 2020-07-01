import { zipCode } from "../../../model/zipCode";
import { coordinate } from "../../../model/coordinate";

describe("Name of the group", () => {
  it("zipCode toString ", () => {
    const princetonZip: zipCode = zipCode("08544", "3345");
    const princetonZip2: zipCode = zipCode("08544", "3345");
    expect(princetonZip.toString()).toBe("08544-3345");
    // console.log(princetonZip2);
    const princetonZip3 = {
      code: "12121",
      location: "asfasfsa",
      fromString: "asfasf",
    };
    console.log(princetonZip3.code);
  });
  it("coordinate toBeString ", () => {
    const greenwich: coordinate = coordinate(51.4778, 0.0015);
    const test = greenwich.translate(10, 10);
    // grennwich의 translate는 새로운 객체를 반환한다.
    // 새로운 객체를 반환하는지 확인한다.
    console.log(test === greenwich);
    expect(greenwich.toString()).toString();
    expect(greenwich.translate(10, 10).toString()).toString();
  });
});
