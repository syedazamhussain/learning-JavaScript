//--(LEVEL 1 ONE TO LEVEL 6 SIX TK HAI)--------------------------

//---------------ONE-1-QUESTION-----------------------------------------
{ console.log(`FIRST QUESTION`) }
for (let a = 1; a <= 6; a++) {
    if (a % 2 === 0) {
        console.log(a, "EVEN");
    }
    else if (a % 2 !== 0) {
        console.log(`${a} ODD`);

    }
}
//-IF-ELSE-CONDITION-with-FOR-LOOP--------------------------------
for (let a = 1; a <= 6; a++) {
    let out = document.getElementById("output");
    if (a % 2 === 0) {
        console.log(a, "EVEN");
    }
    else {
        console.log(`${a} ODD`);

    }
}
//----------TERNARY----------------------------------
for (let a = 1; a <= 5; a++) {
    let result = a % 2 === 0 ? "EVEN" : "ODD";
    console.log(`${result} ${a}`);
}
//-------------TWO-2-QUESTION----------------------------------
{ console.log(`SECOND QUESTION`); }
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} Buzz`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }
    else {
        console.log(i);
    }
}
//-------------THREE-3-QUESTION----------------------------------

let numbers = [12, 45, 67, 23, 90, 34, 11, 50, 99, 100];

for (let a = 0; a < numbers.length; a++) {
    let num = numbers[a];
    if (num % 2 === 0) {
        console.log(`${num} (even)`);
    }
    else {
        console.log(`${num} (odd)`);
    }
}
//--------PRACTICE-------------------------------------
let value = [12, 45, 67, 23, 90, 34, 11, 50, 99, 100];

for (let i = 0; i < value.length; i++) {
    let val = value[i];
    if (val % 2 === 0) {
        console.log("EVEN", val);
    }
    else {
        console.log("ODD", val);
    }
}
console.log(`-----------------------------------------------------------------------------------------`);
//-------------FOUR-4-QUESTION----------------------------------
let num = [5, 12, 8, 130, 44, 7, 90, 3, 55, 102];
let filter = [];


for (let a = 0; a < num.length; a++) {
    let value = num[a];
    if (value > 50) {
        filter.push(value);
    }
}
console.log("Original", num);
console.log("Filtered", filter);
//--------------EXAMPLE-2-----------------------

let nums = [12, 45, 67, 23, 90, 34, 11, 50, 99, 100];
let even = [];
let odd = [];
for (let a = 0; a < nums.length; a++) {
    let val = nums[a];
    if (val % 2 === 0) {
        even.push(val);
    }
    else {
        odd.push(val);
    }
}
console.log("Original", nums);
console.log("EVEN", even);
console.log("ODD", odd);

console.log("______________________________________________________")
//-------------FIVE-5-QUESTION----------------------------------
/*
let number = [];
for (let i = 0; i < 5; i++) {
    let num = rompt("Enter numbers 5 Times:");
    num = Number(num);
    number.push(num);
}

let filtered = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] > 10) {
        filtered.push(number[i]);
    }
}
console.log("Original:", number);
console.log("Filtered (>10):", filtered);

let pin = [];
for(let a =0; a <5 ;a++){
    let userPin = prompt("Enter pin of all members");
    userPin = Number(userPin);
    pin.push(userPin);
}
let filterPin = [];
for(let a =0; a <pin.length; a++){
    if(pin[a]>10){
        filterPin.push(pin[a]);
    }
}
console.log(pin);
console.log(filterPin);

//----------------SIX-6-QUESTION----------------------------------
let fEmployee = [];
let employees = [
    { name: "Amit", salary: 25000 },
    { name: "Rahul", salary: 40000 },
    { name: "Priya", salary: 18000 },
    { name: "Sneha", salary: 50000 },
    { name: "Vikas", salary: 22000 }

];
for (let a = 0; a < employees.length; a++) {
    if (employees[a].salary > 25000) {
        fEmployee.push(employees[a]);
    }
}
console.log("Filtered Employees :- ", fEmployee);
console.log();
//------IMPORTANT---------SIX-6-QUESTION--with-FILTER-------------------------

let filEmployee = employees.filter(emp => emp.salary > 25000);
let lEmployee = filEmployee.map(em => em.name.toUpperCase());

console.log("Filtered Employess with Filter :-", filEmployee, lEmployee);

//------IMPORTANT---------SIX-6-QUESTION--with-FILTER-MAp-and-REDUCE----------------------

let pEmployee = employees.filter(i => i.salary > 25000);               //FILTER
let uEmployee = pEmployee.map(a => a.name.toUpperCase());            //MAP
let aEmployee = pEmployee.reduce((o, p) => o + p.salary, 0);  //REDUCE

console.log("FILTERED, MAP, REDUCE", pEmployee);
console.log("Upper Case", uEmployee);
console.log("Total Salary", aEmployee);

