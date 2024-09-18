import React from 'react';
import styles from '../src/app/page.module.css';

const ScrollProjects = () => {
  return (
    <section id="projects-done"
    style={{
      display: 'flex', 
      flexDirection: 'column',
      height: '100vh',
    }}>
      <span style={{ fontSize: 'calc(2vw + 2vh)', fontWeight: 100, marginTop: '4vh', fontFamily: '"Libre Caslon Text", serif'}}>Projects I've Done</span>
      {/* BODY */}
    </section>
  );
}

export default ScrollProjects;