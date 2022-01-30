import React from 'react';

function Tech() {
    const techs = ['html', 'css', 'javascript', 'c', 'cpp', 'rust', 
    'python', 'php','bash', 'sql', 'mongodb']
    return (
        <div className="flex-triple row-md-auto">
            <h3>Tech</h3>
            {techs.map((tech) => (
                <img className='resume-svgs' src={`./assets/svgs/tech/${tech}.svg`} alt={`${tech} icon`} />
            ))}
        </div>
    );
}

export default Tech;