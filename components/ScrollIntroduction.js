import React from 'react';
import styles from '../src/app/page.module.css';

const ScrollIntroduction = () => {
  return (
    <section id="introduction" className={styles.scrollIntroduction}
          style={{
            fontFamily: '',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            height: '100vh',
            fontSize: 'calc(0.87vh + 0.87vw)',
            gap: 'calc(0.5vh + 2vw)',
            fontFamily: '"Teachers", sans-serif'
          }}>
            <span style={{ display: 'block'}}>Being brought up in a house full of fabrics, designs, colors and patterns does something to you,</span>
            <span style={{ display: 'block'}}> Something which makes you look at the whole world like its your canvas,</span>
            <span style={{ display: 'block'}}>What better sign from the universe to turn the world a bit more aesthetic, one click at a time </span>
    </section>
  );
}

export default ScrollIntroduction;