import { classNames } from "shared/lib/classNames/classNames";

describe(" unit test ", () => {
  test("with only first param", () => {
    expect(classNames("class")).toBe("class");
  });
  test("with additional class", () => {
    const expected = "class class1 class2";
    expect(classNames("class", {}, ["class1", "class2"])).toBe(expected);
  });
  test("with mods", () => {
    expect(classNames("class", { required: true })).toBe("class required");
  });
  test("with mods false params", () => {
    const expected = "class required";
    expect(classNames("class", { required: true, selected: false })).toBe(
      expected
    );
  });
  test("with mods undefined params", () => {
    const expected = "class selected";
    expect(classNames("class", { required: undefined, selected: true })).toBe(
      expected
    );
  });
});
