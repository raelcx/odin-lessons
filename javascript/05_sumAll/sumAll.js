const sumAll = function(number1, number2) {
    let sum = 0;
    let initialNumber;
    let lastNumber;

    if (number1 < 0 || number2 < 0
        || Number.isInteger(number1) == false || Number.isInteger(number2) == false
    ) {
        return 'ERROR';
    }

    if (number1 > number2) {
        initialNumber = number2;
        lastNumber = number1;
    } else {
        initialNumber = number1;
        lastNumber = number2;
    }

    for (let i = initialNumber; i <= lastNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
