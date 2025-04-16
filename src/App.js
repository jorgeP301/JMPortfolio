import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import About from './pages/about';
import Projects from './pages/projects';
import Slideshow from './component/slideshow';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';


function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            ...(isDarkMode 
                ? {
                    //darkmode colors
                    background: {
                        default: '#1E2436',
                        paper: '#181838',
                    },
                    text: {
                        primary: '#71f79f',
                        secondary: '#b0bec5', //rgb(188, 232, 189)
                    },
                } 
                :
                {
                    //lightmode colors
                    background: {
                        default: '#ACBDEA', // #daede1 green theme // #B1CBFF light blue theme
                        paper: '#8EA3CD', // #a3d3b3 green theme
                    },
                    text: {
                        primary: '#000000',
                        secondary: '#555555',
                    },
                }), 
        },
        typography: {
          fontFamily: '"Ruda", serif',
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <div className='slideshow'>
                    <Slideshow />
                </div>
                <div className='about'>
                    <About />
                </div>
                <div className='projects'>
                    <Projects />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
