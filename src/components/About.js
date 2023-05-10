import React, { useEffect, useState } from 'react';
import '../styles/About.css'

export default function About() {

    useEffect(() => {
        const handleScroll = () => {
          const elem = document.querySelector('.aboutText', 'aboutHeader');
          if (elem) {
            const elemTop = elem.getBoundingClientRect().top;
            const elemBottom = elem.getBoundingClientRect().bottom;
            const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            setFadeIn(isVisible);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const [fadeIn, setFadeIn] = useState(true);

    return (
      <div className="aboutMe">
        <div className={`aboutHeader ${fadeIn ? 'fade-in' : ''}`}>Full Stack Web Developer - With a Certificate from Michigan State University.</div>
        <div className={`aboutText ${fadeIn ? 'fade-in' : ''}`}>
          Since Graduating from Michigan State in 2022 with a Bachlors in Kinesiology and a Minor in Health Promotion, I have found a recent 
          love with coding! 

          Growing up, I was always a creative child, finding my passions in singing and crotching. And with coding, I find this new outlet to be just as rewarding. 

          I hope I can continue this imaginative mindset with a career in where being creative is an asset!

          </div>
        </div>
    );
  }