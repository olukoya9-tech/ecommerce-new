import React, { useState } from 'react';

// --- SECTION 1: SMALL CHOPS CURATES (PROFESSIONAL LAYOUT) ---
const Menu = () => {
  const gold = '#D4AF37';
  const fancyFont = "'Playfair Display', 'Georgia', serif";

  const items = [
    { 
      name: "The Starter Pack", 
      price: "15,000", 
      desc: "7 Samosas, 7 Springrolls, 15 Puff-puff, 10 Mosa (or 5 Money Bags), 4 Grilled Chicken pieces.",
      img: "/images/starter.jpg" 
    },
    { 
      name: "The Signature Platter", 
      price: "25,000", 
      desc: "10 Samosas, 10 Springrolls, 25 Puff-puff, 20 Mosa (or 10 Money Bags), 8 Grilled Chicken pieces.",
      img: "/images/signature.jpg"
    },
    { 
      name: "The Owambe Special", 
      price: "150,000", 
      desc: "Full event catering for 50 people. The ultimate party selection for prestigious gatherings.",
      img: "/images/owambe.jpg"
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', padding: '60px 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '50px' }}>
        {items.map((item) => (
          <div key={item.name} style={{ 
            border: `1px solid ${gold}22`, 
            padding: '0', // Removed padding here so the image touches the top/sides
            textAlign: 'center', 
            borderRadius: '8px', 
            backgroundColor: '#050505',
            overflow: 'hidden' // Keeps the image inside the rounded corners
          }}>
            {/* The "Professional Frame" Container */}
            <div style={{ width: '100%', height: '280px', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
              <img 
                src={item.img} 
                alt={item.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', // This is the secret to making different shapes fit
                  objectPosition: 'center' 
                }} 
              />
            </div>

            <div style={{ padding: '25px' }}>
              <h4 style={{ color: gold, fontFamily: fancyFont, fontSize: '1.6rem', marginBottom: '10px' }}>{item.name}</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '15px 0', minHeight: '60px', lineHeight: '1.6' }}>{item.desc}</p>
              <div style={{ color: gold, fontWeight: 'bold', fontSize: '1.4rem' }}>₦{item.price}</div>
              <button style={{ marginTop: '25px', background: 'none', border: `1px solid ${gold}`, color: gold, padding: '12px 30px', cursor: 'pointer', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: '600' }}>
                ADD TO BOX
              </button>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', color: '#444', fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '60px', letterSpacing: '1px' }}>
        "Our curated selection for gifting and luxury sharing."
      </p>

      {/* BESPOKE CATERING SECTION */}
      <div style={{ padding: '80px 20px', textAlign: 'center', border: `1px solid ${gold}33`, backgroundColor: '#080808', borderRadius: '12px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ color: gold, fontFamily: fancyFont, fontSize: '2.4rem', marginBottom: '15px' }}>Bespoke Catering</h3>
        <p style={{ color: gold, fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '2px' }}>STARTS AT ₦200,000</p>
        <p style={{ color: '#777', fontSize: '1rem', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px', lineHeight: '1.7' }}>
          Tailor-made culinary experiences designed specifically for your high-profile events and corporate functions.
        </p>
        <button style={{ backgroundColor: gold, color: '#000', border: 'none', padding: '18px 45px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px' }}>
          REQUEST A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Menu;

// --- SECTION 2: THE OFFICE LUNCH EXPERIENCE ---
export const Lunch = () => {
  const gold = '#D4AF37';
  const successGreen = '#2ecc71'; 
  const fancyFont = "'Playfair Display', 'Georgia', serif";
  const [isClockedIn, setIsClockedIn] = useState(false);

  const timetable = [
    { day: "Monday", meal: "Smoky Jollof, Grilled Chicken & Salad", nutrients: "Complex Carbs + Lean Protein + Fiber" },
    { day: "Tuesday", meal: "Creamy Pasta, Sauteed Prawns & Garlic Bread", nutrients: "Sustained Energy + Omega-3s + Carbs" },
    { day: "Wednesday", meal: "Native Rice, Shredded Beef & Fried Plantain", nutrients: "Iron + Potassium + Essential Minerals" },
    { day: "Thursday", meal: "Stir-fry Noodles, Teriyaki Wings & Veggies", nutrients: "Vitamin B12 + Antioxidants + Protein" },
    { day: "Friday", meal: "Chef's Special Surprise (TGIF Menu)", nutrients: "Dopamine Boost + 100% Organic 😊" }
  ];

  return (
    <div style={{ color: '#fff', padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#000' }}>
      <section style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h3 style={{ fontFamily: fancyFont, color: gold, fontSize: '3rem', fontStyle: 'italic', marginBottom: '20px' }}>Fueling Your Ambition</h3>
        <p style={{ color: '#888', maxWidth: '750px', margin: '0 auto 40px', lineHeight: '1.8', fontSize: '1.1rem' }}>
          Your brain consumes 20% of your energy. We provide the nutrient-dense fuel required to eliminate the 3 PM slump.
        </p>

        <div style={{ 
          backgroundColor: '#0A0A0A', 
          border: `1.5px solid ${isClockedIn ? successGreen : gold + '33'}`, 
          padding: '60px 20px', borderRadius: '12px', transition: '0.5s ease', maxWidth: '700px', margin: '0 auto'
        }}>
          <h4 style={{ color: isClockedIn ? successGreen : gold, marginBottom: '15px', fontSize: '1.8rem', fontFamily: fancyFont }}>
            {isClockedIn ? "Enjoy Your Meal, Champion! ✅" : "Good Morning, Champion. ✨"}
          </h4>
          <p style={{ color: '#555', marginBottom: '35px' }}>Ready to crush your goals for today?</p>
          <button 
            onClick={() => setIsClockedIn(true)}
            disabled={isClockedIn}
            style={{ 
              backgroundColor: isClockedIn ? successGreen : gold, 
              color: '#000', border: 'none', padding: '15px 55px', fontWeight: 'bold', cursor: isClockedIn ? 'default' : 'pointer', letterSpacing: '2px'
            }}
          >
            {isClockedIn ? "CLOCKED IN" : "CLOCK IN FOR TODAY'S MEAL"}
          </button>
        </div>
      </section>

      <section style={{ marginBottom: '80px' }}>
        <h3 style={{ fontFamily: fancyFont, color: gold, textAlign: 'center', marginBottom: '50px', fontSize: '2.2rem' }}>The Weekly Timetable</h3>
        <div style={{ border: `1px solid ${gold}22`, borderRadius: '8px' }}>
          {timetable.map((item) => (
            <div key={item.day} style={{ padding: '30px', borderBottom: '1px solid #111', backgroundColor: '#050505' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: gold, fontWeight: 'bold', fontSize: '1.1rem' }}>{item.day}</span>
                <span style={{ color: '#fff', fontSize: '1.1rem' }}>{item.meal}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#555', fontStyle: 'italic' }}>
                Nutrients: <span style={{ color: '#888' }}>{item.nutrients}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};