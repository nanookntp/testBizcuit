const sum = require('./sum');

test(`"12" + "2" = "14"`, () => {
    expect(sum("12", "2")).toBe("14");
  });

  test(`"12" + "abc" = "Error"`, () => {
    expect(sum("12", "abc")).toBe("Error");
  });