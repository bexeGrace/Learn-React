import React from "react";
import Picture from "./Picture";
import Description from "./Description";
import './Content.css'


function Content(props){
    return(
        <div className="content">
            <Picture 
                currentPicture={props.currentPicture}
                imageTHs={props.imageTHs}
                changeCurrentPicture={props.changeCurrentPicture}
            />
            <Description
                changeCounter={props.changeCounter}
                count={props.count}
                addToCart={props.addToCart}
            />
        </div>
    )
}

export default Content;