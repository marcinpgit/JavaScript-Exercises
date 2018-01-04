// Write a JavaScript program to create a new string from a given string taking the last 3 characters
// and added at both the front and back. The string length must be 3 or more.

console.log('script 1');

function newStr (str) {
    if  (str.length >= 3) {
        var back = str.substring(str.length - 3);
        return back + str + back;
    } else {
        console.log('The string lenght must be 3 or more')
    }
}

console.log(newStr('Monika'));
console.log(newStr('Ala ma kota.'));


// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

console.log('script 2');

function strStarts (text) {
    if (text < 4) {
        return false;
    }

    var frontString = text.substring(0, 4);
    if (frontString === 'Java') {
        return true;
    } else {
        return false;
    }
}

console.log(strStarts('Python'));
console.log(strStarts('JavaScript'));


// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

console.log('script 3');

function inRange (a, b) {
    if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(inRange(24, 55));
console.log(inRange(66, 89));
console.log(inRange(12, 234));


// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

console.log('script 4');

function inRange2 (x, y, z) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(inRange2(56, 87, 95));
console.log(inRange2(16, 87, 95));
console.log(inRange2(16, 87, 195));
console.log(inRange2(16, 827, 195));