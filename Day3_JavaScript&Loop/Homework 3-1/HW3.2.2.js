// 2.2  Downward Triangle star pattern


function draw(n){
    text ='';
    underSc =n;

    for(i=0; i<=n-1; i++){   
        for(j=0; j<n; j++){
            if(underSc<=j){   
                text+='_';
            }else{
                text+='*';
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