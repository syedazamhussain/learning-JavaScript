//let aa = alert("Click here to Continue!!")
console.log("Hello!!");
window.console.log("Hello 222");
console.log(document.body);
console.dir(document.body);
console.dir(document.head);
//console.dir(document.body.childNodes[1]);
document.body.childNodes[3].innerText = "ABCDDEEFFGGHHIIJJKKLL";
document.getElementById("heading");
console.dir(heading);

let button = document.getElementById("myId");
console.dir(myId);

let HEADINGS = document.getElementsByClassName("myClass");
console.dir(HEADINGS);
console.log(HEADINGS);

let p = document.getElementsByTagName("p");
console.dir(p);

let firstpara = document.querySelector("p");
console.dir(firstpara);

let allPara = document.querySelectorAll("p");
console.dir(allPara);
document.querySelector("button");

let firstEl = document.querySelector("#myId");
console.dir(firstEl);
//returns TAG Name 
let xyz = document.querySelector(".myClass").tagName;
let xyzz = document.querySelector(".myClass").innerText;

console.dir(document.body.firstChild);

let chill = document.querySelector("div").children;
console.log(chill);

//inner Text

let div = document.querySelector("div");
console.log(div);
console.dir(div);

//PRACTICE Q

let pra =  document.querySelector("#pra");
console.dir(pra.innerText);

pra.innerText = pra.innerText + " from apna college";

//PRACTICE Q2
let idx = 1;
let divss = document.querySelectorAll(".box");
for(DIVSSS of divss){
    DIVSSS.innerText = `New unique value ${idx} `;
    idx++;
}



console.log(divss);
console.log(divss[0]);
divss[0].innerText = "NEW VALUE ADDED";


