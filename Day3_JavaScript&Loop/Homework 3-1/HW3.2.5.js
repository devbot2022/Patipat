// 2.5

function draw(n){
    text ='';
    underSc =n-1;  

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(underSc<=j){
                text+='*';
            }else{
                text+='_';  
            }
        }
        text+='\n';
        underSc--
    }
    console.log(text); 
 }                                          



draw(2);
draw(3);
draw(4);