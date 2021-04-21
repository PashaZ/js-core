// task 1


function upperCase(text) {
    let regExp = /^[A-Z]/;
    if (regExp.test(text)) {
        console.log('String\'starts with uppercase character')
    } else {
        console.log('String\'s not starts with uppercase character')
    }
}
upperCase('the function');
upperCase('Write the function');

// task 2

   
function checkMail(email) {
    regExp = /^\w+@\w+\.\w+$/;
    return regExp.test(email);
}

console.log(checkMail("Qmail2@gmail.com"));

// task 3


function checkLetters(text) {
    let letters = /d(b+)(d)/gi.exec(text);
    console.log(letters.slice());
}
checkLetters('cdbBdbsbz');

// task 4

function change(str) {
    let regExp = /(\w+)\s(\w+)/;
    let matchedWords = regExp.exec(str);
    let newStr = `${matchedWords[2]}, ${matchedWords[1]}`
    console.log(newStr);
}
change('Java Script');

// task 5

function checkCard(number) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regExp.test(number);
}
let card = '9999-9999-9999-9999';
console.log(`The card ${card} is ok: ${checkCard(card)}`);

// task 6

function checkEmail(email) {
    let regExp = /^[a-zA-Z0-9]\w+-{0,1}\w+@[a-zA-Z]+\.[a-zA-Z]+$/;
    let result = regExp.test(email);
    if (result) {
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');

// task 7

function checkLogin(login) {
    let regExp = /^[a-zA-Z][a-zA-Z0-9\.]{1,9}$/;
    let result = regExp.test(login);
    console.log(result);
    let regExpNumbers = /(\d+\.\d+)|(\d+)/g;
    let matched = login.match(regExpNumbers)
    console.log(matched.join(', '));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
