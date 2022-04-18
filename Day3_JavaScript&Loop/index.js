/* JavaScript Fundamental
Boolean  true False
 String อักขระ อักษร
 Null 
 Underfined   มีตัวแปรอยู่ แต่ยังไม่กำหนดค่า 
Symbol 

object type 
 - object - Array

 NaN 
parseInt ('any string')
parseFloat ("any string")



*/
/*
let a = [1,2,3];
typeof a;
console.log(a);

console.log("Hello world CodeCamp2022");

*/
/// Array

myList = [
    ['Soccer','Basketball','Volleyball'],
    [4.00,3.85,3.25],
    ["Engineer","Programmer","Dev"],
    ['orange', 'banana','Apple']
]
for(let i=0; i< myList.length;i++){
    console.log("My favorite fruit is : ", myList[3][0],myList[3][1]);
    console.log("My position is : ",myList[2][1]);
}


let score=50;
if(score==50){
    console.log('Passed');
}else{
    console.log('Failed');
}

let myObj = (a,b) =>{
    return a+b;
}
console.log(myObj(2,4));

let myCal = function(a,b,c){
    return (a*b-c);
}
console.log(myCal(10,10,2));


///LAB 3: Debug JavaScript


debugger;
let arr2 =[2,4,6,8,10];

function myFunc(){
    for(let i=0; i<2; i++){
        console.log('Hello World');
    }
}
for (let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
    myFunc();
}

