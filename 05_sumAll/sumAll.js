/*
PSEUDO
- get input: 2 integers
    - sort them into ascending
- get summation from lowerNum to higherNum
    - with step of 1
    - using loop
*/

const sumAll = function(num1, num2) {
    // error checking: for negative, or NaN
    let inputType = typeof (num1+num2); // checks both input if NaN
    if (inputType !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    
    
    let lesserNum;
    let greaterNum;

    if (num1 > num2) { // sort numbers
        greaterNum = num1;
        lesserNum = num2;
    } else {
        greaterNum = num2;
        lesserNum = num1;
    }
    
    let sum = 0;
    while(lesserNum <= greaterNum) {
        sum += lesserNum;
        lesserNum++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
