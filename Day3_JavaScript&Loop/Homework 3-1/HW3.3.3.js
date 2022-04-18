// 3.3 Javascript  Array function  2 dimension


function draw(n){
    let arr=[];
    text ='';
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            if(j<=i){
                arr.push(text+='*');
            }else{
                arr.push(text+='-');
            }
        }
        text +='\n';
    }
    console.log(text);
}


draw(2);
draw(3);
draw(4);


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

