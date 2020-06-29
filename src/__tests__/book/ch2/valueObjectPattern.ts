import { zipCode } from "../../../model/zipCode";
import { coordinate } from "../../../model/coordinate";

describe("Name of the group", () => {
  it("zipCode toString ", () => {
    const princetonZip: zipCode = zipCode("08544", "3345");
    expect(princetonZip.toString()).toBe("08544-3345");
  });
  it("coordinate toBeString ", () => {
    const greenwich: coordinate = coordinate(51.4778, 0.0015);
    const test = greenwich.translate(10, 10);
    console.log(test === greenwich);
    expect(greenwich.toString()).toString();
    expect(greenwich.translate(10, 10).toString()).toString();
  });
});
