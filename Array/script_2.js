// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

console.log('script 1');

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr1Sorte = arr1.sort();

console.log(arr1Sorte);

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

console.log('script 2');

var array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var xy = 1;
var x = 0;
var item;

for(var i = 0; i < array1.length; i++) {
    for(var j = i; j < array1.length; j++) {
        if(array1[i] == array1[j]) {
            x++;
        }
        if(xy < x) {
            xy = x;
            item = array1[i];
        }
    }
    x = 0;
}

console.log(item + " ( " + xy +" times ) ") ;


// Write a JavaScript program which accept a string as input and swap the case of each character.
//     For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

console.log('script 3');

var str = 'The Quick Brown Fox';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var resultArray = [];

for(var k = 0; k < str.length; k++) {

    if(upperCase.indexOf(str[k]) !== -1) {
        resultArray.push(str[k].toLowerCase());
    }
    else if(lowerCase.indexOf(str[k]) !== -1) {
        resultArray.push(str[k].toUpperCase());
    }
    else {
        resultArray.push(str[k]);
    }
}

console.log(resultArray.join(''));


// Write a JavaScript program which prints the elements of the following array
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
//     "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

console.log('script 4');

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(k in a) {
    console.log('row ' + k);

    for(j in a[k]) {
        console.log(' ' + a[k][j]);
    }
}