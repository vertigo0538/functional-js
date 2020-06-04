describe("callback test", () => {
  it("callback setTimeOut", () => {
    jest.useFakeTimers();
    function add10(a, callback) {
      setTimeout(() => callback(a + 1), 2000);
    }
    add10(1, (result) => {
      expect(result).toBe(2);
    });
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
  it("callback", () => {
    function plus(a, b, callback) {
      const sum = a + b;
      callback(sum);
    }
    plus(1, 2, (result) => {
      expect(result).toBe(3);
    });
  });
});
