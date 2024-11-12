/**
 * Parse a localized number to a float.
 *
 * > parseLocaleNumber('1.000,00', 'de-DE')
 * 1000
 *
 * > parseLocaleNumber('1,000.00', 'en-US')
 * 1000
 *
 * @param number - the localized number as a string
 * @param locale - the locale that the number is represented in. Omit this parameter to use the current locale.
 * @param defaultValue - [optional] the default value to return if the number is null or undefined
 */
export function parseLocaleNumber(
  number: string | number | FormDataEntryValue,
  locale: string | string[],
  defaultValue = "0",
) {
  if (typeof number === "number") return number;

  const parts = new Intl.NumberFormat(locale).formatToParts(1111.1);
  const thousandSeparator = parts.find((part) => part.type === "group")!.value;
  const decimalSeparator = parts.find((part) => part.type === "decimal")!.value;
  return parseFloat(
    (number || defaultValue)
      .replace(new RegExp("\\" + thousandSeparator, "g"), "")
      .replace(new RegExp("\\" + decimalSeparator), "."),
  );
}
