import React from 'react';

function Tools() {
    const tools = ['git', 'docker', 'vim', 'vscode', 'office', 'adobe']
    return (
        <div className="flex-triple row-md-auto">
            <h3>Tools</h3>
            {tools.map((tool) => (
                <img className='resume-svgs' src={`./assets/svgs/tools/${tool}.svg`} alt={`${tool} icon`} />
            ))}
        </div>
    );
}

export default Tools;