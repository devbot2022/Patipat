//Picture Cards
import PictureCard from "./PictureCard.css";


function PictureCard () {

    return (
        <div className="picture-card">
            <img src='https://images.unsplash.com/photo-1651594234406-35a5155463d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            <h4>Date:</h4>
            <h4>Like:</h4>
            <h4>Comment:</h4>
        </div>
     
    );
}

export default PictureCard;

