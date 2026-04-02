// BEGIN
const get = (city, index, znach = null) => {
  if (index >= 0 && index < city.length) {
    return city[index];
  }
  return znach;
};

export { get };
// END
