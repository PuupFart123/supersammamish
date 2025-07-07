import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const Vision = () => {
  const [headingRef, headingVisible] = useScrollAnimation(0.3);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.2);

  return (
    <section id="vision" style={{
      position: 'relative',
      padding: '80px 20px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Decorative background image */}
      <img 
        src="/beaverlake.png" 
        alt="Beaver Lake background" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 
          ref={headingRef}
          style={{
            fontFamily: 'var(--font-clash)',
            fontSize: '3rem',
            fontWeight: '600',
            marginBottom: '40px',
            color: '#1a1a1a',
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Our Vision
        </h2>
        <div 
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginTop: '60px',
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <div 
            className="vision-card hover-lift"
            style={{
              padding: '40px',
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              textAlign: 'left',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h3 
              className="float-animation"
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}
            >
              Community Hub
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568',
              textTransform: 'lowercase',
              background: 'transparent',
              border: 'none',
              padding: 0,
            }}>
              A central gathering place where residents can connect, celebrate, and build 
              lasting relationships. From farmers markets to cultural events, this will be 
              the heart of our community.
            </p>
          </div>
          <div 
            className="vision-card hover-lift"
            style={{
              padding: '40px',
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              textAlign: 'left',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h3 
              className="float-animation"
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}
            >
              Sustainable Design
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568',
              textTransform: 'lowercase',
              background: 'transparent',
              border: 'none',
              padding: 0,
            }}>
              Thoughtful architecture that respects our natural surroundings while creating 
              beautiful, functional spaces. Green building practices and energy efficiency 
              will be at the core of our design.
            </p>
          </div>
          <div 
            className="vision-card hover-lift"
            style={{
              padding: '40px',
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              textAlign: 'left',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h3 
              className="float-animation"
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}
            >
              Economic Vitality
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568',
              textTransform: 'lowercase',
              background: 'transparent',
              border: 'none',
              padding: 0,
            }}>
              Supporting local businesses and creating opportunities for entrepreneurs. 
              A thriving commercial district that serves both residents and visitors 
              while maintaining our community's character.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision; 