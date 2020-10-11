const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function decode(expr) {
    const space = '**********'
    const dot = 10
    const dash = 11
    const arr = []
    expr = expr.split('')
    for (const item of expr) {
        if (item === ' ') {
            arr.push(space)
        } else {
            let value = getKeyByValue(MORSE_TABLE, item).split('');
            // console.log(value);
            const search = /\./g
            const replaceWith = '10';

            let newStr = value.toString().replace(search, replaceWith)
            // for (let string of value) {
            //     console.log(string)
            //     if (string === '.') string = dot
            //     else string = dash
            // }
            arr.push(newStr)
        }
    }
    console.log(arr)



}
const result = "the quick brown fox jumps over the lazy dog";
decode(result)

// module.exports = {
//     decode
// }