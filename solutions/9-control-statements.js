// BEGIN
const getTotalAmount = (massiv, valuta) => {
  let total = 0;
  for (const item of massiv) {
    if (item.startsWith(valuta)) {
      total += Number(item.slice(4));
    }
  }
  return total;
};

export default getTotalAmount;
// END
