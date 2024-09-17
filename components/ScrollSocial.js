import React from 'react';
import styles from '../src/app/page.module.css';

const Mail = process.env.NEXT_PUBLIC_PORTFOLIO_MAIL;
const Instagram = process.env.NEXT_PUBLIC_PORTFOLIO_INSTAGRAM;
const Twitter = process.env.NEXT_PUBLIC_PORTFOLIO_TWITTER;

const ScrollSocial = () => {
    return (
      <section id="socials"
            style={{
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              height: '100vh',
            }}>
              <div className={styles.socialLinks}>
                <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block' }}><a href={`mailto:${Mail}`}>Mail</a></span>
                <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block', marginTop: '-3rem' }}><a href={Instagram} target="_blank" rel="noopener noreferrer">Instagram</a> </span>
                <span style={{ fontSize: '12.5rem', fontWeight: 400, display: 'block', marginTop: '-3rem' }}><a href={Twitter} target="_blank" rel="noopener noreferrer">Twitter</a></span>
                    {/* Added target="_blank" to open the links in a new tab.
                    Added rel="noopener noreferrer" for security when using target="_blank". */}
              </div>
      </section>
    );
  }
  
  export default ScrollSocial;