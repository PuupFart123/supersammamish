import React, { useState } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const claims = [
  {
    claim: '“High-density housing will worsen traffic and create 20,000–36,000 new daily car trips.”',
    refutation: [
      'While more residents inevitably mean more trips, traffic impact studies often overestimate car trips by not accounting for changing transportation trends (e.g., remote work, carpooling, ridesharing, e-bikes, and public transit).',
      'Studies show that mixed-use development—like town centers—reduces total car dependence by placing housing near shops, offices, and services. This enables walking, biking, and short trips, unlike suburban sprawl.',
      'Mitigation measures such as traffic signal optimization, bus lanes, protected bike infrastructure, and road design improvements can absorb much of this growth without gridlock.'
    ]
  },
  {
    claim: '“Schools are overcrowded and more students will overwhelm them.”',
    refutation: [
      'The Lake Washington School District (LWSD) has a legal obligation to accommodate all students. Adding density doesn\'t immediately cause a school crisis—it triggers planning and mitigation like portables, boundary adjustments, and new school bonds.',
      'LWSD collects impact fees from developers to fund school construction. That funding grows with added housing.',
      'Moreover, the demographic trend in Sammamish is aging—many existing single-family homes will house fewer children over time. Increased density could bring better age and income diversity, which helps maintain school enrollment levels without overburdening.'
    ]
  },
  {
    claim: '“Urbanization threatens nature and will harm lakes, trees, and wildlife.”',
    refutation: [
      'High-density housing preserves more open space than large-lot sprawl. Concentrating growth in the town center avoids spreading development into rural areas, which is more environmentally damaging.',
      'Sammamish has strong environmental codes regarding tree retention, stormwater, and sensitive areas. Any development must comply with strict environmental regulations, including modern stormwater filtration systems that perform better than older infrastructure.',
      'Mixed-use centers encourage walkability, lowering vehicle miles traveled per capita—thus reducing pollution and preserving ecosystems long-term.'
    ]
  },
  {
    claim: '“Utility tax increases are due to mismanagement and bad development deals.”',
    refutation: [
      'Budgetary decisions like the utility tax stem from multiple causes: declining revenue from one-time COVID funds, inflation, and deferred maintenance—not solely from Town Center development.',
      'Buying back land or fixing infrastructure can be a strategic investment that allows the city to regain control over planning and ensure public benefit from development.',
      'Even with a 6% utility tax, Sammamish\'s tax burden remains lower than many other cities in King County. Moreover, new housing adds to the tax base, helping reduce the need for future tax increases.'
    ]
  },
  {
    claim: '“Infrastructure is not ready. We need to fix roads and evacuation routes first.”',
    refutation: [
      'Planning does not mean building everything at once—it means phased, coordinated growth. Sammamish can require that development be contingent on traffic, school, and emergency infrastructure milestones.',
      'The Town Center was envisioned more than a decade ago precisely to provide an orderly, compact growth area. The current plan aligns with Growth Management Act (GMA) goals of reducing urban sprawl, protecting rural areas, and improving sustainability.',
      'The city has tools like transportation impact fees, concurrency planning, and developer mitigation requirements to ensure growth pays for itself.'
    ]
  }
];

const fadeIn = {
  animation: 'fadeInUp 1.4s cubic-bezier(0.33, 1, 0.68, 1)',
  opacity: 1,
};

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 900;
}

