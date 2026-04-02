// BEGIN
const calculateAverage = (massiv) => {
  if (massiv.length === 0) return null;
  
  let sum = 0;
  for (const num of massiv) {
    sum += num;
  }
  return sum / massiv.length;
};

export default calculateAverage;
// END
