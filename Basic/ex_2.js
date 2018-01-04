// Write a JavaScript program where the program takes a random integer
// between 1 to 10, the user is then prompted to input a guess number.
//     If the user input matches with guess number, the program will display
// a message "Good Work" otherwise display a message "Not matched"

console.log('script 1');

var randomNum = Math.round(Math.random() * 10);
var userGuess = prompt('Input number between 1 to 10.');

if (randomNum == userGuess) {
    alert('Matched!');
} else {
    alert('Not matched. The random number was: ' + randomNum);
}


// Write a JavaScript program to calculate days left until next Christmas.

console.log('script 2');

    var tday = new Date();
var xmass = new Date(tday.getFullYear(), 11, 25);

if (tday.getMonth() == 11 && tday.getDate() > 25) {
    xmass.setFullYear(tday.getFullYear() + 1);
}

var oneDay = 1000 * 60 * 60 * 24;

console.log(Math.ceil((xmass.getTime() - tday.getTime()) / (oneDay)) + ' days until Xmass.');


// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//     [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
//     60°C is 140 °F
// 45°F is 7.222222222222222°C

console.log('script 3');

function fToC (f) {
    return ((f - 32) / 9) * 5;
}

function cToF (c) {
    return c * 9 / 5 + 32;
}

console.log('F to C ' + fToC(45));
console.log('C to F ' + cToF(60));


// Write a JavaScript program to get the website URL (loading page)

console.log('script 4');

alert(document.URL);    //sposob 1

console.log(document.URL);      //sposob 2


// Write a JavaScript exercise to create a variable using a user-defined name.

console.log('script 5');

var my_name = 'Marcin';
var my_age = 12;

this[my_name] = my_age;

console.log(this[my_name]);


// Write a JavaScript exercise to get the extension of a filename.

console.log('script 6');

var file_name_js = 'example.js';
var file_name_html = 'index.html';

var ext_js = file_name_js.split('.').pop();
var ext_html = file_name_html.split('.').pop();

console.log('Rozszerzenia podanych plikow to: ' + ext_js + ' oraz ' + ext_html);