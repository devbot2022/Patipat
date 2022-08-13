
let arr = [1,2,3,4,5,6,7,8,9,10];

//filter
let evenNumber = arr.filter((num)=>{
     return num%2===0;
});



//map
let  multiply = arr.map((num)=>{
    if(num%2===0){
        return num*1000;
    }else{
        return 'odd';
    }
});





//reduce
let sumNum = arr.reduce((sum,num)=>{
    return sum+num;
});
console.log("even number is :",evenNumber);
console.log('even number x 1000:',multiply);
console.log('summary =', sumNum);