import React from 'react';
import styles from '../src/app/page.module.css';
import gridStyles from './gridStyles.module.css';
// importing with ./ as it is in the same directory

const ScrollSkills = () => {

  return (
   
    <section id="skills" style={{display: 'flex', flexDirection: 'column',height: '100vh'}}>
      <span style={{ fontSize: 'calc(2vw + 2vh)', fontWeight: 100, marginTop: '4vh', fontFamily: '"Libre Caslon Text", serif'}}>Skills I'm Adept With</span>
      
      {/* Grid Body */}
      <div className={styles.grid}>
          <div>Text 1</div>
          <div>Text 2</div>
          <div>Text 3</div>
          <div>Text 4</div>
          <div>Text 5</div>
    </div>
    
    </section>
  );
}

export default ScrollSkills;