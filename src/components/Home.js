import React from "react";
import heroImage from '../styles/heroImage.jpg'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='hero-section'>
        <img
          className='hero-image'
          src={heroImage}
          alt='me!'
        />
         <div className='hero-overlay'>
        <h1>Mary</h1>
        <p>Webby</p>
      </div>
    </div>
  );
}