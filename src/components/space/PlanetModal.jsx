import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.css'
import planet from '../../assets/planet.png';

const EarthModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const icon = (
        <div>
            <Button onClick={handleClose} className="modal-close">
                <CloseIcon sx={{ color: 'white'}}/>
            </Button>
            <div className="modal-item">
                <div className="modal-details">
                <img src={planet} className='modal-icon-planet'/>
                <div className="modal-text">
                    <h1>Earth Analogue Planet</h1>
                    <p>
                        A planet 11 light years away from Earth with water to support life.
                        This is the planet that humans aim terraform. Upon arrival to this planet, one of the first things
                        to take into considertion is whether or not humans can sufficiently survive on this  planet. What if there
                        are biological beings that are dangerous to humans but so  small that we cannot see them. This causes a risk
                        of death, and to further this it is a risk of death  to someone to who did not even consent to being put into a situation
                        of having to step foot onto a new planet.
                    </p>
                    <p>
                        Though we cannot fully prevent this, we can mitigate the risk through technology such as a spacesuit that will defend against small
                        living organisms and robots that will be the ones to first visit the planet to gather data on it.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );

    return (
        <div className="earth">
            <Button className="modal-button" onClick={handleOpen}><img src={planet} className="planet-image"/></Button>
            <Modal open={open} onClose={handleClose} className="modal-container">
                <Box id='modal-box'>
                    <Grow in={open}>{icon}</Grow>
                </Box>

            </Modal>
        </div>
    )
}

export default EarthModal;