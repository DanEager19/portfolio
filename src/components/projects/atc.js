import React from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function Atc() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-auto">
            <button variant="primary" onClick={handleShow}>
                <img className="img-hover img-fluid" src={`./assets/svgs/projects/atc.svg`} alt="ATC icon" />         
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ATC</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Simple CLI for sending HTTP requests; Written in Rust. 
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://github.com/DanEager19/api-testing-cli">GitHub</a>
                </Modal.Footer>
            </Modal>
        </div>            
    );
}
export default Atc;
