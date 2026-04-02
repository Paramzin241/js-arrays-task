// BEGIN
export const reverse = (massiv) => {
  const length = massiv.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    [massiv[i], massiv[length - 1 - i]] = [massiv[length - 1 - i], massiv[i]];
  }
};
// END
