text = '';
for (let i=0; i<4; i++) {
    text += '-';
    text += '-';
    text += '-';
    text += '-';
    text += '\n';
}
text += '\n';
console.log(text);


///////////////////////////////////

text = '';
for (let i=0; i<10; i++) {         ///Row = i = x axis
    for (let j=0; j<5; j++) {     ///Column =j   = y axis
        text += '(';
        text += '-';
        text += 'Y';
        text += '-';
        text += ')';
        
    }
    text += '\n';
}
console.log(text);


function printRow(loveYou){
    text="";
    for(let j=0; j<loveYou; j++) {
        text += '(';
        text += 'L';
        text += '0';
        text += 'V';
        text += 'E';
        text += ')';
    }
    return text;
}
function draw (row,col) {
    text="";
    for (let i=0; i<row; i++ ){
        text += printRow(col);
        text += '\n';
    }
    console.log(text);
}
function draw_1 (row,col) {
    text="";
    for (let i=0; i<row; i++ ){
        text += printRow(col);
        text += '\n';
    }
    console.log(text);
}
draw(10,5);
draw(20,10);

