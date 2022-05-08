import React from "react";
import './RandomBox.css'

function RandomBox (){

    let colors = ['red', 'blue', 'green', 'purple', 'pink'];

    let random_color =colors[Math.floor(Math.random()*colors.length)];
    let random_fontSize =Math.floor(18*Math.random()) +18;


    return(

        <div className="random-box"
        style={{display:'flex', 
        color:'white' , 
        padding:'10px', 
        backgroundColor:`${random_color}`, 
        fontSize:`${random_fontSize}px`}}>
            <h2>Random Box</h2>

        </div>
    );
}

export default RandomBox;