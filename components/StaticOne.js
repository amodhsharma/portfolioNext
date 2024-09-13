import React from 'react';
import styles from '../src/app/page.module.css';

const StaticOne = () => {
    return(
        <div className={styles.static}>
          <div className={styles.staticMainText}
          style={{
            fontSize: '9vw',
            color: '#CAD2C5'
          }}>
            <span style={{ fontWeight: 100, display: 'block' }}>Amodh</span> {/* 100 is minimum*/}
            <span style={{ fontWeight: 750, display: 'block', marginTop: '2vw', textAlign:'right' }}> शर्मा</span>
          </div>
          <div className={styles.staticMainIntro}
          style={{
            fontSize: '1.25vw',
            color: '#CAD2C5',
            margin: '5vw'
          }}>
            <span style={{ fontWeight: 200, display: 'block' }}> A fresher with a knack for aesthetics. With a cobined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</span>
            {/* display: Block - changes the default behavior of inline elements (like <span>) to that of block-level elements. */}
            {/* <p>A fresher with a knack for aesthetics. With a cobined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</p> */}
            <span style={{ fontWeight: 200, display: 'block', marginTop: '1rem' }}> I value clarity, empathy, and integrity above all else. They guide my approach to problem solving and life in general.</span>
            {/* <p>I value clarity, empathy, and integrity above all else. They guide my approach to problem solving and life in general.</p> */}
          </div>
          <div className={styles.staticMainLinks}
          style={{
            fontSize: '1.25vw',
            margin: '0 0 10vh 0',
            display: 'flex',
            flexDirection: 'column', // Arranges the items vertically
            alignItems: 'flex-start', // Align items to the left (change to 'center' if you want centered alignment)
            
          }}>
            <span style={{ fontWeight: 200, display: 'block' }}><a href='#introduction'>00 Introduction</a></span>
            {/* <a href='#introduction'>00 Introduction</a>, href will be made to the section id of the desired location */}
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href='#areas-of-interest'>01 Areas of Interest and Design Philosophy</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href="#projects-done">02 Projects I've Done</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href="#skills">03 Skills I'm Adept With</a></span>
            <span style={{ fontWeight: 200, display: 'block', marginTop: '0.5rem' }}><a href='#socials'>04 Socials</a></span>
          </div>
        </div>
    );
}
export default StaticOne;