import { profile } from "./data";
import mockAxios from "axios";
describe("Data test", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        id: 1,
        title: "hi",
        content: "hihihi",
      },
    })
  );
  test("profile test ", async () => {
    const { data } = await profile();
    console.log(data);
  });
});
