// 2.4

debugger;
function draw(n){
    text ='';
    num1 =1;
    num2 = n-1;   

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(num1<=j){
                text+='-';
            }else{
                text+=num1;   
            }
        }
        text+='\n';
        num1++
    }
    for(i=0; i<n-1; i++){   
        for(j=0; j<n; j++){
            if(num2<=j){   
                text+='-';
            }else{
                text+=num2;
            }
        }
        text+='\n';
        num2--
    }
    console.log(text); 
 }                              



draw(2);
draw(3);
draw(4);;