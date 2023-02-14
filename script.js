/* Declare variables below to save the different sections (divs) of your story*/
let left_door = document.querySelector(".left-door");

let optionOneScreen = document.querySelector(".option-one-screen");
optionOneScreen.style = "display:none";

let optionOneEnd = document.querySelector(".option-one-end");
let title= document.querySelector(".title");
left_door.onclick = function() {
    optionOneScreen.style = "display:block";
    optionOneEnd.style = "display:block";
    title.innerHTML="Lets Play";
};

let right_door = document.querySelector(".right-door");
let optionTwoScreen = document.querySelector(".option-two-screen");
optionTwoScreen.style = "display:none";
let optionTwoEnd = document.querySelector(".option-two-end"); right_door.onclick = function() {
    optionTwoScreen.style = "display:block";
    optionTwoEnd.style = "display:block";
    title.innerHTML="Lets Play";
};

// let optionOneEnd = document.querySelector
// (".option-one-end");
// optionOneEnd.style = "display:none";

// let optionTwoEnd = document.querySelector
// (".option-two-end");
// optionTwoEnd.style = "display:none";








/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/