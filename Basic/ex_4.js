// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

console.log('script 1');

function remove_char (str, pos) {
    var part1 = str.substring(0, pos);
    var part2 = str.substring(pos + 1, str.length);
    return part1 + part2;
}

console.log(remove_char('marcin', 0));
console.log(remove_char('marcin', 1));
console.log(remove_char('marcin', 2));


// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
//     The string length must be greater than or equal to 1.

console.log('script 2');

function charSwap (str_swap) {
    if (str_swap.length >= 1) {
        var part_middle = str_swap.substring(1, str_swap.length -1);
        var part_1 = str_swap.charAt(0);
        var part_2 = str_swap.charAt(str_swap.length - 1);
        return part_2 + part_middle + part_1;
    }
}

console.log(charSwap('Ola'));
console.log(charSwap('Monika'));
console.log(charSwap('Ala ma kota'));


// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

console.log('script 3');

function frontBack (text) {
    return text.charAt(0) + text + text.charAt(0);
}

console.log(frontBack('a'));
console.log(frontBack('ab'));
console.log(frontBack('abc'));


// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

console.log('script 4');

function numcheck (a) {
    if ((a % 3 == 0) && (a % 7 == 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(numcheck(21));
console.log(numcheck(5));
console.log(numcheck(63));