import React from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function Chefbot() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-auto">
            <button variant="primary" onClick={handleShow}>
                <img className="project-svgs img-fluid" src={`./assets/svgs/projects/chefbot.svg`} alt="Chefbot icon" />         
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chef-Bot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Chef-Bot is my personal Discord Bot written with Node. She helps moderate the Cooking and Gardening Club server and send reminders.
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://github.com/DanEager19/chef-bot">GitHub</a>
                </Modal.Footer>
            </Modal>
        </div>            
    );
}
export default Chefbot;
