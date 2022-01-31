import React from 'react';

function About() {
  return (
    <div className="text-center">
      <h1 className='about-margin'>Daniel Eager</h1>
      <img src='./assets/images/IMG_2268.jpg' alt='profile' id='profile' className='about-margin'/>
      <h2>What I do</h2>
      <div className='row-sm-2 section'>
        <p className='col-xs-2'>I'm Daniel Eager, a full-time student, independent app developer, and real-time gamer. I'm currently enrolled at 
          Dakota State University for bachelor's in Cyber Operations and Cyber Leadership/Intelligence; I'll be graduating in 2024.
          I lead the Agriculture and Culinary Club as founder and president outside of classes. I'm also active in Computer Club, Defensive Security Club, Offensive Security Club,
          and Help Night.
        </p>
      </div>
    </div>
  );
}

export default About;