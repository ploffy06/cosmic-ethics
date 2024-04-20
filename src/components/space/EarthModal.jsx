import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.css'
import earth from '../../assets/earth.png';
import Tooltip from '@mui/material/Tooltip';

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
                <img src={earth} className="modal-icon" />
                <div className="modal-text">
                    <h1>Planet Earth</h1>
                    <p>
                        In the name of science and engineering, individuals across the planet of this Universe chose to embark on space travel
                        with  the prospect of becoming an  interplanetary species.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );

    return (
        <div className="earth" sx={{ height: 300 }}>
            <Button onClick={handleOpen} className="modal-button"><img src={earth} className="earth-image"/></Button>

            <Modal open={open} onClose={handleClose} className="modal-container">
                <Box id='modal-box'>
                    <Grow in={open}>{icon}</Grow>
                </Box>

            </Modal>
        </div>
    )
}

export default EarthModal;