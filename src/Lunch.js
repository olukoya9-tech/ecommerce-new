import React from 'react';

const gold = '#D4AF37';
const terracotta = '#C04000';

const Lunch = ({ menuData, whatsappNumber }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#000', color: '#fff' }}>
      
      {/* 1. INTRO (Value Proposition) */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '10px' }}>
        <h2 style={{ color: gold, fontSize: '1.8rem', fontWeight: '900', marginBottom: '10px', lineHeight: '1.2' }}>
          “Never worry about lunch during work again.”
        </h2>
        <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>
          We deliver lunch daily (Mon–Fri). Perfect for busy professionals in Lagos.
        </p>
      </div>

      {/* 2. HOW IT WORKS */}
      <h3 style={{ color: terracotta, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px', fontWeight: '800' }}>HOW IT WORKS</h3>
      <div style={{ display: 'grid', gap: '15px', marginBottom: '40px' }}>
        {[
          { s: "1", t: "Choose a plan", d: "Select a weekly or monthly subscription." },
          { s: "2", t: "Pick from our menu", d: "Stick to our daily specials or customize your protein." },
          { s: "3", t: "We deliver daily", d: "Your hot lunch arrives at your desk like clockwork." }
        ].map(step => (
          <div key={step.s} style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#111', padding: '20px', borderRadius: '18px', border: '1px solid #1a1a1a' }}>
            <div style={{ backgroundColor: terracotta, width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.9rem', flexShrink: 0 }}>
              {step.s}
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>{step.t}</h4>
              <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#888', lineHeight: '1.4' }}>{step.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. PLANS / SUBSCRIPTION */}
      <h3 style={{ color: terracotta, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px', fontWeight: '800' }}>SUBSCRIPTION PLANS</h3>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
        {/* Weekly Plan */}
        <div style={{ flex: 1, padding: '25px 15px', background: '#111', borderRadius: '22px', border: `1px solid #333`, textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', fontWeight: '700' }}>Weekly</h4>
          <p style={{ fontSize: '0.7rem', color: '#888', marginBottom: '10px' }}>Mon — Fri</p>
          <div style={{ color: gold, fontWeight: '900', fontSize: '1.4rem', marginBottom: '20px' }}>₦17,500</div>
          <button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I want to subscribe to the Weekly Office Lunch Plan`)}
            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', backgroundColor: terracotta, color: '#fff', fontWeight: '900', fontSize: '0.8rem', cursor: 'pointer' }}
          >
            SUBSCRIBE
          </button>
        </div>

        {/* Monthly Plan */}
        <div style={{ flex: 1, padding: '25px 15px', background: '#111', borderRadius: '22px', border: `2px solid ${gold}`, textAlign: 'center', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: gold, color: '#000', fontSize: '0.65rem', fontWeight: '900', padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>BEST VALUE</span>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', fontWeight: '700' }}>Monthly</h4>
          <p style={{ fontSize: '0.7rem', color: '#888', marginBottom: '10px' }}>Full Month</p>
          <div style={{ color: gold, fontWeight: '900', fontSize: '1.4rem', marginBottom: '20px' }}>₦65,000</div>
          <button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I want to subscribe to the Monthly Office Lunch Plan`)}
            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', backgroundColor: gold, color: '#000', fontWeight: '900', fontSize: '0.8rem', cursor: 'pointer' }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* 4. MENU OPTIONS (Horizontal Scroll) */}
      <h3 style={{ color: terracotta, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px', fontWeight: '800' }}>SAMPLE MEALS</h3>
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '10px', scrollbarWidth: 'none' }}>
        {menuData.map((item) => (
          <div key={item.day} style={{ minWidth: '180px', background: '#111', padding: '20px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
            <p style={{ color: terracotta, fontWeight: '900', margin: '0 0 8px 0', fontSize: '0.75rem' }}>{item.day.toUpperCase()}</p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#eee' }}>{item.meal}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '45px' }}>
        “You can customize your menu”
      </p>

      {/* 5. IMPORTANT RULES */}
      <div style={{ padding: '25px', backgroundColor: '#080808', borderRadius: '25px', border: '1px dashed #333' }}>
        <h3 style={{ color: '#ff4444', fontSize: '0.8rem', fontWeight: '900', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ⚠️ IMPORTANT RULES
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#999', fontSize: '0.85rem', lineHeight: '1.8' }}>
          <li>Changes after selection = <span style={{ color: '#fff' }}>extra fee</span></li>
          <li>Minimum notice required for meal swaps</li>
          <li>Delivery window: <span style={{ color: gold }}>12:00 PM – 1:30 PM</span></li>
        </ul>
      </div>

    </div>
  );
};

export default Lunch;