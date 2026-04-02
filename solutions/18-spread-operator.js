// BEGIN
const flatten = (massiv) => {
  const result = [];
  for (const item of massiv) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
};

export { flatten };
// END
