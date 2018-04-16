// Write a JavaScript program to shuffle an array.

console.log('script 1');

function shuffle(arr) {
    var arrLength = arr.length;
    var randomIndex;
    var last;

    while(arrLength > 0) {
        randomIndex = Math.floor(Math.random() * arrLength);
        arrLength--;

        last = arr[arrLength];
        arr[arrLength] = arr[randomIndex];
        arr[randomIndex] = last;
    }
    return arr;
}

console.log(shuffle([0, 1, 2, 3, 4, 5, 6]));


// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
//     Sample array :
//     var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
//     console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

console.log('script 2');

var items = [1, 2, 3, 4, 5, 7, 8, 9];

function binarySearch(arr2, value) {
    return arr2.indexOf(value);
}

console.log(binarySearch(items, 1));
console.log(binarySearch(items, 5));


