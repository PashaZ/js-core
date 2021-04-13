// task 1

document.getElementById('test').innerHTML = "Last";
document.querySelector("#test").innerHTML = "Last";


// task2

document.querySelector(".image").src = "../img/cat.jpg";
alert(document.querySelector(".image").src);

// task3

let parEl = document.querySelectorAll('div>p');

for( let i = 0; i < parEl.length; i++){
 console.log(`Selector text ${i} : ${parEl[i].innerHTML} ` )   
}

// task4

let ulEl = document.querySelectorAll('#list  li')
let ulEl2 = document.getElementById('list');

let first = ulEl2.firstElementChild;
let second = ulEl2.lastElementChild;
let third = first.nextElementSibling;
let fourth = ulEl2.lastElementChild.previousElementSibling ;
let fifth = fourth.previousElementSibling;

alert(`${first.innerHTML},${second.innerHTML},${third.innerHTML},
${fourth.innerHTML},${fifth.innerHTML}` );

alert(`${ulEl[0].innerHTML}, ${ulEl[4].innerHTML}, ${ulEl[1].innerHTML},
 ${ulEl[3].innerHTML}, ${ulEl[2].innerHTML}`)


// task5

let headerEl = document.querySelector('h1');
let myDiv = document.querySelectorAll('#myDiv p');
let span = document.querySelector('span');

headerEl.style.backgroundColor = "olive";

myDiv[0].style.fontWeight = 'bold';
myDiv[1].style.color = 'red';
myDiv[2].style.textDecoration = 'underline';
myDiv[3].style.fontStyle = 'italic';

span.style.display = 'none';

document.getElementById('myList').style.cssText = 'display: flex; list-style:none;'


// task 6

input1New = prompt("First new input", "");
input2New = prompt("Second new input", "");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.value = input1New;
input2.value = input2New;

copy1 = input1.value;
input1.value = input2.value;
input2.value = copy1;


// task 7

let main = document.createElement("main");
main.className = "mainClass check item";
document.body.appendChild(main);

let div = document.createElement("div");
div.id = "myDiv";
main.appendChild(div);

let p = document.createElement("p");
p.innerHTML = "First paragraph";
div.appendChild(p);
console.log(p.innerHTML);


