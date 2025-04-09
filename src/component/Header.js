import React from "react";
import './Header.css';
import { AppBar, Box, Button, Switch, Toolbar } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




function Header({ toggleTheme, isDarkMode }) {

    const handleAboutClick  =() => {
        window.scroll({
            top: 900,
            behavior: 'smooth'
        });
    }
    return (
        <AppBar position='sticky' sx={{ backgroundColor: isDarkMode ? '#252f4b' : '#647fcc', color: isDarkMode ? '#ffffff' : '#000000' }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box>   
                    <Button color="inherit" onClick={handleAboutClick}>ABOUT</Button>
                    <Button color="inherit">PROJECTS</Button>
                    <Button color="inherit">CONTACT</Button>
                </Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                className="LDS"
                                checked={isDarkMode}
                                size="medium"
                                onChange={toggleTheme}
                                color="default"
                            />
                        }
                        label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    />
                </FormGroup>
            </Toolbar>
        </AppBar>
    );
}

export default Header;