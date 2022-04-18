/// 1.8 function

function draw(n){
    text='';
    num=0;
    for(let i=0; i<n; i++ ){        ///n=row     
            text+=num;
            num+=2;
            text+='\n';

    }
    console.log(text);
}
draw(2); 
draw(3); 
draw(4); 