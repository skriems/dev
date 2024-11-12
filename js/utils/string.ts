export const maybeToLocaleString = (
  number?: number | string,
  locale = "en",
  options?: Intl.NumberFormatOptions,
) => {
  if (!number || !Number.isFinite(number)) return; // return if undefined, NaN
  const defaultOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  return number?.toLocaleString(locale, { ...defaultOptions, ...options });
};
