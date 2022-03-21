/*
PSEUDO
- input: string & number
- make a new string
    - string * num
*/

const repeatString = function(string, num) {
    if (num<0) return 'ERROR'; // can't repeat negative times
    
    let repeatedString = '';

    for (let i=0; i<num; i++) { // append self `num` times
        repeatedString += string; 
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
