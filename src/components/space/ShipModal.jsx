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
                        A ship designed many years, potentially past 300 years. The purpose is to travel to far-away worlds that
                        are light years away. Inhabitants will be born and die on this ship so that eventually, the species will
                        be able to colonize a new planet.
                    </p>
                    <p>
                        However, there is a major problem surrounding consent.
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