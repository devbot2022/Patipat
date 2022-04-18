/// 1.10 function

debugger;
function draw(n){
    let result='';
    for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            result+=i*j;
        }
        result+='\n';
    }
    console.log(result);
}

draw(2);
draw(3);
draw(4);