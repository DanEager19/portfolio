import React from 'react';
import {Accordion} from 'react-bootstrap';

function Portfolio() {
    return (
        <Accordion defaultActiveKey="0" className="row justify-content-md-center">
                <Accordion.Item eventKey="0" className="col-md-auto">
                    <Accordion.Header><img className="img-hover" src="./assets/svgs/projects/in-db.svg" alt="Email icon" /></Accordion.Header>
                    <Accordion.Body>Hi</Accordion.Body>

                </Accordion.Item>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/atc.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/dotfiles.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./assets/svgs/projects/chefbot.svg" alt="Email icon" />
                </div>
        </Accordion>
    );
}

export default Portfolio;