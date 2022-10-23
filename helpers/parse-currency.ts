const parseCurrency = (number: number) =>
  number.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });

export default parseCurrency;
