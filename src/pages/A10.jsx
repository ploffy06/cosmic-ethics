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
        value: 8,
        label: '2075',
        },
        {
        value: 16,
        label: '2100',
        },
        {
        value: 40,
        label: '2175',
        },
        {
        value: 48,
        label: '2200',
        },
        {
        value: 56,
        label: '2225',
        },
        {
        value: 96,
        label: '2375',
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
        <p>Slide Along The Timelines And Learn About The History Of This Universe</p>
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