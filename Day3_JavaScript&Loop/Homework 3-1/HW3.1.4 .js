/// 1.4 function

function draw(n){
    text='';
    for(let i=0; i<n; i++ ){       //Row
        for(let j=0; j<n; j++){    //Col

            text+=i+1;
        }
        text+='\n';
    }
    console.log(text);
}

draw(2); 
draw(3); 
draw(4); 