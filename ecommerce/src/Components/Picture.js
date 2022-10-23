import React, { useState } from "react";

import './Picture.css'



function Picture(props){
    return(
        <div className="picture">
            <div className="picture--current">
                <img src={props.currentPicture} alt="Selected Item"/>
            </div>
            <div className="picture--list">
                <img onClick={props.changeCurrentPicture} className="picture--image img1" src={props.imageTHs[0]} alt="Show item 1" />
                <img onClick={props.changeCurrentPicture} className="picture--image img2" src={props.imageTHs[1]} alt="Show item 2" />
                <img onClick={props.changeCurrentPicture} className="picture--image img3" src={props.imageTHs[2]} alt="Show item 3"/>
                <img onClick={props.changeCurrentPicture} className='picture--image img4' src={props.imageTHs[3]} alt="show item 4" />
            </div>
        </div>
    )
}

export default Picture;