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
                <span className={styles.mail}><a href={`mailto:${Mail}`}>mail</a></span>
                <span className={styles.instagram}><a href={Instagram} target="_blank" rel="noopener noreferrer">instagram</a> </span>
                <span className={styles.twitter}><a href={Twitter} target="_blank" rel="noopener noreferrer">twitter</a></span>
                    {/* Added target="_blank" to open the links in a new tab.
                    Added rel="noopener noreferrer" for security when using target="_blank". */}
              </div>
      </section>
    );
  }
  
  export default ScrollSocial;