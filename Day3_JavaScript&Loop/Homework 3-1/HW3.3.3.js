// 3.3 Javascript  Array function  2 dimension


let n=[

    ['*','_','_','_'],  //row1
    ['*','*','_','_'],  //row2
    ['*','*','*','_'],  //row3
    ['*','*','*','*']   //row4
];


function draw(n){

    text='';
    for(let i=0; i<n.length; i++){
        for(let j=0; j<n[i].length; j++){
            text +=n[i][j].toString();
        }
        text+='\n';
    }
    console.log(text);
}
draw(n);





/*
debugger;
function draw(n){
    text ='';
    underSc =1;

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(underSc<=j){
                text+='_';
            }else{
                text+='*';
            }
        }
        text+='\n';
        underSc++
    }
    console.log(text); 
 }                              


draw(2);
draw(3);
draw(4);

*/

