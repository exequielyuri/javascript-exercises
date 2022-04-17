/*
PSEUDO
get input: array of objects
extract all titles
    - foreach object
        - access object[title]
put those titles in a new array
    - push()
*/

const getTheTitles = function(books) {
    return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
