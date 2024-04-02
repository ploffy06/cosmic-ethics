import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './pages.css';
import shipImage from '../assets/ship.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Landing = () => {
    const nav = useNavigate();

    const handleClick = () => {
        nav('/About');

    };

    return (
        <div className="Landing">
            <img src={shipImage} className='landing-image' alt='Ship' />

                <div className="content">
                    <p>
                        The prospect of space travel and becoming an interplanetary has species sparked curiosity in the recent decades
                        of technological development. As we reach beyond the confines of Earth's atmosphere...
                    </p>
                    <h1>Can we simply conquer space and exploit new worlds?</h1>
                    <Button
                        sx={{ color: "white", marginTop: "40px" }}
                        onClick={handleClick}
                        startIcon={<ArrowBackIosNewIcon />}
                        endIcon={<ArrowForwardIosIcon />}
                    >
                        click here to learn more about cosmic ethics
                    </Button>
                </div>

        </div>
    );
};

export default Landing;
