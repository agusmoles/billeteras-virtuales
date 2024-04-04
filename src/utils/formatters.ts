const percentageFormatter = new Intl.NumberFormat("es-AR", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const formatPercentage = (value: number) => {
  return percentageFormatter.format(value / 100).replace(/\s/gi, "");
};

const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export const formatCurrency = (value: number) => {
  return currencyFormatter.format(value);
};
