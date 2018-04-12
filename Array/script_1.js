// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

console.log('script 1');

var isArray = function(input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};

console.log(isArray('Gdansk'));
console.log(isArray([1, 2]));


// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

console.log('script 2');

var cloneArray = function (arr) {
    return arr.slice(0);
};

console.log(cloneArray([1, 2, 3, 4]));
console.log(cloneArray([1, 2, [3, 4]]));


// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
//          7
//         []
//         [7, 9, 0]
//         [7, 9, 0, -2]
//         []

console.log('script 3');

var firstElemOfArray = function(arr2, n) {
    if (n == null) {
        return arr2[0];
    } else {
        return arr2.slice(0, n);
    }
};

console.log(firstElemOfArray([1, 2, 3]));
console.log(firstElemOfArray([1, 2, 3], 2));
console.log(firstElemOfArray([1, 2, 3, 4], -1));
console.log(firstElemOfArray([], 3));


// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
//     -2
//     [9, 0, -2]
//     [7, 9, 0, -2]

console.log('script 4');

var lastElemOfArray = function(arr3, k) {
    if (k == null) {
        return arr3[arr3.length - 1];
    } else {
        return arr3.slice(Math.max(arr3.length - k, 0));
    }
};

console.log(lastElemOfArray([5, 6, 7]));
console.log(lastElemOfArray([5, 6, 7], 2));
console.log(lastElemOfArray([5, 6, 7, 8, 9], 6));


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

console.log('script 5');

myColor = ["Red", "Green", "White", "Black"];

myColorA = myColor.toString();
myColorB = myColor.join();
myColorC = myColor.join('+');

console.log(myColorA);
console.log(myColorB);
console.log(myColorC);


// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

console.log('script 6');

var number = window.prompt('Podaj liczbę dla zadania 6');
var str = number.toString();
var result = [str[0]];

for(var i = 1; i < str.length; i++) {
    if((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
        result.push('-', str[i]);
    } else {
        result.push(str[i]);
    }
}

console.log(result.join(''));