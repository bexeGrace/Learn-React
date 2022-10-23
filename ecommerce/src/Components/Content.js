import React from "react";
import Picture from "./Picture";
import Description from "./Description";
import './Content.css'


function Content(properties){
    return(
        <div className="content">
            <Picture 
                currentPicture={properties.currentPicture}
                imageTHs={properties.imageTHs}
                changeCurrentPicture={properties.changeCurrentPicture}
            />
            <Description
                changeCounter={properties.changeCounter}
                count={properties.count}
                addToCart={properties.addToCart}
            />
        </div>
    )
}

export default Content;