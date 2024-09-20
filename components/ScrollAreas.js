import React from 'react';
import styles from '../src/app/page.module.css';
import areaStyles from './ScrollAreas.module.css';

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
            <div className={areaStyles.MainAreas}>  
                <div className={areaStyles.MainAreasAreas}>
                  {/* AREAS */}
                  <p>Being an individual with a strong sense of design and modernistic approach, I often tend to gravitate towards spending more time and effort in proper UI-UX research. In simple terms UI is what we see and UX refers to the outcome of what happens when we interact with what we see. Both incredibly necessary. </p>
                  <p>With my prior work with kids having special needs, I felt the sense of making my design more accessible and universally navigable, so that everyone operates on them without any issues. I'm incredibly thoughtful about the intent of my design and the design elements. </p>
                  <p>The success of a webpage/application is inversely proportional to the number of clicks that the user has to make from the initial interaction to getting their work done. This is the reason why a lot of my designs use a lot of gestures, rather than simple clicks, it makes the user feel like a part of the entire process.</p>
                  <p>Being modernistic doesn't mean that I forget my roots, I'm still a big advocate of using the same old basic technologies with next to none additional libraries. The closer to the holy trio ( HTML, CSS, JS) the better. One framework that I see myself gravitating towards is React. Not only the component structure feature makes it incredibly easy for me to manage my codebase, its almost intuitive and keeps organization and reusability at peak.</p>
                </div>
                <div className={areaStyles.MainAreasPhilosophy}>
                  <p>Have you ever seen a ticket booking website? All the information on the screen makes my head go round. Well, my approach to design is COMPLETELY opposite, the website should be fun to navigate, not a chore to get through. The content on the page should flow almost instantly and the user should be able to connect the what to do and go where they want to. All while maintaining a sweet spot of not less and not excessive content on the screen.</p>
                  <p>The whole idea of design revolves around the user and their comfort, all the areas should be according to the user's perception of the element and the task at hand. One of the best website that I have come across is of Apple. Honestly the frontend developers at apple know what they're doing (if one of you is reading this, can I get a referral please?)</p>
                  <p>With the current user trend of utility over ornamentation and minimalism, one might think there is not much room to wiggle around, on the contrary, all I see is an endless open boundary that one can prance around. The prancing becomes even more enjoyable when you're with others that share the same ideas. Sometimes all you need is a team that believe an achieves. </p>
                </div>
            </div>
    </section>
  );
}

export default ScrollAreas;