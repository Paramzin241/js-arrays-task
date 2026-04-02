// BEGIN
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
    const otw = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (stopWords.includes(word)) {
            otw.push('$#%!');
        } else {
            otw.push(word);
        }
    }
    return otw.join(' ');
};

export default makeCensored;
// END
