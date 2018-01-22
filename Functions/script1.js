// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

console.log('script 1');

function revNum (num) {
    num = num + '';
    return num.split('').reverse().join('');
}

console.log(revNum(12345));


// Write a JavaScript function that checks whether a passed string is palindrome or not?

console.log('script 2');

function palCheck (str) {
    var palStr = str.split('').reverse().join('');
    return (str === palStr);
}

console.log(palCheck('ala'));
console.log(palCheck('ola'));


// Write a JavaScript function that generates all combinations of a string.

console.log('script 3');

function substrings(str1)
{
    var array1 = [];

    for (var x = 0, y=1; x < str1.length; x++,y++)
    {
        array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))){
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dom");


// Write a JavaScript function that returns a passed string with letters in alphabetical order.

console.log('script 4');

function letterOrder (txt) {
    return txt.split('').sort().join('');
}

console.log(letterOrder('ddactb'));


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

console.log('script 5');

function changeLetter (text) {
    var newText = text.split(' ');
    var newArr = [];

    for (var i = 0; i < newText.length; i++) {
        newArr.push(newText[i].charAt(0).toUpperCase() + newText[i].slice(1));
    } return newArr.join(' ');
}

console.log(changeLetter('the quick brown fox'));


// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

console.log('script 6');

function longestWord (stringToCheck) {
    var str = stringToCheck.split(' ');
    var longest = 0;
    var word = null;

    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord('to jest jakis dziwaczny lol io'));


// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//     Example string : 'The quick brown fox'
// Expected ExpectedOutput : 5

console.log('script 7');

function vowelsCount (strToCheck) {
    var listVowels = 'aeuioAEUIO';
    var counter = 0;

    for (var k = 0; k < strToCheck.length; k++) {
        if(listVowels.indexOf(strToCheck[k]) !== -1) {
            counter++;
        }
    }
    return counter;
}

console.log(vowelsCount('Aleksandra'));
