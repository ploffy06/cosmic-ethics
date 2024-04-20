import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { CharacterData } from '../components/CharacterData';

const A12 = () => {
    return (
        <div className='a12-page'>
        <h1>Universe A-12</h1>
        <p>Diary Entries Of Prominent Figures In The New Utopia</p>
        <div className='underline'></div>
        <div style={{ padding: '10px' }}></div>
        {
            CharacterData.map((character, index) =>
            <Accordion defaultExpanded sx={{ backgroundColor: '#1d1d1d', color: 'white', border: '1px solid white' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}>
                    <strong>{character.name} (born {character.date})</strong>
                </AccordionSummary>
                <AccordionDetails>{character.details}</AccordionDetails>
            </Accordion>
        )}
    </div>
    )
}

export default A12;