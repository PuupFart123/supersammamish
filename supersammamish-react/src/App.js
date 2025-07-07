import React from 'react';
import Hero from './Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #D2D2D7',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 80
        }}>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#007AFF',
              margin: 0
            }}>Super Sammamish</h1>
          </div>
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <a href="#vision" style={{
              textDecoration: 'none',
              color: '#1D1D1F',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>Vision</a>
            <a href="#benefits" style={{
              textDecoration: 'none',
              color: '#1D1D1F',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>Benefits</a>
            <a href="#data" style={{
              textDecoration: 'none',
              color: '#1D1D1F',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>Data</a>
            <a href="#support" style={{
              textDecoration: 'none',
              color: '#1D1D1F',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>Support</a>
            <a href="#contact" style={{
              textDecoration: 'none',
              color: '#1D1D1F',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <section id="vision" style={{
        background: '#F5F5F7',
        padding: '100px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: '#1D1D1F',
              fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }}>Our Vision for Sammamish</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868B'
            }}>Envisioning our city at age 50 - just 24 years from now</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏙️</div>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Vibrant Town Center</h3>
              <p style={{ color: '#86868B' }}>Alive with activity even after 9pm, with open spaces connected to 100+ acres of public land on the Plateau.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚌</div>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Modern Transportation</h3>
              <p style={{ color: '#86868B' }}>Driverless shuttles circulating throughout the city, connecting to light rail and adjoining cities.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏠</div>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Balanced Housing</h3>
              <p style={{ color: '#86868B' }}>A plethora of affordable units built alongside market-priced units of different sizes and types.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>👴</div>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Senior Living</h3>
              <p style={{ color: '#86868B' }}>Seniors who would love to downsize into view condos, with housing options for every stage of life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{
        background: 'white',
        padding: '100px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: '#1D1D1F',
              fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }}>Why Support the Town Center?</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868B'
            }}>Data-driven benefits for our community</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{
                  marginBottom: '1rem',
                  color: '#1D1D1F',
                  fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
                }}>Economic Growth</h3>
                <p style={{ color: '#86868B' }}>With the highest impact fees in the state, a denser Town Center of 4,000 units would generate over $50 million in transportation and parks impact fees alone.</p>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{
                  marginBottom: '1rem',
                  color: '#1D1D1F',
                  fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
                }}>Environmental Advantages</h3>
                <p style={{ color: '#86868B' }}>Taller buildings mean less impervious surfaces, more open space, and environmental benefits while creating opportunities for public spaces with awesome Plateau views.</p>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{
                  marginBottom: '1rem',
                  color: '#1D1D1F',
                  fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
                }}>Affordable Housing</h3>
                <p style={{ color: '#86868B' }}>More affordable housing units offset by high-end upper-level condos, with possibly subsidized main floor retail.</p>
              </div>
              <div>
                <h3 style={{
                  marginBottom: '1rem',
                  color: '#1D1D1F',
                  fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
                }}>Infrastructure Investment</h3>
                <p style={{ color: '#86868B' }}>All roads and sidewalks put in by developers at their expense, plus additional fees and charges that benefit the entire community.</p>
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#007AFF',
                  marginBottom: '0.5rem'
                }}>$50M+</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#86868B',
                  fontWeight: 500
                }}>Impact Fees</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#007AFF',
                  marginBottom: '0.5rem'
                }}>4,000</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#86868B',
                  fontWeight: 500
                }}>Housing Units</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#007AFF',
                  marginBottom: '0.5rem'
                }}>600K</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#86868B',
                  fontWeight: 500
                }}>Commercial Sq Ft</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#007AFF',
                  marginBottom: '0.5rem'
                }}>10%</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#86868B',
                  fontWeight: 500
                }}>Affordable Housing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" style={{
        background: '#FAFAFA',
        padding: '100px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: '#1D1D1F',
              fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }}>Data-Driven Discussion</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868B'
            }}>Let's look at the facts, not social media histrionics</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Traffic Congestion Reality</h3>
              <p style={{ color: '#86868B' }}>Compare congestion in Sammamish with Issaquah, Redmond, Bellevue, Kirkland, and Bothell - all cities on state highways that often become parking lots. The 2007 Town Center Environmental Impact Statement traffic projections should be adjusted with current data, showing that a much denser Town Center can be accommodated without our transportation system failing.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Student Generation Rates</h3>
              <p style={{ color: '#86868B' }}>Look at the actual data on student generation rates for multifamily projects. Note the declining grade school numbers. The data supports that multifamily housing has lower student generation rates than single-family homes.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Growth Pays for Growth</h3>
              <p style={{ color: '#86868B' }}>In the first 20 years of Sammamish, growth clearly paid for growth, even with the majority of development being single-family neighborhoods. The highest impact fees in the state ensure that new development contributes to community infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" style={{
        background: 'white',
        padding: '100px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: '#1D1D1F',
              fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }}>Get Involved</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868B'
            }}>Support the future of Sammamish</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '1rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Stay Informed</h3>
              <p style={{
                marginBottom: '2rem',
                color: '#86868B'
              }}>Join our community of supporters and stay updated on town center developments.</p>
              <form>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input type="text" placeholder="Your Name" required style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #D2D2D7',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input type="email" placeholder="Your Email" required style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #D2D2D7',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea placeholder="Your Message (Optional)" rows="4" style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #D2D2D7',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}></textarea>
                </div>
                <button type="submit" style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  background: '#007AFF',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer'
                }}>Join Us</button>
              </form>
            </div>
            <div>
              <h3 style={{
                marginBottom: '1.5rem',
                color: '#1D1D1F',
                fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
              }}>Ways to Support</h3>
              <ul style={{
                listStyle: 'none',
                marginBottom: '2rem'
              }}>
                <li style={{
                  padding: '0.75rem 0',
                  color: '#86868B',
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>✓ Attend city council meetings</li>
                <li style={{
                  padding: '0.75rem 0',
                  color: '#86868B',
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>✓ Share factual information</li>
                <li style={{
                  padding: '0.75rem 0',
                  color: '#86868B',
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>✓ Contact your representatives</li>
                <li style={{
                  padding: '0.75rem 0',
                  color: '#86868B',
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>✓ Join community discussions</li>
                <li style={{
                  padding: '0.75rem 0',
                  color: '#86868B',
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>✓ Support data-driven decisions</li>
              </ul>
              <div style={{
                background: '#007AFF',
                color: 'white',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h4 style={{
                  marginBottom: '0.5rem',
                  color: 'white'
                }}>Ready to build our future?</h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>Let's create a Sammamish that works for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: '#F5F5F7',
        padding: '100px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: '#1D1D1F',
              fontFamily: 'Clash Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }}>Contact Us</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868B'
            }}>Have questions? We'd love to hear from you</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '0.5rem',
                color: '#1D1D1F'
              }}>Email</h3>
              <p style={{ color: '#86868B' }}>info@supersammamish.org</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '0.5rem',
                color: '#1D1D1F'
              }}>Follow Us</h3>
              <p style={{ color: '#86868B' }}>Stay updated on social media</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                marginBottom: '0.5rem',
                color: '#1D1D1F'
              }}>Meetings</h3>
              <p style={{ color: '#86868B' }}>Join us at city council meetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1D1D1F',
        color: 'white',
        padding: '4rem 0 2rem',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{
                marginBottom: '1rem',
                color: 'white'
              }}>Super Sammamish</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)'
              }}>Building a vibrant, inclusive community for all Sammamish residents.</p>
            </div>
            <div>
              <h4 style={{
                marginBottom: '1rem',
                color: 'white'
              }}>Quick Links</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#vision" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Our Vision</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#benefits" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Benefits</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#data" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Data & Facts</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#support" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Get Involved</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{
                marginBottom: '1rem',
                color: 'white'
              }}>Resources</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Town Center Plan</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Environmental Impact</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>City Council Info</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none'
                  }}>Community Meetings</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            <p>&copy; 2024 Super Sammamish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;