let DIV = document.querySelector("div");
console.log(DIV);
let aa = DIV.getAttribute("id"); //use to return attribute
console.log(aa);

let AA = document.querySelector("p");
console.log(AA);

let bb = AA.getAttribute("class")
console.log(bb);

let cc = AA.setAttribute("class","class32")
console.log(AA)
//STYLE
let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.fontSize = "23px";



//INSERT Element

let newBtn = document.createElement("button");
let newBtn2 = document.createElement("button");
newBtn2.innerText = "Done";

newBtn.innerText = "Click Me!";

console.log(newBtn);

//Append

let nDiv = document.querySelector("div");
div.after(newBtn);
let tDiv = document.querySelectorAll("div");
console.log(tDiv[1]);

tDiv[1].append(newBtn2);

//-------------------------------------------------

let nHead = document.createElement("h1");
nHead.innerHTML = "<i> I am here!!! </i>";
document.querySelector("body").append(nHead);
//=====================================

let newDiv = document.querySelector(".newDiv")
//nHead.remove();
//newDiv.remove();
//nHead.remove();
//nDiv.remove();
//newBtn.remove();
//div.remove();
//DIV.remove();
//AA.remove();

//Practice Q 1

let pBtn = document.createElement("button");
pBtn.innerText = " Click Me!!";
pBtn.style.backgroundColor = "red";
pBtn.style.color = "white";

document.querySelector("body").prepend(pBtn);

//Practice Q 2
let nPara = document.querySelector(".para");
let oPara = document.querySelector(".pQst");
oPara.append(nPara);
//
let aPara = document.querySelector(".para");
console.log(aPara.classList);
aPara.classList.add("nClass");
