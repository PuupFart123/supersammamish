import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Contact Form Submission from Super Sammamish Website');
      const body = encodeURIComponent(`
Name: ${formData.name}
Message: ${formData.message}

---
This message was sent from the Super Sammamish website contact form.
      `);
      
      const mailtoLink = `mailto:supersammamish@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-clash)',
          fontSize: '3rem',
          fontWeight: '600',
          marginBottom: '40px',
          color: '#1a1a1a'
        }}>
          Get in Touch
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          marginTop: '60px'
        }}>
          <div style={{
            textAlign: 'left'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#1a1a1a',
              textTransform: 'lowercase',
            }}>
              Contact Information
            </h3>
            <div style={{
              marginBottom: '30px'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}>
                Email
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                color: '#4a5568',
                textTransform: 'lowercase',
              }}>
                supersammamish@gmail.com
              </p>
            </div>
            <div style={{
              marginBottom: '30px'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}>
                Phone
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                color: '#4a5568',
                textTransform: 'lowercase',
              }}>
                (425) 738-2825 or (425) 295-4118
              </p>
            </div>
            <div style={{
              marginBottom: '30px'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1a1a1a',
                textTransform: 'lowercase',
              }}>
                Address
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                color: '#4a5568',
                lineHeight: '1.6',
                textTransform: 'lowercase',
              }}>
                sammamish, wa
              </p>
            </div>
          </div>
          <div style={{
            textAlign: 'left'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#1a1a1a'
            }}>
              send us a message
            </h3>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: '#1a1a1a'
                }}>
                  Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: '#ffffff',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: '#1a1a1a'
                }}>
                  Message
                </label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: '#ffffff',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '16px 32px',
                  backgroundColor: isSubmitting ? '#9ca3af' : '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  alignSelf: 'flex-start',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}>
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid #a7f3d0'
                }}>
                  ✓ Email client opened! Please send the message to complete your submission.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#fee2e2',
                  color: '#991b1b',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid #fca5a5'
                }}>
                  ✗ There was an error. Please try again or email us directly at supersammamish@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 