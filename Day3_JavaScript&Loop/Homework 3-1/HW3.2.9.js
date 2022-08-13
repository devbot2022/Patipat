// 2.9  Javascript pyramid pattern

function draw(n) {
    text = '';
    for (i = n; i > 0; i--) {
        for (j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<i+j || i>j ) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);