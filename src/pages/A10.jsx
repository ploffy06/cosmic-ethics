import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TimelineData } from '../components/TimelineData'

const A10 = () => {
    const [currentYear, setCurrentYear] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setCurrentYear(newValue)
    }

    const marks = [
        {
        value: 0,
        label: '2050',
        },
        {
        value: 50,
        label: '2500',
        },
        {
        value: 100,
        label: '3000',
        },
    ];

    function valuetext(value) {
        console.log(value)
        return `${value}°C`;
    }

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    const events = (
        <>
            <h2>{TimelineData[currentYear].title}</h2>
            <p>{TimelineData[currentYear].events}</p>
            <h1>Our Moral Duties</h1>
            <p>{TimelineData[currentYear].moral_duties}</p>
        </>
    )
    return (
        <div className='a10-page'>
        <h1>Universe A-10</h1>
        <div className='underline'></div>
        <div className='timeline'>
            <Box className='timeline-slider'>
                <Slider
                    orientation='vertical'
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    marks={marks}
                    color='white'
                    sx={{
                        '& .MuiSlider-markLabel': { color: 'white' }
                    }}
                    value={currentYear}
                    onChange={handleSliderChange}
                />
                <p>Year</p>
            </Box>
            <div className='a10-events'>
                <h2>{TimelineData[currentYear].title}</h2>
                <p>{TimelineData[currentYear].events}</p>
                <h1>Our Moral Duties</h1>
                <p>{TimelineData[currentYear].moral_duties}</p>
            </div>
        </div>
        </div>
    );
}

export default A10;