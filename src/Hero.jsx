import React from 'react';
import Banner from './Banner';
import { useScrollAnimation } from './useScrollAnimation';
import './banner.css';

const Hero = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.1);

  return (
  <>
    <Banner>
        <h1 
          ref={titleRef}
          style={{
        color: 'white',
            fontFamily: 'var(--font-clash)',
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 700,
        textAlign: 'center',
        textShadow: '0 4px 24px rgba(0,0,0,0.18)',
        letterSpacing: '-0.03em',
        margin: 0,
        lineHeight: 1.1,
        width: '100%',
            zIndex: 2,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
        Building Sammamish's Future
      </h1>
    </Banner>
      <div 
        ref={contentRef}
        style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: '2.5rem',
      marginBottom: '2.5rem',
          zIndex: 3,
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.2s',
        }}
      >
        <span 
          className="float-animation"
          style={{
        fontSize: '1.5rem',
        fontWeight: 400,
        color: '#1D1D1F',
        marginBottom: '1.5rem',
            fontFamily: 'var(--font-clash)',
            textTransform: 'lowercase',
          }}
        >
        A vibrant town center for everyone
      </span>
      <p style={{
        color: '#86868B',
          fontFamily: 'var(--font-inter)',
        fontSize: '1.25rem',
        margin: '1rem 0 2rem',
        maxWidth: 600,
          lineHeight: 1.7,
          textTransform: 'lowercase',
      }}>
        Join us in creating a sustainable, inclusive community that provides housing diversity, economic opportunity, and a gathering place for all Sammamish residents.
      </p>
        <div 
          ref={buttonRef}
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.4s',
          }}
        >
          <a 
            href="#vision" 
            className="hover-lift hover-scale"
            style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          borderRadius: '12px',
          background: '#007AFF',
          color: 'white',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              textTransform: 'lowercase',
            }}
          >
            Learn More
          </a>
          <a 
            href="#support" 
            className="hover-lift hover-scale"
            style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          borderRadius: '12px',
          background: 'rgba(0,122,255,0.08)',
          color: '#007AFF',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
          border: '2px solid #007AFF',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              textTransform: 'lowercase',
            }}
          >
            Get Involved
          </a>
        </div>
      </div>
  </>
);
};

export default Hero; 