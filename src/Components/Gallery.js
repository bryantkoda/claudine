import React from "react";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const Gallery = () => {
    return(
        <>
        <div className="row">
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image6} className="w-100 h-75"/>
            </div>
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image1} className="w-100 h-75"/>
            </div>
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image2} className="w-100 h-75"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image3} className="w-100 h-75"/>
            </div>
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image4} className="w-100 h-75"/>
            </div>
            <div className="col-md-4 col-xs-12 px-0">
                <img src={image5} className="w-100 h-75"/>
            </div>
        </div>
    </>
    );
}

export default Gallery