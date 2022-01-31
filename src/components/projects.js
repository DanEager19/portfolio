import React from 'react';
import Atc from './projects/atc';
import Indb from './projects/indb';
import Chefbot from './projects/chefbot';
import Dotfiles from './projects/dotfiles';

function Projects() {
    return (
            <div className='row mx-auto text-center'>
                <div className='col'>
                    <div className='project-svg-box'>
                        <div className='row'>
                            <Indb />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='project-svg-box'>
                        <div className='row'>
                            <Atc />
                        </div> 
                    </div>
                </div>
                <div className='col'>
                    <div className='project-svg-box'>
                        <div className='row'>
                            <Chefbot/> 
                        </div>  
                    </div>
                </div>
                <div className='col'>
                    <div className='project-svg-box'>
                        <div className='row'>
                            <Dotfiles /> 
                        </div>
                    </div>
                </div>
            </div>
         );
}

export default Projects;