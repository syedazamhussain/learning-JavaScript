function myFunction(){
    console.log("Welcome to Universe");
    console.log("We are learning js");
}
myFunction();
//=====================================

function myFunction1(msg){
    console.log(msg);
}
myFunction1("Hello JavaScript");
//=====SUM FUNCTION==================================

function myFunction2(x, y){
    console.log(x + y);
}
myFunction2(2,3);

//=======================================
function sum (x , y){
    s = x - y;
    return s;

}
   sum(23,2);    
//===========================================
function sum1(x,y){
    console.log("Value =" , sum1=x*y);    
}
sum1(4,2);
//======================================
function myFunction3(){
    console.log("how are you?");
}
myFunction3();
//=============================================
function myFunction4(a,b){
    console.log("value of a and b =", a+b);
}
myFunction4(2,6);
//===========================================
function myFunction5 (a,b){
    return a*b;

}
console.log(myFunction5(3,5));
//ARROW Function 1

let mult = (a,b) =>console.log(a*b);

mult(2,5);
//Arrow Function 2

let add = (a,b,c) => {
    console.log(a+b+c);
};
add(30,10,3)  //Arrow Function 2

//Arrow Function

let myF = (a,b,c) => a+b+c;


//Practice Q Function
function abc (x,y) {
    console.log(x*y)
};
abc(4,2);   //Practice Q Function


//Practice Q Function
function aabb (x,y) {
    return x*y;
};


//Practice Q1
function countVowels(abc){
    let count = 0;
    for(let char of abc){
        if (
            char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"||
            char==="A"||
            char==="E"||
            char==="I"||
            char==="O"||
            char==="U"
        ) {
            count++;
        }
    }
    return count;
}
countVowels("Syed Azam Hussain") //gives input for output



//for Each Loop in Array

let arr = ["A","B","C","D"];
arr.forEach(function printVal(val) {
     console.log(val);
});
//======================================

let arra = [1,2,3,4,5];
arra.forEach(function printVal1(val1) {
     console.log(val1);
});
//FUNCTION =========================================

function addd(x){
    return x.toUpperCase();
};
console.log(addd("azam hussain"));

//FUNCTION =========================================
function rrr (e){
    return e.toLowerCase();
};
console.log(rrr("SYED AZAM HUSSAIN"));
//ARROW FUNCTION =========================================
let dd = (a,b) =>   a*b;

//Arrow function without input and parameter======================
let printI = () => console.log("Arrow function topics");
 
function vowelsCode (str){
    let vowels = 0;
    for(let a of str ){
        if (
            a ==="a"||
            a ==="e"||
            a ==="i"||
            a ==="o"||
            a ==="u"||
            a ==="A"||
            a ==="E"||
            a ==="I"||
            a ==="O"||
            a ==="U"
        )
        vowels++;
    }
return vowels;
};

//FOR Each Loop in Array

//Practice Q   1 way 
let nums = [2,3,4,5,6];
nums.forEach((nn,ind, arr) => {
    console.log(nn*nn, ind, arr); // ind = index
});

//Practice Q another way

let numbs = [22,4,86,43,29];

let calSqu = (nsq) => console.log(nsq*nsq);

numbs.forEach(calSqu)

//MAP Method

let mm = [67, 52, 39];
mm.map((vall) =>{ 
    console.log(vall); 
});
//

let nn = [22, 52, 39];
let newA = nn.map((valli) =>{ 
   return valli*2; 
});

console.log(newA);

//Filter Method Q 1
let array = [2,3,4,5,6,7,8];
let evenArray = array.filter( (val) => {
    return val % 2 ===0;
   // return val > 5;
});
console.log(evenArray);

//Reduce Method Q 1

let ARRAY  = [1,2,3,4];
let filterArray = ARRAY.reduce( (res, curr ) => {
    return res+curr;
});
console.log(filterArray);

//REDUCE Method Q 2
let mArray = [5,6,2,1,3,11,7];
let lArray = mArray.reduce ( (ress ,curre) => {
    return ress > curre ? ress : curre;

});
console.log("Largest value:-",lArray);

//FILTER Practise Q
let marks = [ 97,  64, 32, 49,  99,  96, 86];
let maxMarks = marks.filter((prv) => {
    return prv > 90;
});
console.log(maxMarks);

//Practise Question
let n  = prompt("Enter a number");
let userArray =  [];

for ( let i =1; i <= n ; i++) { 
    userArray[i-1] = i;
}
console.log(userArray);

 let SUm = userArray.reduce((prev, current) =>{
    return prev+current;
 });
 console.log("Sum",SUm);

 let factorial = userArray.reduce((prevv, cuur)=>{
    return prevv*cuur;
 });
 console.log("factorial=",factorial);


