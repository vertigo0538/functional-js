describe("reduce1 배열안에 전부 더하기", () => {
  it("loop", () => {
    const nums = [1, 2, 3, 4, 5];
    let total = 0;
    for (const n of nums) {
      total = total + n;
    }
    expect(total).toBe(15);
  });
});
