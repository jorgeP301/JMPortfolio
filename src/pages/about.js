import React from "react";
import './about.css';
import headshot from '../images/headshot.JPG';
import { Grow } from "@mui/material";
import {useScrollTrigger} from "@mui/material";

function About() {

    function useImageScrollTrigger(options={}) {
        return useScrollTrigger({
            threshold: options.threshold || 250
        });
    } 
    const trigger = useImageScrollTrigger();
    return (
        <div className="abt-page">
            <div className="top-text">
                <Grow in={trigger} timeout={1000} >
                    <h1>I'm Jorge Patino</h1>
                </Grow>
                <Grow in={trigger} timeout={1000} >
                    <h2>Come get to know me!</h2>
                </Grow>
            </div>
            <div className="contents">
                <p className="abtme"> 
                    Hello! I am currently a senior Management Information Systems major with an emphasis in Information Security
                    and a minor in Computer Science. With both a business and technology based focus, I aspire to be a well-rounded
                    professional in the industry. Leveraging my love for learning computer science and coding I plan to dive into any consulting, 
                    analyst, cybersecurity, or, development role to enter the workforce. I have worked primarily with databases and frontend 
                    web programming and data science while here at the University of Georgia and I plan to continue learning more and diversifying 
                    skill set after reaching my goals for the coming year!
                </p>
                <Grow in={trigger} timeout={1000} >
                    <img src={headshot} className="headshot" alt="headshot of Jorge Patino"/>
                </Grow>
            </div>
        </div>
    );
}
export default About;