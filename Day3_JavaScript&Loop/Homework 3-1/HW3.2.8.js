// 2.8

function draw(n){
    text ='';
    b = 1;  
    
    for(i=1; i<n+1; i++){
        for(j=n; j>0; j--){
            if(j<=i){
                text+=b;
                b++;
            }else{
                text+='-';
            }
        }
        text+='\n';
    }
    for(i=n-1; i>=1; i--){
        for(j=n; j>0; j--){
            if(j<=i){
                text+=b;
                b++;
            }else{
                text+='-';
            }
        }
        text+='\n';
    }        
    console.log(text);
}                                                            


draw(2);
draw(3);
draw(4);