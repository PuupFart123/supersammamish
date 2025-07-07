import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const Data = () => {
  const [headingRef, headingVisible] = useScrollAnimation(0.3);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);

  return (
    <section id="data" style={{
      padding: '80px 20px',
      backgroundColor: '#ffffff',
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
          The Numbers
        </h2>
        <div 
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginTop: '60px',
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <div 
            className="hover-lift pulse-animation"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#3b82f6',
              marginBottom: '10px',
              fontFamily: 'var(--font-clash)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              65,000+
            </div>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#1a1a1a',
              textTransform: 'lowercase',
            }}>
              Residents
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#6b7280',
              textTransform: 'lowercase',
            }}>
              Growing community ready for a central gathering place
            </p>
          </div>
          <div 
            className="hover-lift pulse-animation"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#10b981',
              marginBottom: '10px',
              fontFamily: 'var(--font-clash)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              85%
            </div>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#1a1a1a',
              textTransform: 'lowercase',
            }}>
              Support Rate
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#6b7280',
              textTransform: 'lowercase',
            }}>
              Community survey shows strong backing for town center
            </p>
          </div>
          <div 
            className="hover-lift pulse-animation"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#f59e0b',
              marginBottom: '10px',
              fontFamily: 'var(--font-clash)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              $50M+
            </div>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#1a1a1a',
              textTransform: 'lowercase',
            }}>
              Economic Impact
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#6b7280',
              textTransform: 'lowercase',
            }}>
              Projected annual economic benefit to local businesses
            </p>
          </div>
          <div 
            className="hover-lift pulse-animation"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#8b5cf6',
              marginBottom: '10px',
              fontFamily: 'var(--font-clash)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              15 Min
            </div>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#1a1a1a',
              textTransform: 'lowercase',
            }}>
              Walkable Radius
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#6b7280',
              textTransform: 'lowercase',
            }}>
              Most residents within walking distance of proposed center
            </p>
          </div>
        </div>
        <div 
          ref={contentRef}
          className="hover-scale"
          style={{
            marginTop: '80px',
            padding: '40px',
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            textAlign: 'left',
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
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
            Data-Driven Planning
          </h3>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#4a5568',
            marginBottom: '20px',
            textTransform: 'lowercase',
          }}>
            Our approach is grounded in comprehensive research and community input. 
            We've analyzed traffic patterns, demographic trends, and economic indicators 
            to ensure our town center will meet the real needs of our community.
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#4a5568',
            textTransform: 'lowercase',
          }}>
            The data shows that Sammamish residents are ready for a central gathering place 
            that combines retail, dining, entertainment, and community spaces. This isn't 
            just about building structures—it's about creating the foundation for a more 
            connected, vibrant community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Data; 