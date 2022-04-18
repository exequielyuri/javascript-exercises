/*
    input: text, shifts
    if shift is greater than 26,
        shifts = shifts % 26
    make a new str_var: translated
    for each letter
        if its not a letter
            add that to translated then skip
        determine if its uppercase or lowercase
        get the ascii code
        add shifts
            if it overflows, subtract 26
        convert back to letter
        add that letter to translated
    return translated

    converting to ascii: str.charCodeAt(index) - remove index if one letter
    converting from ascii: String.fromCharCode(code)
    A-Z: 65 - 90
    a-z: 97 - 122
*/

function isUpper(ascii) {
    return (ascii >= 65 && ascii <= 90);
}

function isOverflow(ascii, uppercase) {
    return (ascii>122) || (uppercase && ascii>90); 
}

const caesar = function(text, shifts) {
    let translated = "";

    if (shifts > 26) {
        shifts %= 26;
    }

    const length = text.length;
    for (let letter of text) {
        const currAscii = letter.codePointAt();
        const isUpperCase = isUpper(currAscii);
        let newAscii = currAscii + shifts;
        
        if (isOverflow(newAscii, isUpperCase)) {
            newAscii -= 26;
        }
        let newLetter = String.fromCharCode(newAscii);
        translated += newLetter;
    }
    return translated;
};

// Do not edit below this line
module.exports = caesar;
