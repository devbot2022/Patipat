/// 1.9 function

function draw(n){
    text='';
    num=2;
    for(let i=0; i<n; i++ ){
            text+=num;
            num+=2;
            text+='\n';         
    }
    console.log(text);
}

draw(2); 
draw(3); 
draw(4); 