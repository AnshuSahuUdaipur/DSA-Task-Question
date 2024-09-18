//6. Convert an array of words into a single string, with each word separated by a space.


function array(arr) {
    return arr.join(' ');
}

const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const sentence = array(words);
console.log(sentence);