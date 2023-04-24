import React, {useEffect, useState} from "react";
import heroImage from '../styles/heroImage.jpg'
import '../styles/Home.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
    return (
        <div className='hero-section'>
        <img
          className='hero-image'
          src={heroImage}
          alt='me!'
        />
         <div className='hero-overlay'>
        {showHeader && <h1>Header</h1>}
        <h1>Mary</h1>
        <p>Webby</p>
      </div>
    </div>
  );
}