import React from 'react';
import styles from '../src/app/page.module.css';

const ScrollAreas = () => {
  return (
    <section id="areas-of-interest"
          style={{
            display: 'flex', 
            flexDirection: 'column',
            height: '100vh',
          }}>
            <span style={{ fontSize: 'calc(2vw + 2vh)', fontWeight: 100, marginTop: '4vh', fontFamily: '"Libre Caslon Text", serif'}}>Areas of Interest and Design Philosophy</span>
            {/*margin top ensures that the text Areas of interest is displayed at a distance of 4 vw from top of section */}
            {/* BODY */}
    </section>
  );
}

export default ScrollAreas;