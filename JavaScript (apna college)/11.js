//PROTOTYPE____________________________________
let student = {
    fullName: "Syed Azam",
    marks :94.4,
    printMarks : function(){
        console.log("Marks=" ,this.marks);
    }
};
let abc = {
    fullName : "azam",
    age: 22,
    function (){
        console.log("hello world");
    }
};
let employee = {

    name:"Azam",
    calcTax(){
        console.log("Tax rate is 10%");
    }
};

let karanArjun = {
    salary : 50000,
}

abc.__proto__ = student; //set Prototype type 1
Object.setPrototypeOf(karanArjun, employee);//set Prototype type 2
//CLASS______________________________________________

class ToyotaCar {

    constructor(mileage) {
        console.log("Creating a New Object");
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand ;
    }
    setPrice(price) {
        this.PRICE = price ;
    }
};
let fortuner = new ToyotaCar(10);
console.log(fortuner);
fortuner.setBrand("FORTUNER");
let lexus = new ToyotaCar();
lexus.setBrand("LEXUS");
lexus.setPrice("PrIcE");

let obj = {
    name:"Azam",
    age : 22,
    marks : 99
};
//console.log(typeof(ToyotaCar));

let f = [12,"Apple" , 44.3];
//console.log(Array.isArray(f));
//console.log(typeof(f));

//INHERITANCE____________________________________________________________

class Oneplus {
     phone() {
        console.log("NORD 2 model");
     };
}

class Apple extends Oneplus {
     
}

let brand = new Apple();
//________________________________________________
class Person {
    constructor(){
        this.speces = "homo sapiens"
    }
    eat(){
        console.log("eat food");

    }
    sleep(){
        console.log("sleeping");
    }
    work(){
        console.log("solve problems , build something");
    }
}
class Doctor extends Person {
    work(){
        console.log("treat patients");
    }
}
class Engineer extends Person {
    constructor(name , gender){
        super(); // to invoke parent class constructor 
        this.Name = name;
        this.GENDER = gender;
    }    
    work(){
       // super.eat();
        console.log("solve problems , build something");
    }
}

let engg = new Engineer("AZAM HUSSAIN","female");
//Practice Q 1
let data = "Secret information"
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =" ,data);
    }

}

let student1 = new User("syed", "syed@gmail.com");
let student2 = new User("azam","azam@gmail.com");
let teacher1 = new User("azam","azam@gmail.com");

//Practice Q 2

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let admin1 = new Admin("admin","admin@gmail.com");

//Error Handling________________________________________________
let a = 5;
let b =4;
console.log("a=", a);
console.log("b=", b);
console.log("a+b", a+b);
console.log("a-b", a-b);
console.log("a*b", a*b);
console.log("a/b", a/b);
console.log("a+b", a+b);
console.log("a==b", a);

try{
    console.log("a", a+c);
}
catch(err){ console.log("error is here=",err);

}
console.log("a=", a);
console.log("a=", a);
console.log("a=", a);

