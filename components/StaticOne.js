
import styles from '../src/app/page.module.css';

const StaticOne = () => {
    return(
        <div className={styles.left}>
           <div className={styles.leftWrapper}>
              <div className={styles.amodh}>
                {/* <div className={styles.amodhBlock}> */}
                  <span className={styles.amodhLeft} style={{ fontSize: 'calc(4vh + 4vw)', fontWeight: 100}}>Amodh</span> {/* 100 is minimum*/}
                  <span className={styles.amodhRight} style={{ fontFamily: '"Tiro Devanagari Hindi", serif', fontSize: 'calc(6vh + 6vw)', fontWeight: 450}}> शर्मा</span>
                {/* </div> */}
              </div>
              <div className={styles.aboutAmodh}>
                <span style={{ fontSize: 'calc(0.65vh + 0.65vw)',fontWeight: 200, display: 'block' }}> A fresher with a knack for aesthetics. With a combined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</span>
                  {/* display: Block - changes the default behavior of inline elements (like <span>) to that of block-level elements. */}
                  {/* <p>A fresher with a knack for aesthetics. With a cobined experience of 0 years, I want to learn and expand in the field of visual and interactive web design</p> */}
                <span style={{ fontSize: 'calc(0.65vh + 0.65vw)',fontWeight: 200, display: 'block', marginTop: '2vw' }}> I value clarity, empathy, and integrity above everything else. They guide my approach to problem solving and life in general.</span>
                  {/* <p>I value clarity, empathy, and integrity above all else. They guide my approach to problem solving and life in general.</p> */}
              </div>
              <div className={styles.leftLinks}>
                <span style={{ fontWeight: 200 }}><a href='#introduction'>00 Introduction</a></span>
                <span style={{ fontWeight: 200, lineHeight: '1.5' }}><a href='#areas-of-interest'>01 Areas of Interest and Design Philosophy</a></span>
                <span style={{ fontWeight: 200, lineHeight: '1.5'}}><a href="#projects-done">02 Projects I've Done</a></span>
                <span style={{ fontWeight: 200, lineHeight: '1.5' }}><a href="#skills">03 Skills I'm Adept With</a></span>
                <span style={{ fontWeight: 200, lineHeight: '1.5' }}><a href='#socials'>04 Socials</a></span>
              </div>
            </div>
        </div>
    );
}
export default StaticOne;