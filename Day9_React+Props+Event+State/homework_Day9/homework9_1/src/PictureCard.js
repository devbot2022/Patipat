///Picture Card Component 
//hw 9_1 & 9_2

import React,{useState} from "react";
import './PictureCard.css';


const PictureCard = (props) => {

    const [like, setLike]= useState(props.likeCount);
    const onClickFunc = () =>{
        setLike(like+1);
    }
    const [comment, setComment]= useState(props.commentCount);
    const onClickComment =() =>{
        setComment(comment+1);
        alert('Thank you for your comment! ');
    }
    

    console.log(props);
    return(
        <>
        <div className="picture-grid">
            <p>ID: {props.id}</p>
            <p>Image</p>
            <p><img src={props.imgSrc}/></p>
            <p>Created By: {props.createBy}</p>

            
            {like > 0 && <p>Like:{like}</p>}
            <p><input type='button' value='like' onClick={onClickFunc}/> </p>

            {comment >0 &&<p>Comment:{comment}</p>}
            <p><input type='text' /> </p>
            <p><input type='button' value='comment' onClick={onClickComment}/> </p>
        </div>
        </>
    );
}




export default PictureCard;