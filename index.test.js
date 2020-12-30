const findLargestNumber = require("./index");
test("number 90", () => {
    expect(findLargestNumber(90)).toEqual([81, 2]);
});
test("number 6", () => {
    expect(findLargestNumber(6)).toEqual([4, 1]);
});
test("number 65", () => {
    expect(findLargestNumber(65)).toEqual([64,3]);
});
test("number 3", () => {
    expect(findLargestNumber(3)).toEqual([1, -1]);
});
test("number 1", () => {
    expect(findLargestNumber(1)).toEqual([0, -1]);
});
test("number 81", () => {
    expect(findLargestNumber(81)).toEqual([64, 3]);
});
test("number 29", () => {
    expect(findLargestNumber(29)).toEqual([27, 2]);
});
test("number 4", () => {
    expect(findLargestNumber(4)).toEqual([1, -1]);
});