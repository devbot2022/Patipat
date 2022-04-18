/// 1.6 function

function draw(n){
    text='';
    num=0;
    for(let i=0; i<n; i++ ){       //Row
        for(let j=0; j<n; j++){    //Col

            text+=num+1;
            num++
        }
        text+='\n';
    }
    console.log(text);
}

draw(2); 
draw(3); 
draw(4); 