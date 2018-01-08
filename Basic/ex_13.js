// Write a JavaScript program to extract the first half of a string of even length.

console.log('script 1');

function strExtract (text_str) {
    if (text_str.length % 2 == 0) {
        return text_str.slice(0, text_str.length / 2);
    } else {
        return false;
    }
}

console.log(strExtract('JavaScript'));
console.log(strExtract('Marcin'));
console.log(strExtract('Ola'));


// Write a JavaScript program to create a new string without the first and last character of a given string.

console.log('script 2');

function first_last (txt) {
    return txt.substring(1, txt.length - 1);
}

console.log(first_last('Aleksandra'));


// Write a JavaScript program to concatenate two strings except their first character.

console.log('script 3');

function concat (str_1, str_2) {
    var x = str_1.substring(1, str_1.length);
    var y = str_2.substring(1, str_2.length);

    return x + y;
}

console.log(concat('Monika', 'Aleksandra'));


// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

console.log('script 4');

function moveChar (txt_3) {
    if (txt_3.length < 3) {
        return false;
    } else {
        var lastThreeChar = txt_3.substring(txt_3.length - 3);
        var restOfString = txt_3.substring(0, txt_3.length - 3);

        return lastThreeChar + restOfString;
    }
}

console.log(moveChar('Python'));
console.log(moveChar('Aleksandra'));