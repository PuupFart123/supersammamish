import React from 'react';

const Support = () => {
  return (
    <section id="support" style={{
      position: 'relative',
      padding: '80px 20px',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Decorative background image */}
      <img
        src="/Sammamish-Commons-Sunset.jpg"
        alt="Sammamish Commons Sunset background"
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
        .support-card:hover .rainbow-glow {
          opacity: 0.7;
          animation: rainbowGlow 10s ease-in-out infinite;
        }
        .support-card {
          position: relative;
          z-index: 1;
          overflow: visible;
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1);
          background: rgba(255,255,255,0.1);
        }
        .support-card:hover {
          transform: translateY(-4px) scale(1.025);
          box-shadow: 0 6px 32px rgba(59,130,246,0.10);
        }
      `}</style>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-clash)',
          fontSize: '3rem',
          fontWeight: '600',
          marginBottom: '30px',
          color: '#ffffff'
        }}>
          Show Your Support
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          marginBottom: '40px',
          color: '#e2e8f0',
          textTransform: 'lowercase',
        }}>
          Join thousands of Sammamish residents who are ready for a vibrant town center. 
          Your voice matters in shaping the future of our community.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://chng.it/R2Z2twzTFH"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 32px',
              backgroundColor: '#ffffff',
              color: '#3b82f6',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}>
            Sign the Petition
          </a>
          <a
            href="https://www.sammamish.us/government/city-council/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}>
            Attend Meetings
          </a>
        </div>
        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div className="support-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              Stay Informed
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
              Get updates on project progress, upcoming meetings, and ways to get involved.
            </p>
          </div>
          <div className="support-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              Share Your Ideas
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
              Help shape the vision for our town center with your feedback and suggestions.
            </p>
          </div>
          <div className="support-card" style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'visible',
          }}>
            <div className="rainbow-glow" />
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ffffff',
              textTransform: 'lowercase',
              position: 'relative',
              zIndex: 1,
            }}>
              Spread the Word
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
              Tell your neighbors and friends about the benefits of a town center.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support; 