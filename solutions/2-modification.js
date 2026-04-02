// BEGIN
export function swap(massiv) {
  if (massiv.length >= 2) {
    const first = massiv[0];
    const last = massiv[massiv.length - 1];
    massiv[0] = last;
    massiv[massiv.length - 1] = first;
  }
  return massiv;
}
// END
