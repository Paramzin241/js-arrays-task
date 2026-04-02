// BEGIN
const bubbleSort = (massiv) => {
  for (let i = 0; i < massiv.length - 1; i++) {
    for (let j = 0; j < massiv.length - 1 - i; j++) {
      if (massiv[j] > massiv[j + 1]) {
        const temp = massiv[j];
        massiv[j] = massiv[j + 1];
        massiv[j + 1] = temp;
      }
    }
  }
  return massiv;
};

export default bubbleSort;
// END
