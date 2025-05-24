let heroes = ["iron man" , "hulk" ,"ant-man", "batman","thor", "spider-man"];
let marks = [97,82,75,64,36];
console.log(marks.length);
console.log(heroes);
console.log(heroes[4]);
console.log(marks[2]);
console.log(marks);
console.log(marks[3]);
marks[3] = 90;
console.log(marks[3]);
console.log(marks);
//FOR LOOP
for (let idx=0; idx<heroes.length ; idx++){
    console.log(heroes[idx]);
}
//FOR OF LOOP
for(let i of heroes){
    console.log(i);
}

let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let j of cities){
    console.log(j);
    console.log(j.toUpperCase());

}
//Practice Q
let mark = [85,97,44,37,76,60];

let sum = 0;
for (let i of mark){
    sum= sum+i;
}
let avg = sum / mark.length;
console.log(`the average score is ${avg}`);

//PRACTICE Q 2
let items = [250,645,300,900,50];
for (let i =0 ;i < items.length ; i++){
    let offer = items[i] / 10;
    items[i] = items[i]-offer;
    console.log(`${offer}`);//using this line to understand the loop
}
console.log(items);

//ARRAY METHODSc
//PUSH to add items in the last
let foodItems =["potato", "apple","litchi","tomato"];
foodItems.push("chips");
foodItems.push("burger", "paneer");
console.log(`${foodItems}`);
console.log(foodItems);
//POP to delete last item
let newfoodItems = foodItems.pop();
console.log(`${newfoodItems}`);
console.log(`${foodItems}`);

//toString

console.log(foodItems);
console.log(foodItems.toString());

//Concat
console.log(foodItems.concat(mark));
//Q
let marvelHeroes = ["thor" ,"spiderman" , "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["krrish","g.one"];
let hero =marvelHeroes.concat(dcHeroes);
let allHero = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(marvelHeroes);
console.log(dcHeroes);
console.log(hero);
console.log(allHero);
//SHIFT 
console.log(marvelHeroes.shift()); //deleted the first item 
console.log(marvelHeroes); //after deletion
// UNSHIFT
 marvelHeroes.unshift("antman");
console.log(marvelHeroes);

//SLICE Method

console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));

//SPLICE Method

let arr= [1,2,3,4,5,6,7];
arr.splice(2,0,3455,222);
console.log(arr);
arr.splice(2,3);
console.log(arr);

//ADD element
arr.splice(2,0,101);
console.log(arr);

//DELETE Element
arr.splice(2,3);
console.log(arr);

//Replace element
arr.splice(2,3,101);
console.log(arr);

//DELETE element 2
arr.splice(2)
console.log(arr);

//Practice Q

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies); //SHIFT Method

companies.splice(1,1,"Ola"); 
console.log(companies); //Splice Method

companies.push("Amazon");
console.log(companies); //Push Method

