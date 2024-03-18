export const toCurrency = (value) => {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const toPercent = (value) => {
  return `${value}%`;
};

