// BEGIN
export const calculateSum = (massiv) => {
  let sum = 0;
  for (const num of massiv) {
    if (num % 3 === 0) {
      sum += num;
    }
  }
  return sum;
};
// END
