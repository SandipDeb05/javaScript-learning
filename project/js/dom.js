console.log(window);
// ====================================== single element selectors

const form = document.getElementById("my-form"); // select the html content by id and store it in the form constant 
const forms = document.querySelector("#my-form"); // id select by # & class by .
console.log(form);
console.log(forms);

// ======================================== multiple element selectors

const allFrom = document.querySelectorAll(".item"); // gives a nodeList similar like arrayList
console.log(allFrom);

const classFrom = document.getElementsByClassName("item");
console.log(classFrom); // gives a HTMLCollection --> can't use array methods
const tagFrom = document.getElementsByTagName("li");
console.log(tagFrom);

// ---------------- loop through
const items = document.querySelectorAll('.item');
items.forEach((e)=>console.log(e));

//========================================== manupulation
const ul = document.querySelector(".items");
// ul.remove(); // remove the elements
// ul.lastElementChild.remove() // remove the last element 
ul.firstElementChild.textContent = "hello"; // select the first el & change the content
ul.children[1].innerText = "sandip"; // children can be select by indexs (NodeList)
ul.lastElementChild.innerHTML = "<h1>hollaa</h1>" ; // you can add html 

const btn = document.querySelector('.btn');
btn.style.background = "purple"; // manuplate the style

//-------------------------- events
const newBtn = document.querySelector(".btn");
btn.addEventListener('click',(e)=>{ // click event, etc
    e.preventDefault(); // prevent the default beheviour --> like sublit button
    console.log("click");
    console.log(e.target); // gives the elemet is on
    console.log(e.target.className); // gives the class name 
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark"); // add a class name where css is overright
    document.querySelector(".items").lastElementChild.innerHTML = "<h2>last element child</h2>";
})

