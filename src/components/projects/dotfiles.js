import React from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function Dotfiles() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-auto">
            <button variant="primary" onClick={handleShow}>
                <img className="img-hover img-fluid" src={`./assets/svgs/projects/dotfiles.svg`} alt="Dotfiles icon" />         
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dotfiles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    A collection of dotfiles and configs to standardize my Linux environment. 
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://github.com/DanEager19/dotfiles">GitHub</a>
                </Modal.Footer>
            </Modal>
        </div>            
    );
}
export default Dotfiles;
