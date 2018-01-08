// Write a JavaScript program to reverse a given string.

console.log('script 1');

function revStr (str) {
    return str.split('').reverse().join('');
}

console.log(revStr('marcin'));
console.log(revStr('Aleksandra'));


// Write a JavaScript program to capitalize the first letter of each word of a given string.

console.log('script 2');

function capitLetter (text) {
    text = text.split(' ');

    for (var i = 0; i < text.length; i++) {
        text[i] = text[i][0].toUpperCase() + text[i].substr(1);
    }
    return text.join(' ');
}

console.log(capitLetter('to Jest jakis tekst Do testu.'));


// Write a JavaScript program to convert a given number to hours and minutes.

console.log('script 3');

function convertNum (x) {
    var hours = Math.floor(x / 60);
    var minutes = x % 60;
    return 'hours: ' + hours + ' minutes: ' + minutes;
}

console.log(convertNum(65));
console.log(convertNum(223));


// Write a JavaScript program to convert the letters of a given string in alphabetical order.

console.log('script 4');

function conLett (str) {
    return str.split('').sort().join('');
}

console.log(conLett('bca'));
console.log(conLett('Aleksandra'));


// Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

console.log('script 5');

function charCheck (someText) {
    return (/a...b/.test(someText) || (/b...a/.test(someText)));
}
console.log(charCheck('annnb'));
console.log(charCheck('bkkka'));
console.log(charCheck('ambnn'));