const ClaimCard = ({ idx, claim, refutation }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.15);
  const [expanded, setExpanded] = useState(false);
  const isMobile = isMobileDevice();

  const handleToggle = () => {
    if (!isMobile) return;
    setExpanded((v) => !v);
  };

  return (
    <div
      ref={cardRef}
      className={`claim-card${cardVisible ? ' visible' : ''}`}
      style={{ ...fadeIn, animationDelay: `${0.18 + idx * 0.16}s` }}
    >
      <div
        className="claim-left"
        onClick={handleToggle}
        tabIndex={isMobile ? 0 : -1}
        aria-expanded={isMobile ? expanded : true}
        aria-controls={`response-${idx}`}
        style={{ cursor: isMobile ? 'pointer' : 'default' }}
      >
        <span className="claim-icon" aria-label="claim">❗</span>
        <span className="claim-label">Claim {idx + 1}:</span>
        <span className="claim-text">{claim}</span>
        {isMobile && (
          <span className="expand-toggle">{expanded ? '▲' : '▼'}</span>
        )}
      </div>
      {(!isMobile || expanded) && (
        <div
          className="response-right"
          id={`response-${idx}`}
          style={{
            transition: 'none',
            maxHeight: 'none',
            opacity: 1,
            overflow: 'visible',
          }}
        >
          <div className="response-label">Our Response:</div>
          <ul className="response-list">
            {refutation.map((point, i) => (
              <li key={i} style={{ marginBottom: 8 }}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const RefutingSaveOurSammamish = () => {
  return (
    <section id="refuting-saveoursammamish" style={{
      background: '#1a1a1a',
      padding: '80px 20px',
      borderTop: '2px solid #23272f',
      borderBottom: '2px solid #23272f',
      textAlign: 'center',
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { color: #3b82f6; }
          50% { color: #2563eb; }
        }
        .claim-card {
          transition: box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
          border-radius: 18px;
          background: #23272f;
          margin-bottom: 40px;
          padding: 0;
          text-align: left;
          display: flex;
          align-items: stretch;
          position: relative;
          min-height: 180px;
          overflow: hidden;
        }
        .claim-card.visible {
          opacity: 1;
          transform: none;
          animation: fadeInUp 1.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .claim-card:not(.visible) {
          opacity: 0;
          transform: translateY(12px);
        }
        .claim-card:hover {
          box-shadow: 0 8px 32px rgba(59,130,246,0.18);
          transform: translateY(-2px) scale(1.012);
        }
        .claim-left {
          background: #23272f;
          min-width: 0;
          flex: 1.1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 36px 28px 36px 32px;
          border-right: 1.5px solid #2d3748;
          cursor: pointer;
        }
        .claim-icon {
          font-size: 2.2rem;
          margin-bottom: 10px;
          color: #ef4444;
          flex-shrink: 0;
        }
        .claim-label {
          font-family: var(--font-clash);
          font-size: 1.35rem;
          color: #ef4444;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: 0.01em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .claim-text {
          font-family: var(--font-inter);
          font-size: 1.18rem;
          color: #e2e8f0;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 0;
        }
        .response-right {
          background: #23272f;
          flex: 1.6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 36px 36px 36px 32px;
        }
        .response-label {
          font-family: var(--font-clash);
          font-size: 1.35rem;
          color: #3b82f6;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: 0.01em;
          animation: pulse 1.2s infinite;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .response-list {
          font-family: var(--font-inter);
          font-size: 1.07rem;
          color: #fff;
          margin-left: 0;
          padding-left: 22px;
          margin-bottom: 0;
          line-height: 1.7;
        }
        .petition-btn {
          display: inline-block;
          margin-bottom: 38px;
          margin-top: 8px;
          padding: 18px 38px;
          font-family: var(--font-clash);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(90deg, #3b82f6 60%, #2563eb 100%);
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(59,130,246,0.10);
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .petition-btn:hover {
          background: linear-gradient(90deg, #2563eb 60%, #3b82f6 100%);
          box-shadow: 0 6px 32px rgba(59,130,246,0.18);
          transform: translateY(-2px) scale(1.03);
        }
        .expand-toggle {
          display: none;
        }
        @media (max-width: 900px) {
          .claim-card { flex-direction: column; min-height: 0; }
          .claim-left, .response-right { border-right: none; border-bottom: 1.5px solid #2d3748; padding: 28px 16px 18px 16px; }
          .response-right { border-bottom: none; padding-top: 0; }
          .expand-toggle {
            display: inline-block;
            font-size: 1.2rem;
            color: #3b82f6;
            margin-left: 8px;
            cursor: pointer;
            user-select: none;
          }
        }
        @media (max-width: 600px) {
          .claim-card { margin-bottom: 28px; }
          .claim-left, .response-right { padding: 18px 8px 12px 8px; }
          .claim-label { font-size: 1.13rem; }
          .claim-text { font-size: 1.01rem; }
          .response-label { font-size: 1.13rem; }
          .response-list { font-size: 0.98rem; }
          .petition-btn { font-size: 1.05rem; padding: 14px 18px; }
        }
      `}</style>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-clash)',
          fontSize: '2.6rem',
          fontWeight: 700,
          marginBottom: '18px',
          color: '#fff',
          letterSpacing: '-0.01em',
          textShadow: '0 2px 12px rgba(0,0,0,0.13)'
        }}>
          Addressing <a href="https://saveoursammamish.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline', fontFamily: 'var(--font-clash)' }}>saveoursammamish.com</a>'s Claims
        </h2>
        {claims.map((item, idx) => (
          <ClaimCard key={idx} idx={idx} claim={item.claim} refutation={item.refutation} />
        ))}
      </div>
    </section>
  );
};

export default RefutingSaveOurSammamish; 