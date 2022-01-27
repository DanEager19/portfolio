import React from 'react';

function Portfolio() {
    return (
        <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <img className="img-hover" src="./svgs/in-db.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./svgs/atc.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./svgs/dotfiles.svg" alt="Email icon" />
                </div>            
                <div className="col-md-auto">
                    <img className="img-hover" src="./svgs/chefbot.svg" alt="Email icon" />
                </div>
        </div>
    );
}

export default Portfolio;