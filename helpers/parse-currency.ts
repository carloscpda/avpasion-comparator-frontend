const parseCurrency = (number: number) =>
  number.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

export default parseCurrency;
