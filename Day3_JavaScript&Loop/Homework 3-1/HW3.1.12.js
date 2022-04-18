/// 1.12 function
debugger;
function draw(n){
    text ='';
    underScore =n-1;
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(underScore==j){
                text+='_';
            }else{
             text+='*';
            }
        }
        text+='\n';
        underScore--;
    }  
    console.log(text);                                
}

draw(2);
draw(3);
draw(4);