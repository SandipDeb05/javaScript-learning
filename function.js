//==================================== functions

function addNum(num1, num2){ // function declearation
    // console.log(num1+num2);
    return num1 + num2; 
}
console.log(addNum(2,3)) // function call

//------------------------------------ arror function
const addNumArrow = (num1,num2) => num1 + num2 ;
console.log(addNumArrow(4,3));

const multiplyNumArrow = (num1, num2) =>{
    return num1 * num2;
}
console.log(multiplyNumArrow(4,3));