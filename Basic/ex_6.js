// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one.

console.log('script 1');

function check_string(str)
{
    if (str.length < 6) {
        return str;
    }
    var result_str = str;

    if (str.substring(10, 4) === 'Script')
    {
        result_str = str.substring(0, 4) + str.substring(10,str.length);
    }
    return result_str;
}

console.log(check_string("JavaScript"));
console.log(check_string("CoffeeScript"));


// Write a JavaScript program to find the largest of three given integers.

console.log('script 2');

function largestInt (x, y, z) {
    return Math.max(x, y, z);
}

console.log(largestInt(4, 56, 23));
console.log(largestInt(423, 56, 23));
console.log(largestInt(4, 56, 233));


// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

console.log('script 3');

function checkNum (num1, num2) {
    if (num1 != num2) {
        var x = Math.abs(num1 - 100);
        var y = Math.abs(num2 - 100);

        if (x > y) {
            return num2;
        }
        if (y > x) {
            return num1;
        }
        return 0;
    } else {
        return false;
    }
}

console.log(checkNum(90, 89));
console.log(checkNum(-90, -89));
console.log(checkNum(90, 90));