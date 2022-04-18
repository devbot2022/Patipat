// 2.6

function draw(n){
    text ='';
    underSc =1;  

    for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            if(underSc<=j){
                text+='*';
            }else{
                text+='_';  
            }
        }
        text+='\n';
        underSc++
    }
    console.log(text); 
 }                                          



draw(2);
draw(3);
draw(4);;