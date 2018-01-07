// Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.

console.log('script 1');

function checkNumbersRange (x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumbersRange(49, 59));
console.log(checkNumbersRange(70, 97));
console.log(checkNumbersRange(3, 79));


// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

console.log('script 2');

function largerNum (x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
        if (x > y) {
            return x;
        } else {
            return y;
        }
    } else {
        return false;
    }
}

console.log(largerNum(41, 55));
console.log(largerNum(15, 60));
console.log(largerNum(55, 90));


// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.

console.log('script 3');

function checkString (str, char) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }
    return (counter >= 2 && counter <= 4);
}

console.log(checkString("Python", "y"));
console.log(checkString("JavaScript", "a"));
console.log(checkString("Console", "o"));