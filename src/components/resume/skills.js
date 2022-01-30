import React from 'react';

function Skills() {
    const skills = [
        'linux', 'windows', 'security', 'web', 'network', 'writing', 'speaking'
    ]
    return (
        <div className="flex-triple">
            <h3>Skills</h3>
            {skills.map((skill) => (
                <img className='resume-svgs' src={`./assets/svgs/skills/${skill}.svg`} alt={`${skill} icon`} />
            ))}
        </div>
    );
}

export default Skills;