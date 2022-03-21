/*
PSEUDO
- get input string
- put each letter in an array
    - using split('')
- create new string variable
- append each array element in descending
    - use array.length-1 to get scope
    - use for loop
*/

const reverseString = function(str) {
    const letters = str.split('');
    const lastIndex = letters.length-1;
    let reversedString = '';

    for (let i=lastIndex; i>=0; i--) { //starting from last
        reversedString += letters[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
