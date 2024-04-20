import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.css'
import ship from '../../assets/ship.png';

const ShipModal = () => {
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
                <img src={ship} className="modal-icon-ship"/>
                <div className="modal-text">
                    <h1>Generation Ship</h1>
                    <p>
                        A generation ship is designed for long distant travel of light years meaning that it would
                        carry life on the ship for over centuries. This means there would be some individuals who are
                        born and  die on this ship.
                    </p>
                    <p>
                        A major comes with the problem of consent, as it was only the first generation that consented to
                        being on such ship. That said, no one ever consents to being born or being born where they are.
                        What matters more is the  quality of life they are able to live. McMahan believes that a life worth living
                        is something internal and what the individual believes to be of sufficient value.
                    </p>
                    <p>
                        By first ensuring that basic necessaties of human rights such as food, water, sanitation and healthcare and then
                        analysing statistics on what  makes a human 'happy', we will be able to ensure with high probability that individuals aboard
                        such a ship will have a life worth living.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );

    return (
        <div className="earth">
            <Button className="modal-button" onClick={handleOpen}><img src={ship} className="ship-image"/></Button>
            <Modal open={open} onClose={handleClose} className="modal-container">
                <Box id='modal-box'>
                    <Grow in={open}>{icon}</Grow>
                </Box>

            </Modal>
        </div>
    )
}

export default ShipModal;