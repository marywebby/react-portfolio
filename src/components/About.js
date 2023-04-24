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
        <div className={`aboutHeader ${fadeIn ? 'fade-in' : ''}`}>Lorem ipsum dolor</div>
        <div className={`aboutText ${fadeIn ? 'fade-in' : ''}`}>`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?`</div>
        </div>
    );
  }