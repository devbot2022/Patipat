/// 1.11 function
debugger;
function draw(n){
let text ='_';
let star ='*';

    for(i=1; i<=n; i++){
        for(j=1; j<n; j++){
            if(i<=n){
                text+=star;
                if(i-j==1){
                    text+='_';
                }
            }
        }
        text+='\n';
    }  
    console.log(text);                                
}

draw(2);
draw(3);
draw(4);