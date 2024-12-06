const fibonacci = function(number) {
    let counter = Number(number);

    if (counter < 0) return 'OOPS';
    if (counter == 0) return 0;

    let firstPrevious = 1;
    let secondPrevious = 0;

    for (let i = 2; i <= counter; i++) {
        let result = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = result;
    }

    return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
