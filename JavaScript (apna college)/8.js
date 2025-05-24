let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a =25;
    a--;
    console.log(a);


}

let box = document.querySelector("#box");

box.onmouseover = () => {
    console.log("you are on the BOX");
}

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = (evt) => {
    console.log("btn2 CLICKED");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
    console.log(evt.type);

}

//EVENT LISTENER
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", (evnt) => {
    console.log(evnt.target);
    console.log(evnt.type);
    console.log("Event Btn clicked!! , HANDLER 1" );
    
});

btn3.addEventListener("click", () => {
    console.log("Event Btn clicked!! , HANDLER 2 ");
});


let handler3 = () => 
    console.log("Event Btn clicked!! , HANDLER 3333 ");

btn3.addEventListener("click" , handler3);



btn3.addEventListener("click", handler3);


btn3.addEventListener("click", () => {
    console.log("Event Btn clicked!! , HANDLER 4");
});
btn3.removeEventListener("click" ,handler3);

//PRACTICE Q1 

let body = document.querySelector("body");
let mBtn1 = document.querySelector("#mode1");
let mBtn2 = document.querySelector("#mode2");

let dMode = () => {
    body.style.backgroundColor = "black";
}


mBtn1.addEventListener("click" , dMode);

//  PRACTICE Q1   light mode


let lMode = () => {
    body.style.backgroundColor = "white";
}
mBtn2.addEventListener("click" , lMode);
//--------------------------------------------------------------

//  PRACTICE Q1   Another way

let MODE = document.querySelector("#MODE");
let m = "light";


MODE.addEventListener("click" , () => {
     if(m==="light"){
        m="dark";
    body.style.backgroundColor = "black";

    
}
else {
    m="light";
    body.style.backgroundColor = "white";
}
    console.log(m);

});
//_____________________________________________________________

let newBtn = document.querySelector("#newBtn");
let y ="light";
newBtn.addEventListener("click", ()=>{
    if(y==="light"){
        y="dark";
        body.style.backgroundColor = "black";

    }
    else {
        y="light";
        body.style.backgroundColor = "grey";
    };

})

//___________________________________________________________
newBtn2 = document.querySelector("#newBtn2")
newBtn2.addEventListener("click", ()=>{
    if(y==="light"){
        y="dark";
        body.classList.add("DARK");
        document.querySelector("body").classList.remove("LIGHT");



    }
    else {
        y="light";
        document.querySelector("body").classList.add("LIGHT");
        body.classList.remove("DARK");

    };

})                                                  

                             


