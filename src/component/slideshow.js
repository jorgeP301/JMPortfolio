import React from "react";
import { Paper, Button} from '@mui/material';
import {Fade as FADER} from "react-slideshow-image";
import './slideshow.css';
import img1 from "../images/UGAsurvivors.png";
import img2 from "../images/byteFight.png";
import img3 from "../images/BFstart.png";
import img4 from "../images/woopFC.png";
import "react-slideshow-image/dist/styles.css";
import Fade from '@mui/material/Fade';




function slideshow() {
    const slideImages = [
        img1,
        img2,
        img3,
        img4
    ];

    return (
        <div className="slide-container">
            <FADER autoplay={true} transitionDuration={1000} duration={3000}>       
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        <Fade in={true} timeout={1500}>
                            <span>welcome</span>
                        </Fade>
                    </div>  
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>    
                    </div>  
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}> 
                    </div>
                </div>
            </FADER>
        </div>
    )
}
export default slideshow;