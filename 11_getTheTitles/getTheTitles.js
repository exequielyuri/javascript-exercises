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
    const titles = [];
    for (const book of books) {
        titles.push(book['title']);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
