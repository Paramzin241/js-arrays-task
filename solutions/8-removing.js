// BEGIN
const getSameParity = (massiv) => {
    if (massiv.length != 0){
        let print = [massiv[0]];
        for (let i = 1; i < massiv.length; i++){
            if (massiv[0] % 2 == massiv[i] % 2 || massiv[0] % 2 == (massiv[i] % 2) * -1){
                print.push(massiv[i]);
            }
        }
        return print;
    }
    return [];
}

export default getSameParity;
// END
