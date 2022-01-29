import React from 'react';
import {Modal} from 'react-bootstrap';
import { useState } from 'react';
const info = require('../info.json');

function Portfolio() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
            <div className='container row justify-content-center'>
                <div className="col-md-auto">
                    <button variant="primary" onClick={handleShow}>
                        <img className="img-hover img-fluid" src="./assets/svgs/projects/in-db.svg" alt="Email icon" />         
                    </button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{info.indb.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {info.indb.summary}
                        </Modal.Body>
                        <Modal.Footer>
                            <a href={info.indb.github}>GitHub</a>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/atc.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/dotfiles.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/chefbot.svg" alt="Email icon" />
                </div>
            </div>
         );
}

export default Portfolio;