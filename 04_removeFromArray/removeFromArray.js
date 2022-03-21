/*
PSEUDO
get input: two arrays
    - arr for basis
    - arr for inputs
        - using rest parameter (...)
remove the inputs from the given array
    - each element of inputs, (foreach loop)
        - check if it exists in basis (indexOf())
            - assign that value to index
            - if it does, delete (index>-1)
                - delete using splice()
                    - splice (index, 1)
            - if not, continue
*/

const removeFromArray = function(array, ...inputs) {
    for (let input of inputs) {
        let index = array.indexOf(input);
        
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
