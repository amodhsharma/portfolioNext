import React from 'react';
import styles from '../src/app/page.module.css';

import GridLayout from './Skills/GridLayout';
// importing with ./ as it is in the same directory

const ScrollSkills = () => {

  return (
   
    <section id="skills" style={{display: 'flex', flexDirection: 'column',height: '100vh'}}>
      <span style={{ fontSize: 'calc(2vw + 2vh)', fontWeight: 100, marginTop: '4vh', fontFamily: '"Libre Caslon Text", serif'}}>Skills I'm Adept With</span>
      <GridLayout />
    </section>
  );
}

export default ScrollSkills;