const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let option = arguments[i];
        let keepRunning = true

        while (keepRunning) {
            let index = array.indexOf(option);
            if (index == -1) {
                keepRunning = false;
                continue;
            }
            array.splice(index, 1);
        }
        option = arguments[i];
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
