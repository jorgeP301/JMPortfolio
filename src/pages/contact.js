import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contact.css';
import * as React from 'react';
import Link from '@mui/material/Link'

function Contact() {

    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <p>This is the contact page. Plus other of my pages</p>
            <div className='each-one'>
                <div className='each'> 
                    <LinkedInIcon sx={{ fontSize: 64 }} />
                    <p>
                        Lets connect! here is my <Link color="inherit" href="https://www.linkedin.com/in/jpatino3014/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    </p>
                </div>
                <div className='each'>
                    <GitHubIcon sx={{ fontSize: 64 }} />
                    <p>
                        Check out my <Link color="inherit"  href="https://github.com/jorgeP301" target="_blank" rel="noopener noreferrer">GitHub</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Contact;
