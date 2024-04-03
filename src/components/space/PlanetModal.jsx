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