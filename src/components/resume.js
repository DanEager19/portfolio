import React from 'react';

function Resume() {
  return (
    <div className="col flex-wrap">
      <div className='flex-quarter justify-content-center'>
        <h4 className='text-center'>Languages</h4>
        <ul>
          <li>C/C++</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Rust</li>
        </ul>
      </div>
      <div className='flex-quarter justify-content-center'>
      <h4 className='text-center'>Frameworks</h4>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>jQuery</li>
          <li>Nest</li>
          <li>Express</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className='flex-quarter justify-content-center'>
      <h4 className='text-center'>Databases</h4>
        <ul>
          <li>MySQL</li>
          <li>MariaDB</li>
          <li>MongoDB</li>
          <li>Redis</li>
        </ul>
      </div>
      <div className='flex-quarter justify-content-center'>
      <h4 className='text-center'>DevOps</h4>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Docker</li>
          <li>Docker Compose</li>
          <li>NGiNX</li>
          <li>Graphql</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;