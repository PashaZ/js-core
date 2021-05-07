// task1

function calcRectangleArea(width, height){
  if (Number(width) && Number(height)){
let square = width * height ;
console.log(square);
  }
  else {
    throw new Error("нечислове значення");
  }
}
try {
  calcRectangleArea(2, 5);
}
 catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
}



// task2

function checkAge() {

  let age = prompt("vvedit svij vik");
  if (age.length == 0) {
    throw new Error("The field is empty! Please enter your age");
  }
  else {
    let ageNew = Number(age);
    if (ageNew < 14) {
      throw new Error("вік юзера менше 14 років");
    }
    else if (typeof ageNew == "number" && ageNew >= 14) {
      console.log("dostup dozvoleno");
    }
    else {
      throw new Error("нечислове значення");
    }
  }
}
  try {
    checkAge();
  }
  catch (ex) {
    console.log(ex.name);
    console.log(ex.message);
  }


// task3

class MonthException {
  message = "MonthException";
  monthArr = [ "January","February", "March", "April",
  "May","June","July","August", "September","October",
  "November","December",];
  constructor(constr) {
    this.message;
    this.monthArr[constr];
  }
}
function showMonth(month) {
  let m = new MonthException();
  if (month < 1 || month > 12) {
    throw new Error(m.message + " Incorect month number");
  } else {
    console.log(m.monthArr[month - 1]);
  }
}
try {
  showMonth(8);
} catch (ex) {
  console.log(ex.message);
}

// task4

function showUser(id) {
  if (id < 0) {
    throw error();
  }
    return {id: id};
}
let ids = [7, -12, 44, 22, 50]

function showUsers(ids) {
  let correct = [];

  console.log(ids);
ids.forEach(function (id) {
    try {

      let person = showUser(id);
      correct.push(person);
    }
    catch (error) {
      console.log(error + " ID must not be negetive: " + id);
    }
  }
  );
  console.log(correct);
}

showUsers(ids);
