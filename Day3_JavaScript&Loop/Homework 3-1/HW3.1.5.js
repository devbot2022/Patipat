/// 1.5 function

function draw(n){
    text='';
    for(let i=n; i>=1; i-- ){       //Row
        for(let j=n; j>=1; j--){    //Col

            text+=i;
        }
        text+='\n';
    }
    console.log(text);
}
draw(2); 
draw(3); 
draw(4); 