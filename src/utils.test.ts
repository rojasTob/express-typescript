import { dateFormat } from "./utils";

describe("dateFormat", () => {
  test("should return formated YYYY/MM/DD date given a Date date", () => {
    const date = new Date();
    expect(dateFormat(date)).toBe([date.getFullYear(),date.getMonth() + 1,date.getDate()].join('/'));
  });

  test("should return formated YYYY/MM/DD date given a number date", () => {
    const date = 1707242186;
    expect(dateFormat(date)).toBe("2024/2/6");
  });
});