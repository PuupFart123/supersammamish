import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const About = () => {
  const [headingRef, headingVisible] = useScrollAnimation(0.3);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" style={{
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
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
          About Us
        </h2>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div 
            ref={imageRef}
            className="hover-scale"
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '500px',
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s',
            }}
          >
            <img 
              src="/aboutus.png" 
              alt="Sammamish Town Center" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
            />
          </div>
          <div 
            ref={contentRef}
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '500px',
              textAlign: 'left',
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.4s',
            }}
          >
            <h3 
              className="float-animation"
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}
            >
              Building Community Together
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568',
              marginBottom: '20px',
              textTransform: 'lowercase',
            }}>
              We are a community-driven initiative dedicated to creating a vibrant town center 
              that reflects the unique character and values of Sammamish. Our vision is to 
              transform our city into a place where residents can gather, connect, and thrive.
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568',
              textTransform: 'lowercase',
            }}>
              Through thoughtful planning, sustainable design, and community engagement, 
              we're working to create a town center that will serve as the heart of our 
              community for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 