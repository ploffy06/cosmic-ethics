import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { GiSolarSystem } from "react-icons/gi";
import { IconContext } from "react-icons";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavBar = () => {
    const pages = ["Incentive", "Space", "Terraforming", "Timeline"]
    const nav = useNavigate()

    const handleNavClick = (page) => {
        console.log(page)
        if (page === 'Home') {
            nav('/')
        } else {
            nav(`/${page}`)
        }
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2'
            }
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
            <Toolbar>
                <IconContext.Provider value={{ size: 70 }}>
                    <GiSolarSystem style={{ marginRight: "10px", marginLeft: "-10px" }} />
                </IconContext.Provider>
                <Typography
                    onClick={() => handleNavClick('Home')}
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', sm: 'block' },
                        '&:hover': { cursor: 'pointer' }
                    }}

                >
                    COSMIC ETHICS
                </Typography>
                {pages.map((page) => (
                    <Button
                        sx={{ margin: "10px" }}
                        onClick={() => handleNavClick(page)}
                        color="inherit"
                        endIcon={<ArrowForwardIosIcon />}
                    >
                        {page}
                    </Button>
                ))}
            </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}

export default NavBar;