import React, { useEffect, useState } from 'react';
import './aboutView.scss';

const AboutView = () => {
  const [text, setText] = useState('');
  const fullText = "I  Berdiyev Ibrohimbek, a professional web developer with experience in web programming.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[i]);
      i += 1;
      if (i === fullText.length) {
        i = 0;
        setText('');
      }
    }, 150); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className='about-title'>About Me</h2>
        <p className='about-text'>{text}</p>
      </div>
    </section>
  );
};

export default AboutView
