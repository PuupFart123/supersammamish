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
        <style>{`
          @keyframes rainbowGlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .rainbow-glow-wrapper {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .rainbow-glow-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 120%;
            height: 120%;
            transform: translate(-50%, -50%);
            z-index: 0;
            border-radius: 20px;
            background: linear-gradient(270deg, #ff5e62, #ff9966, #f9d423, #a8e063, #43cea2, #1976d2, #9d50bb, #ff5e62);
            background-size: 1600% 1600%;
            animation: rainbowGlow 10s ease-in-out infinite;
            opacity: 0.7;
            filter: blur(18px);
            pointer-events: none;
          }
          .rainbow-petition-button {
            position: relative;
            display: inline-block;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 12px;
            padding: 1rem 2.5rem;
            font-size: 1.15rem;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #fff;
            background: rgba(255,255,255,0.18);
            text-shadow: 0 1px 2px rgba(0,0,0,0.18);
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            z-index: 1;
            transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
            overflow: visible;
            min-width: 200px;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            text-transform: lowercase;
          }
          .rainbow-petition-button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          }
        `}</style>
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
              fontSize: '1.15rem',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              textAlign: 'center',
              textTransform: 'lowercase',
            }}
          >
            learn more
          </a>
          <div className="rainbow-glow-wrapper" style={{margin: '0 0.5rem'}}>
            <div className="rainbow-glow-bg" />
            <a 
              href="https://chng.it/R2Z2twzTFH" 
              target="_blank"
              rel="noopener noreferrer"
              className="rainbow-petition-button hover-lift hover-scale"
            >
              sign our petition
            </a>
          </div>
        </div>
      </div>
  </>
);
};

export default Hero; 