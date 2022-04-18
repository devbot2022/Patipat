/// 1.7 function

function draw(n){
    text='';
    num=n**2;
    for(let i=0; i<n; i++ ){       //Row
        for(let j=0; j<n; j++){    //Col

            text+=num;
            num--
        }
        text+='\n';
    }
    console.log(text);
}

draw(2); 
draw(3); 
draw(4); 