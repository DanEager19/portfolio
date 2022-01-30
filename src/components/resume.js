import React from 'react';
import Skills from './resume/skills';
import Tech from './resume/tech';
import Tools from './resume/tools';

function Resume() {
  return (
    <div className="text-center col flex-wrap">
        <Tech />
      <Skills />
      <Tools />
    </div>
  );
}

export default Resume;