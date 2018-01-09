// Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
//     The string length must be greater or equal to three.

console.log('script 1');

function creatStr (txt_str) {
    if (txt_str.length % 2 != 0) {
        var mid = (txt_str.length + 1) / 2;
        return txt_str.slice(mid - 2, mid + 1);
    }
    return txt_str;
}

console.log(creatStr('haabcch'));


// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same
// then remove the characters from the longer string.

console.log('script 2');

function concatTwoStr (str1, str2) {
    const s = Math.min(str1.length, str2.length);
    return str1.substring(str1.length - s) + str2.substring(str2.length - s);
}

console.log(concatTwoStr('JS', 'python'));
console.log(concatTwoStr('JS', 'MP'));


// Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.

console.log('script 3');

function checkEnd (strTxt) {
    if (strTxt.length >= 6) {
        return strTxt.endsWith('Script');
    } else {
        return 'string should contain at least 6 characters';
    }
}

console.log(checkEnd('JavaScript'));
console.log(checkEnd('Java'));


// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

console.log('script 4');

function losNew (txtString) {
    return (txtString.startsWith('Los') || txtString.startsWith('New'))? txtString:'';
}

console.log(losNew('Los Angeles'));
console.log(losNew('New York'));
console.log(losNew('Gdansk'));


// Write a JavaScript program to create a new string from a given string, removing the first and
// last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

console.log('script 5');

function cutString (strToCut) {
    var startChar = 0;
    var endChar = strToCut.length;

    if (strToCut.startsWith('P')) {
        startChar = 1;
    }
    if (strToCut.endsWith('P')) {
        endChar--;
    } else {
        return strToCut;
    }
    return strToCut.substring(startChar, endChar);
}

console.log(cutString('Gdansk'));
console.log(cutString('Police'));
console.log(cutString('PoooP'));
console.log(cutString('DroP'));