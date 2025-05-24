 //console works us u print
let u =5;
 let b =2;
 console.log("u+b=" , u+b);
 console.log("u+b=" , u+b);

 console.log("u+b=" , u+b);
 console.log("u+b=" , u**b);
 console.log("u+b=" , u%b);

 //UNARY OperATOR
 let c=2;
 c=c-1 //decremet
 let d=5;
 d++; //increment
let e =12;
++e;
 console.log(c);
 console.log(d);
 console.log(e);


let a =5;
a +=4; 
console.log(a);
a -=9; 
console.log(a);

a *=4; 
console.log(a);

a **=4; 
console.log(a);

a /=4; 
console.log(a);

a %=4; 
console.log(a);

//COMPARISON OPERATOR

let h =5;
let i=4;
console.log(h==i);
console.log(h>i);
console.log("h smaller than i",h<i);
console.log(h>=i);
console.log(h<=i);


console.log(h!=i);
let j =2;
let k=2;
console.log(j!=k);
console.log(j==k);

let l=4;
let m="4";
console.log(l===m);
console.log(l==m);

//LOGICAL OPERATORS

let n =4;
let o =2;

let cond1 = n>o;
let cond2 = o<n;
console.log("Logical operator ", cond1 && cond2);
console.log("Logical operator ", cond1 || cond2);
console.log("Logical operator ", !(cond1 && cond2));


//CONDITIONAL STATEMENT

//IF

let age =25;
if(age>18)
{
    console.log("You can vote");
}

//IF ELSE

let mode = "dark mode"
let color;
if(mode == "dark mode"){
    console.log(color= "Black"); 
}
else{
   console.log(color= "White"); 
}

//IF ELSE

let A = 56;
if (A % 2 === 0){
    console.log('Even Number' , A);
}
else{
    console.log("Odd Number" , A);
}

//else if Statement

let Theme = "dark";
let Color;
if ( Theme  === "dark"){
    Color=" BLACK";
}
else if (Theme === "light" ){
    Color = "White";

}
else if ( Theme === "blue"){
    Color = "Blue";
}
else {
    Color = "Yellow";
}
console.log(Color);

//Ternary Operator or compact if else condition

let AGE = 25;
let result = AGE >= 18 ?  "adult" : "not adult";
console.log(result);

//PRACTICE Q 1

/*let NUM = prompt("Enter number to check its multiple of 5 or NOT");

if(NUM % 5 === 0 )
{
    console.log(NUM,"Yes! Its a multiple of 5")
}


else{
    console.log(NUM,"No! No! its not a Multiple of 5")
}*/
//PRACTICE Q 2

let score = 62;
let grade;
if(score >= 90 && score <=100){
    grade ="A" ;
}
else if(score >= 70 && score<=89 ){
    grade ="B" ;
}
else if(score >= 60 && score <=69){
    grade ="C" ;
}
else if(score >= 50 && score <=59){
    grade ="D" ;
}

else{
    grade ="F" ;
}
console.log("Grade is:-", grade);





















