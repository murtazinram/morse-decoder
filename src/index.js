const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function getValueByKey(object, key) {
    return Object.values(object).find(value => value === object[key])
}

function decode(expr) {
    const arr = []
    for (let item of expr.match(/.{1,10}/g)) {
        let indexOf = item.indexOf('1');
        if (indexOf === -1) {
            arr.push(' ')
        } else {
            let value = item.slice(indexOf)
            value = value.toString().replace(/10/g, '.')
            value = value.toString().replace(/11/g, '-')
            arr.push(getValueByKey(MORSE_TABLE, value))
        }
    }
    return arr.join('')
}

module.exports = {
    decode
}