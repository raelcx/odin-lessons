const palindromes = function (string) {
    alphaNumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';

    let cleaned = string
            .toLowerCase()
            .split('')
            .filter((character) => alphaNumeric.includes(character))
            .join('');

    const result = cleaned.split('').reverse().join('');

    return result === cleaned;

};

// Do not edit below this line
module.exports = palindromes;
