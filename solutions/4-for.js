// BEGIN
const addPrefix = (massiv, prefix) => {
    const result = [];
    for (let i = 0; i < massiv.length; i++) {
        result[i] = `${prefix} ${massiv[i]}`;
    }
    return result;
};

export default addPrefix;
// END
