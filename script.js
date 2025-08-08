//Not-Taking -An-input-From------IF-CONDITION----------------
const age1 = 12;
const age2 = 23;
if (age1 < 18) {
    console.log("Not Eligible for Vote");
}
if (age2 >= 18) {
    console.log("Eligible For Vote");

}

//Take-Input-from-Users------- If-ELSE-CONDITION--------------------------
function check() {
    let a = document.getElementById("inputAge").value;

    if (a >= 18) {
        console.log("You Can VOTE");
        alert("You can VOTE👍 ");
    }
    else {
        console.log("Sorry, you are not eligible");
        alert("Sorry, you are not eligible ☹️");
    }
}
//Take-Input-from-Users---IF-ELSE-Condition-------------------------------
function marks() {
    let m = document.getElementById("userMarks").value;
    if (m <= 49) {
        console.log("You are Failed");
        alert("You are Failed⚠️")
    }
    else {
        console.log("You are Passed");
        alert("You are Passed✅")
    }
}
//------------------------ELSE-IF-CONDITION--------------------------
function grade() {
    let n = document.getElementById("num").value;
    if(n> 100 || n <0 ){
         alert("Enter A valid Marks 😒😒");
    }
    else if (n <= 20) {
        alert("You are FAILED ⚠️");
    }
    else if (n <= 40) {
        alert("Grade :- D");
    }
    else if (n <= 60) {
        alert("Grade :- C");
    }
    else if (n <= 80) {
        alert("Grade :- B");
    }
    else if (n >= 80) {
        alert("CONGRATULATIONS You Belongs from 'A' Grade 🎉🎉");
    }
   
    else {
        alert("Enter a valid input");

    }
}

