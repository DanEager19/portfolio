import React from 'react';
import Atc from './projects/atc';
import Indb from './projects/indb';
import Chefbot from './projects/chefbot';
import Dotfiles from './projects/dotfiles';

function Projects() {
    return (
            <div className='container row justify-content-center text-center'>
                <h2>PROJECTS</h2>
                <Indb /> 
                <Atc />
                <Chefbot />
                <Dotfiles />
            </div>
         );
}

export default Projects;