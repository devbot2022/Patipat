myList = [
    [0,1,2],
    [3,4,'Yahoo!'],
    [5,'Congratulations!', 6]
];

console.log(myList[1][2]);  //Yahoo!

function edit(myList2){
    myList2[1][2] = "Great!!" ;   
}
console.log('----Change word----');
edit(myList[1][2]);
console.log(myList[1][2]);  //Yahoo! ---> Great!!
console.log(myList[2][1]);    // Congratulations

let text="";
for(let i=0; i<myList.length; i++) {
    for (let j =0; j<myList[i] ; j++) {
        text = "" + myList[i][j];
    }
}