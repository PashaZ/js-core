// task1
let array = [2, 3, 4, 5];
let mult = 1;
for (let i = 0; i < array.length; i+=1) {
    mult *= array[i];

}
console.log(mult);

// другий спосіб

let mult2 = 1;
let i = 0;
while (i < array.length) {
    mult2 *= array[i];
    i+=1 ;
}
console.log(mult2);


// task2

function numbers() {
    for (let i = 1; i <= 15; i++) {
        if (i % 2 == 0) {
            console.log(i + "  is even");
        }
        else {
            console.log(i + "  is odd");
        }
    }
}
numbers();


// task3 

let min = 1;
let max = 500;
let k = [];
for (let i = 0; i < 5; i++) {
    k.push(randArray(min, max));
}
console.log("randArray " + k);

function randArray(min, max) {
    let rand = M2ath.round((min - 0.5 + Math.random() * (max - min + 1)));
    return rand;
}


// task4

function raiseToDegree(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}
let a = +prompt("введіть число");
let b = +prompt("введіть степінь");
if (b < 1) {
    console.log(`Степінь ${b} не підтримується, введіть ціле додатнє число`);
} else {
    console.log(raiseToDegree(a, b));
}


// task5

let min = Number.MAX_VALUE;
function findMin() {

    for (let i = 0; i < arguments.length; i += 1) {

        let args = arguments[i];
        if (args < min) {
            min = args;
        }
    }
    console.log(min);
}
findMin(10, 2, 6, 8);



// task 6

let arr = [1, 2, 3, 5];

function findUnique(arr) {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let current = arr[i];

        for (let k = i + 1; k < arr.length; k += 1) {
            let element = arr[k];

            if (current !== element) {
                console.log(true);
            }
            else {
                console.log(false + ` - елемент ${current} повторюється`);
            }
        }
    }
}
findUnique(arr);

// task7

let arr = [3, 4, 10, -5];
let quantity = 3;
let newLastElement;

function lastElement(arr, quantity) {
    newLastElement = arr.slice((-quantity));
    let result = newLastElement;
    console.log(`Last element ( ${result})`);
}

lastElement(arr, quantity);


// task8


function CapitalizeString(str) {
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    let result = arr.join(" ");
    console.log(result);
}

CapitalizeString("i love java script");







