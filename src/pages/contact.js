import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contact.css';

function Contact() {

    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <p>This is the contact page. Plus other of my pages</p>
            <div className='each-one'>
                <div className='phone'> 
                    <PhoneIphoneIcon />
                    <a href="tel:+1234567890">+1 (234) 567-890</a>

                </div>
                <div className='linkedin'> 
                    <LinkedInIcon />
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className='github'>
                    <GitHubIcon />
                    <a href="www.github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}
export default Contact;
