// 2.7

function draw(n){
    text ='';
    underSc1 = 1;
    underSc2 = n-1;   

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(underSc2<=j){
                text+='*';
            }else{
                text+='_';
            }
        }
        text+='\n';
        underSc2--
    }
    for(i=0; i<n-1; i++){   
        for(j=0; j<n; j++){
            if(underSc1<=j){   
                text+='*';
            }else{
                text+='_';
            }
        }
        text+='\n';
        underSc1++
    }
    console.log(text); 
 }                                                                    


draw(2);
draw(3);
draw(4);;