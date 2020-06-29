describe("Recursive Function", () => {
  it("Use for loop", () => {
    const mockTotal = jest.fn((xs) => {
      let result = 0;
      for (const x of xs) {
        result = result + x;
      }
      return result;
    });
    expect(mockTotal([2, 4, 6, 8, 10])).toBe(30);
    // expect(mockTotal([2, [4, 6], 8, 10])).toBe(30);
  });
  // it("Using reduce ", () => {
  //   const arr = [
  //     [0, 1],
  //     [2, 3],
  //     [4, 5],
  //   ];
  //   arr.reduce((accumulator, currentValue, currentIndex, array) => {
  //     expect(accumulator.concat(currentValue)).toBeArray();
  //   });
  // });
  it("should ", () => {
    var flattened = [
      [0, 1],
      [2, 3],
      [4, 5],
    ].reduce(function (accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, []);
    expect(flattened).toMatchObject([0, 1, 2, 3, 4, 5]);
  });
});
