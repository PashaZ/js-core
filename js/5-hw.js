// task1

function propsCount(currentObject) {
    console.log(Object.keys(currentObject).length);
};

let currentObject = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    kjkf: 5
};

propsCount(currentObject);

task2

let firstObject = {

    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    payment: 7000,
    certification: "yes"
};

function showProps(obj) {

    let value = [];
    for (let key in obj) {
        value.push(obj[key]);
    }

    console.log(value);
    console.log(Object.keys(obj));

}

showProps(firstObject);


// task 3


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name + this.surname);
    }

}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return (this.surname + this.name + midleName);
    }

    showCourse() {
        let year = new Date().getFullYear();
        let currentCourse = year - this.year;
        if (currentCourse > 6) {
            currentCourse = "Graduated";
        }
        return currentCourse;
    }
}

let stud1 = new Student("Pavlo ", "Zakernychnyy ", 2010)
console.log(stud1.showFullName('Oleksandrovych')); 
console.log('Current course: ' + stud1.showCourse()); 



// task4



console.log('Task 4');

const employee = {};

function addWorker() {
    let countEmployee = 0;

    class Worker {
        #experience = 1.2;

        constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
        }

        salary() {
            let salary = this.dayRate * this.workingDays;
            return salary;
        }

        showSalary() {
            console.log(`${this.fullName} salary: ${this.salary()}`);
        }

        salaryWithExperience() {
            let salaryExp = this.dayRate * this.workingDays * this.#experience;
            return salaryExp;
        }

        showSalaryWithExperience() {
            console.log(`${this.fullName} salary: ${this.salaryWithExperience()}`);
        }

        get showExperience() {
            return this.#experience;
        }

        set setExperience(newExp) {
            this.#experience = newExp;
        }
    }

    return function (fullName, dayRate, workingDays) {
        countEmployee++;

        employee.length = countEmployee;

        employee[`worker${countEmployee}`] = new Worker(
            fullName,
            dayRate,
            workingDays
        );

    };

}

const newWorker = addWorker();

newWorker('John Johnson', 20, 23);
newWorker('Tom Tomson', 48, 22);
newWorker('Andy Ander', 29, 23);

console.log(employee.worker1.fullName);
employee.worker1.showSalary();
console.log('New experience: ' + employee.worker1.showExperience);
employee.worker1.showSalaryWithExperience();
employee.worker1.setExperience = 1.5;
console.log('New experience: ' + employee.worker1.showExperience);
employee.worker1.showSalaryWithExperience();

console.log(employee.worker2.fullName);
employee.worker2.showSalary();
console.log('New experience: ' + employee.worker2.showExperience);
employee.worker2.showSalaryWithExperience();
employee.worker2.setExperience = 1.5;
console.log('New experience: ' + employee.worker2.showExperience);
employee.worker2.showSalaryWithExperience();

console.log(employee.worker3.fullName);
employee.worker3.showSalary();
console.log('New experience: ' + employee.worker3.showExperience);
employee.worker3.showSalaryWithExperience();
employee.worker3.setExperience = 1.5;
console.log('New experience: ' + employee.worker3.showExperience);
employee.worker3.showSalaryWithExperience();

function sortSalary(obj) {
    const arr = [];

    for (let i = 1; i <= obj.length; i++) {
        let j = obj[`worker${i}`];
        arr.push(j);
    }

    arr.sort((a, b) => {
        return a.salaryWithExperience() - b.salaryWithExperience();
    });

    for (let k = 0; k < arr.length; k++) {
        if (k === 0) {
            console.log(`Sorted salary:
  ${arr[k].fullName}: ${arr[k].salaryWithExperience()}`);
        } else {
            console.log(`${arr[k].fullName}: ${arr[k].salaryWithExperience()}`);
        }
    }

    return arr;
}
sortSalary(employee);



// task 5


class GeometricFigure {
    getArea() {
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height * 0.5;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
function handleFigures(figures) {
    let totalFigArea = 0;
    for (let i = 0; i < figures.length; i++) {
        let figure = figures[i];
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            totalFigArea += figure.getArea();
        }
    }
    return totalFigArea;
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

