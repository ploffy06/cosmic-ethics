import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const Timeline = () => {
    const marks = [
        {
        value: 0,
        label: '2000',
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
        return `${value}°C`;
    }

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    return (
        <div>
        <Box sx={{ height: 300 }}>
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
            />
        </Box>
        </div>
    );
}

export default Timeline;