import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Data', href: '#data' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ];

  // Choose logo based on scroll state
  const logoSrc = isScrolled ? '/logo-black.png' : '/logo-white.png';

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <img 
            src={logoSrc}
            alt="Super Sammamish Logo" 
            style={{
              height: '50px',
              width: 'auto',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          <span style={{
            fontFamily: 'var(--font-clash)',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginLeft: '15px',
            color: isScrolled ? '#1a1a1a' : '#ffffff',
            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            Super Sammamish
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                fontWeight: '500',
                color: isScrolled ? '#1a1a1a' : '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'lowercase',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#007AFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = isScrolled ? '#1a1a1a' : '#ffffff';
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: isScrolled ? '#1a1a1a' : '#ffffff',
            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#1a1a1a',
                textDecoration: 'none',
                transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'lowercase',
                padding: '10px 0',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#007AFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1a1a1a';
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -1,
          }}
        />
      )}
    </nav>
  );
};

export default Navbar; 