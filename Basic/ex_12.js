// Write a JavaScript program to count the number of vowels in a given string.

console.log('script 1');

function countVowels (str1) {
    return str1.replace(/[^aeyuio]/g, '').length;
}

console.log(countVowels('abeeil'));


// Write a JavaScript program to check if a given string contains equal number of p's and t's present.

console.log('script 2');

function equalPT (text1) {
    var p = text1.replace(/[^p]/g, '').length;
    var t = text1.replace(/[^t]/g, '').length;

    return 'p: ' + p + ' t: ' + t;
}

console.log(equalPT('petet'));


// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

console.log('script 3');

function newText (str2, n) {
    if (n < 0) {
        return false;
    } else {
        return str2.repeat(n);
    }
}

console.log(newText('alex', 5));
console.log(newText('alex', 0));
console.log(newText('alex', -7));


// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.
//     The length of the given string must be 3 and above.

console.log('script 4');

function str_copies (str_to_copie) {
    if (str_to_copie.length < 3) {
        return false;
    } else {
        var lastThree = str_to_copie.substring(str_to_copie.length - 3);
        return lastThree.repeat(4);
    }
}

console.log(str_copies('marcin'));
console.log(str_copies('ma'));
console.log(str_copies('1234'));