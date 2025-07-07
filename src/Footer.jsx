import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      padding: '60px 20px 30px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Super Sammamish
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#a0aec0',
              marginBottom: '20px'
            }}>
              Building a vibrant town center for the Sammamish community. 
              Join us in creating a place where neighbors connect and thrive.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
              }}>
                📧
              </a>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
              }}>
                📱
              </a>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
              }}>
                📘
              </a>
            </div>
          </div>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['About Us', 'Our Vision', 'Benefits', 'Get Involved', 'Contact'].map((item, index) => (
                <li key={index} style={{
                  marginBottom: '10px'
                }}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#a0aec0',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    textTransform: 'lowercase',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#a0aec0';
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Resources
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Project Timeline', 'Meeting Schedule', 'Survey Results', 'FAQ', 'Newsletter'].map((item, index) => (
                <li key={index} style={{
                  marginBottom: '10px'
                }}>
                  <a href="#" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#a0aec0',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    textTransform: 'lowercase',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#a0aec0';
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Contact Info
            </h4>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#a0aec0',
              lineHeight: '1.6',
              textTransform: 'lowercase',
            }}>
              <p style={{ marginBottom: '10px' }}>
                📧 supersammamish@gmail.com
              </p>
              <p style={{ marginBottom: '10px' }}>
                📞 (425) 555-0123
              </p>
              <p>
                📍 Sammamish, WA 98075
              </p>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #2d3748',
          paddingTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            color: '#718096',
            margin: 0,
            textTransform: 'lowercase',
          }}>
            © 2025 Super Sammamish. All rights reserved. | 
            <a href="#" style={{
              color: '#718096',
              textDecoration: 'none',
              marginLeft: '10px',
              textTransform: 'lowercase',
            }}>
              Privacy Policy
            </a> | 
            <a href="#" style={{
              color: '#718096',
              textDecoration: 'none',
              marginLeft: '10px',
              textTransform: 'lowercase',
            }}>
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 