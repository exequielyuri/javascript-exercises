/*
PSEUDO
- get input: year
- if divisible by 400
    - true
- or if divisible 4 and NOT divisible by 100
    - true
*/

const leapYears = function(year) {
    let isDivBy4 = year%4 === 0;
    let isDivBy100 = year%100 === 0;
    let isDivBy400 = year%400 === 0;

    if (isDivBy4 && !isDivBy100 || isDivBy400) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
