/*
PSEUDO
get input of string
clean the string
    - using regex /\W/g = removes all NOT words
        - removes punctuations
        - removes white spaces
    - convert all to lower case
        - toLowerCase()
store cleaned string to a var "original"
reverse original, and put it in "reversed"
    - put every char to an array
        - append each char one by one
            - starting from end pop()
compare if original === reversed,
    - true
    - else, false
*/
function reverse(str) { // reverses string
    const letters = str.split('');
    let length = letters.length;
    let reversedStr = '';

    while (length>0) { // pop until empty
        reversedStr += letters.pop();
        length--;
    }
    return reversedStr;
}

const palindromes = function (str) {
    const original = str.replace(/\W/g, ''); // delete punctuations & spaces
    const lowerOriginal = original.toLowerCase(); // fix case
    const reversed = reverse(lowerOriginal);
    
    return lowerOriginal === reversed;
};

// Do not edit below this line
module.exports = palindromes;
