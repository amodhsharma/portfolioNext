import React from 'react';
import styles from '../src/app/page.module.css';

const ScrollSkills = () => {
  return (
    <section id="skills"
          style={{
            display: 'flex', 
            flexDirection: 'column',
            height: '100vh',
          }}>
            <span style={{ fontSize: '3.2rem', fontWeight: 100, marginTop: '4vh', fontFamily: '"Libre Caslon Text", serif'}}>Skills I'm Adept With</span>
            {/* BODY */}
          </section>
  );
}

export default ScrollSkills;