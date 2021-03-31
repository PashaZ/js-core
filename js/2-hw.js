// task1

let x = 1;
let y = 2;

let res1 = "1" + 2;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 =(x < y) + "2"; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y ;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "x" / y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


 // task2

let value = prompt("Введіть число");

if ((value % 2)== 0) 
{console.log("число є парним");}
else if (value % 7 == 0)
{console.log("число кратне 7");}
else {
    console.log("введене число не відповідає перевірці")
}

// // task3

const arr = [] ;
arr[0] = 1 ;
arr[1] = " У другий елемент масиву запишіть будь-який рядок; " ;
arr[2] = (1 < 2) ;
arr[3] = null ;
console.log(arr.length);

let five = prompt("Введіть будь-яке значення ");
arr[4] = five ;
console.log(arr[4]) ;

arr.splice(0 , 1 ) ;
console.log(arr) ;


// task4

let cities = ["Rome", "Lviv", "Warsaw"];
let cities1 = cities.join("*");

console.log(cities1);


 // task5

let isAdult = +prompt("Вам виповнилось 18 років? Введіть свій вік") ;
if (isAdult >= 18)
{
    console.log("Ви досягли повнолітнього віку")
}
else {
    console.log("Ви ще надто молоді")
}

// task6

let firstSide = +prompt("Введіть першу сторону трикутника");
if (isNaN(firstSide)) {
    alert("Incorrect data")

}
let secondSide = +prompt("Введіть другу сторону трикутника");
if (isNaN(secondSide)){
    alert("Incorrect data");
}
let thirdSide = +prompt("Введіть третю сторону трикутника");
if (isNaN(thirdSide)) {
    alert("Incorrect data");
}
// периметр/2
let p =(firstSide + secondSide + thirdSide) / 2 ;
let square = Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide));
console.log(square.toFixed(3)) ;

// перевірка на прямий кут
if (firstSide**2 == secondSide**2 + thirdSide**2)
{
    console.log("трикутник прямокутний") ;
}
else if
 (secondSide**2 == firstSide**2 + thirdSide**2)
{
    console.log("трикутник прямокутний") ;
}
else if
(thirdSide**2 == firstSide**2 + secondSide**2)
{
    console.log("трикутник прямокутний") ;
}
else 
   { console.log("трикутник не прямокутний") ; } 

// task7

let time1 = new Date();
let time = time1.getHours();

console.log(time);

if (time < 5 || time > 22) {
    console.log("Доброї ночі");
}
else if
    (time > 4 && time < 11) {
    console.log("Доброго ранку");
}
else if
    (time > 10 && time < 17) {
    console.log("Доброго дня");
}
else if
    (time > 16 && time < 23) {
    console.log("Доброго вечора");
}
// другий спосіб

switch (true) {
    case (time < 5 || time > 22):
        console.log("Доброї ночі");
        break;
    case (time > 4 && time < 11):
        console.log("Доброго ранку");
        break;
    case (time > 10 && time < 17):
        console.log("Доброго дня");
        break;
    case (time > 16 && time < 23):
        console.log("Доброго вечора");
        break;
    default:
        console.log("щось пішло не так");
}







