const reverseString = function(string) {
    let stringToArray = string.split('');
    let arrayReversed = stringToArray.reverse();
    let arrayBackToString = arrayReversed.join('');
return arrayBackToString;
};

// Do not edit below this line
module.exports = reverseString;
