import React from 'react';

function Skills() {
    const skills = ['c', 'cpp', 'html', 'css', 'javascript', 'typescript', 'rust', 
    'python', 'bash', 'php', 'sql', 'mongodb']
  return (
    <div className="flex-triple">
        {skills.map((skill) => (
            <img className='resume-svgs' src={`./assets/svgs/tech/${skill}.svg`} alt={`${skill} icon`} />
        ))}
    </div>
  );
}

export default Skills;