//============================== LOOPS
//------------------------------ for
const todos = [
    {
        id:1,
        text:"do some meditation",
        isComplecated: true,
    },
    {
        id:2,
        text:"coding",
        isComplecated: false,
    },
    {
        id:3,
        text:"read books",
        isComplecated: false,
    }
];
//------------------------ loop through Arrays
for(let i=0; i<todos.length; i++){
    console.log("for loop "+todos[i]);
}
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}
//------------------------- while
let i=0;
while(i<todos.length){
    console.log("while loop "+todos[i]);
    i++;
}
//-----------------------------for of --> best way for arrays
for(let todo of todos){
    console.log("for of loop "+todo.id);
}
//================================= high order array
//forEach, map, filter
//----------------------------------- forEach
todos.forEach(function(todo){
    console.log("forEach loop "+todo.text);
});

//---------------------------------- map
const TodosText = todos.map((todo)=>{ // arrow function is used
    return todo.text;
})
console.log(TodosText); // gives an array of each items
// ---------------------------------- filter
const TodosCompleted = todos.filter((todo)=>{
    return todo.isComplecated === true;
})
console.log(TodosCompleted);

const TodosCompletedText = todos.filter((todo)=>{
    return todo.isComplecated === false;
}).map((todo)=>{
    return todo.text;
});
console.log(TodosCompletedText);

