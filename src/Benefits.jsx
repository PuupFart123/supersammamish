import React, { useRef, useEffect, useState } from 'react';

const Benefits = () => {
  const sectionRef = useRef(null);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowQuote(true);
        }
      },
      { threshold: 0.3 }
    );
    const refCurrent = sectionRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '80px 20px',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes rainbowGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-glow {
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
          opacity: 0;
          filter: blur(18px);
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .benefit-card:hover .rainbow-glow {
          opacity: 0.7;
          animation: rainbowGlow 10s ease-in-out infinite;
        }
        .benefit-card {
          position: relative;
          z-index: 1;
          overflow: visible;
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1);
          background: rgba(255,255,255,0.05);
        }
        .benefit-card:hover {
          transform: translateY(-4px) scale(1.025);
          box-shadow: 0 6px 32px rgba(59,130,246,0.10);
        }
      `}</style>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-clash)',
          fontSize: '3rem',
          fontWeight: '600',
          marginBottom: '40px',
          color: '#ffffff',
          letterSpacing: '0.04em',
        }}>
          WHY A TOWN CENTER?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '60px',
        }}>
          <div className="benefit-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              community connection
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#e2e8f0',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              create meaningful relationships and strengthen our community bonds through shared experiences and gathering spaces.
            </p>
          </div>
          <div className="benefit-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              local economy
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#e2e8f0',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              support local businesses and create jobs while reducing the need to travel outside our community for daily needs.
            </p>
          </div>
          <div className="benefit-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              quality of life
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#e2e8f0',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              enjoy walkable neighborhoods, cultural events, and recreational opportunities right in our own backyard.
            </p>
          </div>
          <div className="benefit-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              environmental impact
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#e2e8f0',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              reduce car dependency and carbon footprint with centralized amenities and sustainable transportation options.
            </p>
          </div>
        </div>
      </div>
      {/* Animated Quote */}
      <div
        style={{
          position: 'absolute',
          right: '3vw',
          bottom: '2vw',
          zIndex: 2,
          fontFamily: 'var(--font-clash)',
          fontStyle: 'italic',
          fontSize: '1.35rem',
          color: '#fff',
          opacity: showQuote ? 1 : 0,
          transform: showQuote ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s cubic-bezier(.4,0,.2,1), transform 1s cubic-bezier(.4,0,.2,1)',
          pointerEvents: 'none',
          maxWidth: '350px',
          textAlign: 'right',
          textTransform: 'lowercase',
        }}
      >
        sammamish is boring. lets change that.
      </div>
    </section>
  );
};

export default Benefits; 