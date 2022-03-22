/*
PSEUDO
get input: position in fibonacci
if 1st position, return 1
if 2nd position, return 1
F(3), return fibonacci(1) + fibonacci(2)
*/

const fibonacci = function(num) {
    if (num<0) { // error for negative input
        return 'OOPS';
    }

    if (num < 3) { // base case for 1st & 2nd position
        return 1;
    }

    return fibonacci(num-2) + fibonacci(num-1);
};

// Do not edit below this line
module.exports = fibonacci;
