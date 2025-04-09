import { Card, CardMedia, Container } from '@mui/material';
import './projects.css';
import bytefight from '../images/byteFight.png';
import bookDB from '../images/BookDB.png';
import hadoopimg from '../images/hadoop.png'; 

export default function projects() {
    return (
        <div className='container'>
            <div className='ptitle'>
                
                <h2>Notable Projects</h2>
                <p>My work over the years.</p> 
            
            </div>
            <div className='projects'>
                <Card className="project">
                    <CardMedia component='img' image={bytefight} height='200' sx={{objectFit:'contain'}} />
                    <h2>BYTE FIGHT</h2>
                    <p>
                        created for the 2024 UGA hacks 9 hackathon. This project was created to learn more about unity2d and create a small multiplayer
                        similar to super smash bros. This project was created in C# and unity2d.      
                    </p>
                </Card>
                <Card className="project">
                    <CardMedia component='img' image={hadoopimg} height='300' sx={{objectFit:'contain'}}  />
                    <h2>Hadoop Autograder</h2>
                    <p>
                        just take a look at this website. yes it is a static website but I had jumped into the project made in react.js,
                        node.js, and using the Material UI Library. This is me diving more into web design and a more creative side of coding.
                    </p>
                </Card>
                <Card className="project">
                    <CardMedia component='img' image={bookDB} height='200' sx={{objectFit:'contain'}}/>
                    <h2>Book Database</h2>
                    <p>
                        This project was created for my MIST4630 class where we created a dynamic web project utilising java
                        HTML, CSS, MySQL, and AWS RDS to create a book database.
                    </p>
                </Card>     
            </div> 
        </div>
    );
}
