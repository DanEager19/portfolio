import React from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function Indb() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-auto">
            <button variant="primary" onClick={handleShow}>
                <img className="project-svgs img-fluid" src={`./assets/svgs/projects/indb.svg`} alt="indb icon" />         
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>In-db</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    In-DB is a fullstack, database web app for video games. It uses Nest, Angular, MongoDB, and Graphql.
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://github.com/DanEager19/in-db">GitHub</a>
                </Modal.Footer>
            </Modal>
        </div>            
    );
}
export default Indb;
