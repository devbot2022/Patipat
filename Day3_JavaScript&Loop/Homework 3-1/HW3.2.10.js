// 2.10  Javascript - Reverse pyramid star pattern

debugger;
function draw(n) {
    text = '';

    
    for (i = 0; i<n ; i++) {
        for (j = 0; j <n ; j++) {
            if ( j>=i ) {
                text += '*';
            } else {
                text += '_';
            }
        }
        for(k=(n-1); k>0; k--){
            if(k>i){
                text+='*';
            }else{
                text += '_';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);



