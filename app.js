// let lins=document.querySelectorforAll("box.a");

// for(link of links){
//     link.style.color="purple";
// }

//practice Q1
let para1=document.createElement('p');
para1.innerText="Hey I'm red!:";
document.querySelector('body').append(para1);
 
para1.classList.add('red');

//practice Q2
let heading=document.createElement('h3');
heading.innerText="Hey I'm blue h3!:";
document.querySelector('body').append(heading);

heading.classList.add('blue');

//practice Q3

let div=document.createElement('div');
document.querySelector('body').append(div);
div.classList.add('border');

let h1=document.createElement('h1');
h1.innerText="i'm in div!:";
div.append(h1);

let para2=document.createElement('p');
para2.innerText="me too!:";
div.append(para2);

//practice 24

//Q1 Qs1. Create a new input and button element on the page using JavaScript only. Set the
//text of button to “Click me”;

let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Clickme";
document.querySelector("body").append(input);
document.querySelector("body").append(button);


// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

let hnew=document.createElement("h1");
hnew.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(hnew);

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold.
let pnew=document.createElement("p");
pnew.innerHTML="Apna College<b> Delta </b> Practice";
document.querySelector("body").append(pnew);