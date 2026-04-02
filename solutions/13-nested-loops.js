const _ = require("lodash"); 

// BEGIN
const getSameCount = (massiv1, massiv2) => {
  const unique1 = new Set(massiv1);
  const unique2 = new Set(massiv2);
  
  let count = 0;
  for (const item of unique1) {
    if (unique2.has(item)) count++;
  }
  return count;
};

export default getSameCount;
// END
