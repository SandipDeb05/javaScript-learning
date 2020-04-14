//=========================================== conditionals

//=========================================== if
// == <-- checks only value & === <-- check dataType as well as value
const num1 = 10;
const num2 = 20;
// || <-- OR(alteast one needs to true) &&(all need to true) <-- AND
if(num1 > 5 || num2 >10){
    console.log(`number is ${num1}`);
}else if(num1 >10 && num2>15 ){
    console.log("number is greater");
} else{
    console.log("invalid");
}

//---------------- ternary operator
(num1<num2)? console.log("smaller"): console.log("bigger");

//======================================= switch case
const color = "purple";
switch(color){
    case "red":
        console.log("it is red");
        break;
    case "purple":
        console.log("it is a purple");
        break;
    case "black":
        console.log("it is black");
        break;
    default:
        console.log("invalid");

}