for (let a = 0; a <= 4 ; a++){
    console.log("Apna College");
}

//Practice
let sum=0;
for(let i =1 ; i<=5 ; i++){
    sum=sum+i;
}
console.log("Sum =" , sum);
console.log("-----------------------------------------------");

//PRACTICE 2 
// //FOR LOOP
let SUM=0;
for(let i =1 ; i<=5 ; i++){
    SUM=SUM+i;
    console.log("Sum =" , SUM);
}
//WHILE LOOP
let j =1;
while(j<=5){
    console.log(j)
    j++;
}
//DO-WHILE LOOP

console.log("-----------------------------------------------");


let k =1;
do{
    console.log(k);
    k++;
} 
while(k<=5);
//FOR-OF LOOP
let str = "JavaScript";

for(let i of str){
    console.log(i);
}

//FOR-OF LOOP Q 2
let STR = "Apna COllege";
let SIZE= 0 ;

for(let j of STR){
    console.log(j);
    SIZE++;
}
console.log("Size is=" ,SIZE);

//FOR IN 
let student = {
    name:"Azam",
    age : 23,
    grade : 9.6,
    isPass : true,
};
for(let key in student ){
    console.log(key , student[key]
    );

}
//PRACTICE Q 1
for(let NUM = 1; NUM <=40 ; NUM++)
    {
        if(NUM%2===0)
    console.log(NUM);

}

/*PRACTICE

let B = prompt("Guess the number  , HINT: Number is divisible by 2");
let C = "10" ;
if( B === C){
    console.log(B)
    console.log("You are right my HERO");
}
else{
    console.log("Oh! oh! Try AGAIN dear");
}
*/
//PRACTICE  Second WAY

/*let Y = "50"; //gameNum
let X =  prompt("Guess the number"); //userNum
while(X!==Y){
   X = prompt("You entered wrong number , Guess again" );
}
console.log("Congrats you win the game");*/


//STRINGs
let NAME = "Syed Azam Hussain";
console.log(NAME.length);
console.log(NAME[16]);
console.log(NAME);

//Tempelate Literals

let sentence = `This is Tempelate`;
console.log(sentence);
console.log(typeof sentence);

//Practical 

let obj = {
    item : "pen",
    price: 10
};
console.log("Price of" , obj.item , "is" , obj.price,"Rs");
let output = `Price of ${obj.item} is ${obj.price} Rs`;
console.log(output);

//===
let id = `the value of these no.s are ${1+2+3+1}`;
console.log(id);
//===================
let s= "Apna \tCollege";
let t= "Apna \nCollege";
let u = "Apna College"
console.log(s);
console.log(t);
console.log("Apna \t College");
console.log("Apna \nCollege");
console.log(t.length);
console.log(s.length);
console.log(u.length);

//String Methods
console.log(t.toUpperCase());
console.log(t.toLowerCase());

//TRIM
let v ="   hello good morning   ";
console.log(v.trim()); //removes whitespaces starting and ending spaces
//SLICE
let w = "Achit Nagar Soladevanahalli"
console.log(w.slice(5,11));
console.log(w.slice(5));
//CONCAT
console.log(u.concat(w));
console.log(w.slice(5,11));
console.log(w+u);
//REplace
console.log(w.replace("A","Ta "));
let n = "helolo"
console.log(n.replaceAll("lo" , "in"));

//CharAt

console.log(n.charAt(3));

//Practice Question

let uName= prompt("Enter your full name without spaces");
let userName= "@"+uName+uName.length;
console.log("@",uName,uName.length );
console.log("@"+uName+uName.length);
console.log(userName);







