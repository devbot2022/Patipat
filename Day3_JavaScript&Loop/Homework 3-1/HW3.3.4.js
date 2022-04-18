// 3.4 Javascript  Array 2 dimension for Diamond pattern

function draw(n) {
    let arr=[];
    let text='';
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i); j++){
            arr.push(text += "-");
        }

        for(let k=0; k<((2*i)-1); k++){
            arr.push(text+= "*");
        }
        for(let m=1; m<=(n-i); m++){
            arr.push(text+= "-");
        }
        text+='\n';
    }

    for(let i=1; i<n; i++){
        for(let j=0; j<n; j++){
            if(j>=i){
                arr.push(text+="*");
            }else{
                arr.push(text+="-");
            }
        }
        for(let m=n-1; m>0; m--){
            if(m>i){
                arr.push(text+="*");
            }else{
                arr.push(text+="-");
            }
        }
        text+='\n';
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);
