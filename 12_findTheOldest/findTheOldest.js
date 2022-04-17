/*
    get input of person object
    get their age
    sort
    then return highest
*/
function computeAge(person) {
    if (!person.yearOfDeath) { // if alive
        person.yearOfDeath = (new Date()).getFullYear();
    }
    return person.age = person.yearOfDeath - person.yearOfBirth;
}

function sortByAge(a, b) {
    return (a.age > b.age) ? -1 : 1; // descending
}

const findTheOldest = function(persons) {
    persons.forEach(computeAge);
    persons.sort(sortByAge);
    return persons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
