import { describe, expect, it } from "vitest";
import { parseLocaleNumber } from "./numbers";

describe(parseLocaleNumber.name, () => {
  it("should parse a number with a decimal separator", () => {
    expect(parseLocaleNumber("1.000,00", "de")).toBe(1000);
    expect(parseLocaleNumber("1.000,00", "en")).toBe(1);
    expect(parseLocaleNumber("1,000.00", "en")).toBe(1000);
    expect(parseLocaleNumber("1,000.00", "de")).toBe(1);
  });
});
