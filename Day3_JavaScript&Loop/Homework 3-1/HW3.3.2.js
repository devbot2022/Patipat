// 3.2 Javascript -  Number Diamond pattern

debugger;
function draw(n) {
    text = '';
    a = 1;
    for (i = n; i > 0; i--) {
        for (j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<i+j || i>j ) {
                text += '-';
            } else {
                text += a;
                a++;
            }
        }
        text += '\n';
    }
    for (i = 1; i<n ; i++) {
        for (j = 0; j <n ; j++) {
            if ( j>=i ) {
                text += a;
                a++;
            } else {
                text += '-';
            }
        }
        for(k=(n-1); k>0; k--){
            if(k>i){
                text+=a;
                a++
            }else{
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);