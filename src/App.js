import React, { useState, useEffect } from 'react';
import Logo from './Logo.png'; 

const gold = '#D4AF37'; 
const terracotta = '#C04000'; 
const clayLight = '#E2725B'; 
const softCream = '#FDF5E6'; 

function App() {
  const [activeCategory, setActiveCategory] = useState('Small Chops');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState('Pickup');
  const [showCheckout, setShowCheckout] = useState(false);
  
  // USER INFO STATES
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const [scheduledDate, setScheduledDate] = useState('');
  const [location, setLocation] = useState('Select Location - Ikeja, Lagos');

  const whatsappNumber = "2349122731172";
  const bankInfo = { bank: "PREMIUMTRUST BANK", account: "0112326977", name: "OLUKOYA OMOTOYOSI" };

  const slides = [
    { 
      title: "EVERY BITE, ALWAYS WORTH IT!", 
      subtitle: "NIGERIA'S FAVORITE GRILLS & SMALL CHOPS.", 
      img: "/images/chops_promo.png", 
      bg: terracotta 
    },
    { 
      title: "AFFORDABLE LUXURY WIGS.", 
      subtitle: "Wigs anyone can afford😊!", 
      img: "/images/wigs_promo.png", 
      bg: "#8B0000" 
    },
    { 
      title: "PREMIUM TASTE, 9JA FLAVOR!", 
      subtitle: "THE PERFECT BALANCE OF GOOD FOOD.", 
      img: "/images/lunch_promo.png", 
      bg: terracotta 
    }
  ];

  const menuData = {
    CHOPS: [
      { id: 1, name: "The Starter Pack", price: "15,000", desc: "7 Samosas, 7 Springrolls, 15 Puff-puff, 10 Mosa, 4 Grilled Chicken.", img: "/images/starter.jpg" },
      { id: 2, name: "The Signature Platter", price: "25,000", desc: "10 Samosas, 10 Springrolls, 25 Puff-puff, 20 Mosa, 8 Grilled Chicken.", img: "/images/signature.jpg" },
      { id: 3, name: "The Owambe Special", price: "150,000", desc: "Full event catering for 50 people.", img: "/images/owambe.jpg" },
      { id: 4, name: "The Customized Package", price: "200,000", desc: "Bespoke menu for 60 people and above.", img: "/images/customized.jpg", isCustom: true }
    ],
    LUNCH: [
      { day: "Monday", meal: "Smoky Jollof, Grilled Chicken & Salad" },
      { day: "Tuesday", meal: "Creamy Pasta, Sauteed Prawns & Garlic Bread" },
      { day: "Wednesday", meal: "Native Rice, Shredded Beef & Fried Plantain" },
      { day: "Thursday", meal: "Stir-fry Noodles, Teriyaki Wings & Veggies" },
      { day: "Friday", meal: "Chef's Special Surprise (TGIF Menu)" }
    ],
    WIGS: [
      { type: "Human Hair", items: [
          { id: 201, name: "2toned yaki bob", price: "32,000", desc: "11\" 2*6 t closure", img: "/images/2toned_bob.jpg" },
          
      ]},
      { type: "Premium Fibre", items: [
          { id: 202, name: "roman bounce", price: "25,000", desc: "14\"t closure", img: "/images/roman_bounce.jpg" },
          
      ]},
      { type: "Hair Blend", items: [
          { id: 203, name: "burgundy straight", price: "35,000", desc: "28\" 5*5 Closure", img: "/images/burgundy_straight.jpg" },
          { id: 205, name: "tip Wavy piano", price: "25,000", desc: "24\" T-Closure", img: "/images/tip_wavy.jpg" }
      ]}
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCheckout(true);
  };

  const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace(/,/g, '')), 0);

  const handleCheckout = () => {
    if (!userInfo.name || !userInfo.phone) {
      alert('Please fill in your name and phone number');
      return;
    }

    const itemsList = cart.map((item, idx) => `${idx + 1}. ${item.name} - ₦${item.price}`).join('%0A');
    const orderTime = scheduledDate ? `Scheduled for: ${scheduledDate}` : "Instant Delivery";
    
    const receipt = `
*=== ÀMÍCAL RECEIPT ===*%0A%0A*CUSTOMER DETAILS:*%0AName: ${userInfo.name}%0APhone: ${userInfo.phone}${userInfo.email ? `%0AEmail: ${userInfo.email}` : ''}%0A%0A*ORDER DETAILS:*%0ATime: ${orderTime}%0AMode: ${deliveryMode}%0ALocation: ${location}%0A%0A*ITEMS ORDERED:*%0A${itemsList}%0A%0A*TOTAL: ₦${total.toLocaleString()}*%0A%0A*PAYMENT DETAILS:*%0ABank: ${bankInfo.bank}%0AAccount: ${bankInfo.account}%0AAccount Name: ${bankInfo.name}%0A%0AThank you! 🙏
    `;

    window.open(`https://wa.me/${whatsappNumber}?text=${receipt}`, '_blank');
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#000', zIndex: 1000, borderBottom: '1px solid #1a1a1a' }}>
        <img src={Logo} alt="Logo" style={{ height: '45px' }} />
        <div style={{ display: 'flex', gap: '20px', fontSize: '1.4rem' }}>
          <span>👤</span>
          <span onClick={() => setIsCartOpen(!isCartOpen)} style={{ position: 'relative', cursor: 'pointer' }}>
            🛒 <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: terracotta, borderRadius: '50%', padding: '2px 6px', fontSize: '0.7rem' }}>{cart.length}</span>
          </span>
        </div>
      </header>

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', flexDirection: 'column', overflowY: 'auto', paddingTop: '20px' }}>
          <button onClick={() => setShowCheckout(false)} style={{ alignSelf: 'flex-end', marginRight: '20px', backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
          
          <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
            <h2 style={{ color: gold, marginBottom: '20px' }}>CHECKOUT</h2>
            
            {/* CART ITEMS */}
            <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9rem', color: terracotta, marginTop: 0 }}>YOUR ORDER:</h3>
              {cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>{item.name}</p>
                    <p style={{ margin: '3px 0 0', color: '#888', fontSize: '0.85rem' }}>₦{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(idx)} style={{ background: 'none', border: 'none', color: '#f44', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
                </div>
              ))}
              <div style={{ paddingTop: '12px', borderTop: `2px solid ${gold}`, marginTop: '12px' }}>
                <h3 style={{ color: gold, fontSize: '1.2rem', margin: '10px 0 0' }}>TOTAL: ₦{total.toLocaleString()}</h3>
              </div>
            </div>

            {/* ACCOUNT DETAILS FORM */}
            <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9rem', color: terracotta, marginTop: 0 }}>YOUR DETAILS:</h3>
              
              <input 
                type="text"
                placeholder="Full Name *"
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '0.95rem' }}
              />
              
              <input 
                type="tel"
                placeholder="Phone Number *"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '0.95rem' }}
              />
              
              <input 
                type="email"
                placeholder="Email (optional)"
                value={userInfo.email}
                onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '0.95rem' }}
              />
            </div>

            {/* DELIVERY OPTIONS */}
            <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9rem', color: terracotta, marginTop: 0 }}>DELIVERY:</h3>
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <button onClick={() => setDeliveryMode('Pickup')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: deliveryMode === 'Pickup' ? `2px solid ${gold}` : '1px solid #333', backgroundColor: deliveryMode === 'Pickup' ? '#1a1a1a' : '#0a0a0a', color: '#fff', cursor: 'pointer', fontWeight: '700' }}>Pickup</button>
                <button onClick={() => setDeliveryMode('Delivery')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: deliveryMode === 'Delivery' ? `2px solid ${gold}` : '1px solid #333', backgroundColor: deliveryMode === 'Delivery' ? '#1a1a1a' : '#0a0a0a', color: '#fff', cursor: 'pointer', fontWeight: '700' }}>Delivery</button>
              </div>

              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '0.95rem' }}
              >
                <option>Select Location - Ikeja, Lagos</option>
                <option>Lekki Phase 1</option>
              </select>
            </div>

            {/* BANK DETAILS */}
            <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginBottom: '20px', borderLeft: `4px solid ${gold}` }}>
              <h3 style={{ fontSize: '0.9rem', color: terracotta, marginTop: 0 }}>PAYMENT DETAILS:</h3>
              <div style={{ backgroundColor: '#0a0a0a', padding: '12px', borderRadius: '8px', marginBottom: '10px' }}>
                <p style={{ margin: '0 0 5px', color: '#888', fontSize: '0.85rem' }}>Bank Name</p>
                <p style={{ margin: 0, color: gold, fontWeight: '700', fontSize: '0.95rem' }}>{bankInfo.bank}</p>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', padding: '12px', borderRadius: '8px', marginBottom: '10px' }}>
                <p style={{ margin: '0 0 5px', color: '#888', fontSize: '0.85rem' }}>Account Number</p>
                <p style={{ margin: 0, color: gold, fontWeight: '700', fontSize: '0.95rem' }}>{bankInfo.account}</p>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', padding: '12px', borderRadius: '8px' }}>
                <p style={{ margin: '0 0 5px', color: '#888', fontSize: '0.85rem' }}>Account Name</p>
                <p style={{ margin: 0, color: gold, fontWeight: '700', fontSize: '0.95rem' }}>{bankInfo.name}</p>
              </div>
            </div>

            {/* SEND TO WHATSAPP */}
            <button 
              onClick={handleCheckout}
              style={{ width: '100%', padding: '16px', backgroundColor: terracotta, color: '#fff', border: 'none', borderRadius: '12px', fontWeight: '900', fontSize: '1rem', cursor: 'pointer', marginBottom: '20px' }}
            >
              SEND TO WHATSAPP ✓
            </button>
          </div>
        </div>
      )}

      {/* BANNER */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <div key={index} style={{ 
            position: 'absolute', width: '100%', height: '100%', 
            backgroundColor: slide.bg,
            display: 'flex', alignItems: 'center',
            opacity: index === currentSlide ? 1 : 0, 
            transition: 'opacity 0.8s ease-in-out',
            zIndex: index === currentSlide ? 1 : 0
          }}>
            <div style={{ flex: 1.2, paddingLeft: '25px', zIndex: 2 }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '900', margin: 0, lineHeight: 1.1 }}>{slide.title}</h2>
              <p style={{ fontSize: '0.75rem', margin: '10px 0 0', fontWeight: '700', opacity: 0.9 }}>{slide.subtitle}</p>
            </div>
            <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img src={slide.img} style={{ height: '145%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(15px 15px 25px rgba(0,0,0,0.4))' }} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* BUSINESS INFO */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '800' }}>Àmí by T</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', color: '#888', marginTop: '6px' }}>
          <span style={{ marginRight: '5px' }}>📍</span>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer' }}
          >
            <option>Select Location - Ikeja, Lagos</option>
            <option>Lekki Phase 1</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px', gap: '8px' }}>
          <span style={{ backgroundColor: '#e6f4ea', color: '#1e8e3e', padding: '4px 10px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: 'bold' }}>● Opened</span>
          <span style={{ color: '#888', fontSize: '0.85rem' }}>Closes today at 08:00 PM ⓘ</span>
        </div>

        <div style={{ marginTop: '20px', position: 'relative' }}>
           <button style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #333', background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', gap: '10px', fontWeight: '700', cursor: 'pointer' }}>
             📅 {scheduledDate ? `Scheduled: ${scheduledDate}` : 'Pre-order / Schedule delivery'}
             <input 
               type="datetime-local" 
               onChange={(e) => setScheduledDate(e.target.value)}
               style={{ position: 'absolute', opacity: 0, width: '100%', left: 0, cursor: 'pointer' }}
             />
           </button>
        </div>
      </div>

      {/* NAV TABS */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '10px 20px', scrollbarWidth: 'none' }}>
        {['Small Chops', 'Office Lunch', 'Wigs'].map((item) => (
          <button key={item} onClick={() => setActiveCategory(item)} style={{ whiteSpace: 'nowrap', padding: '10px 22px', borderRadius: '25px', border: activeCategory === item ? '2px solid #fff' : 'none', backgroundColor: activeCategory === item ? '#000' : 'transparent', color: activeCategory === item ? '#fff' : '#888', fontWeight: '800' }}>
            {item}
          </button>
        ))}
      </div>

     {/* MENU SECTIONS */}
      <main style={{ paddingBottom: '120px' }}>
        {activeCategory === 'Small Chops' && menuData.CHOPS.map((item) => (
          <div key={item.id} style={{ display: 'flex', padding: '20px', borderBottom: '1px solid #1a1a1a', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>{item.name}</h4>
              <p style={{ color: '#888', fontSize: '0.85rem', margin: '5px 0', lineHeight: '1.4' }}>{item.desc}</p>
              <div style={{ fontWeight: 'bold', color: gold, fontSize: '1.1rem' }}>₦{item.price}</div>
            </div>
            <div style={{ width: '90px', height: '90px', borderRadius: '15px', overflow: 'hidden', marginLeft: '15px' }}>
              <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
            </div>
            <button onClick={() => item.isCustom ? window.open(`https://wa.me/${whatsappNumber}`) : addToCart(item)} style={{ marginLeft: '12px', padding: '10px 18px', borderRadius: '20px', border: 'none', backgroundColor: item.isCustom ? gold : terracotta, color: item.isCustom ? '#000' : '#fff', fontWeight: '900', fontSize: '0.75rem' }}>
              {item.isCustom ? 'BOOK' : 'ADD'}
            </button>
          </div>
        ))}

        {activeCategory === 'Office Lunch' && (
          <div style={{ padding: '20px' }}>
            {/* 1. INTRO */}
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <h2 style={{ color: gold, fontSize: '1.5rem', fontWeight: '900' }}>"Never worry about lunch during work again."</h2>
              <p style={{ color: '#ccc', fontSize: '0.85rem' }}>We deliver lunch daily (Mon–Fri). Perfect for busy professionals.</p>
            </div>

            {/* 2. HOW IT WORKS */}
            <div style={{ display: 'grid', gap: '10px', marginBottom: '30px' }}>
              {[
                { s: "1", t: "Choose a plan", d: "Weekly or monthly subscription." },
                { s: "2", t: "Pick from our menu", d: "Daily specials or customize." },
                { s: "3", t: "We deliver daily", d: "Fresh lunch at your desk." }
              ].map(step => (
                <div key={step.s} style={{ display: 'flex', gap: '10px', background: '#111', padding: '15px', borderRadius: '12px' }}>
                  <div style={{ backgroundColor: terracotta, width: '25px', height: '25px', borderRadius: '50%', textAlign: 'center', fontWeight: '900' }}>{step.s}</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem' }}>{step.t}</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. PLANS */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
              <div style={{ flex: 1, padding: '15px', background: '#111', borderRadius: '15px', border: '1px solid #333', textAlign: 'center' }}>
                <h4 style={{ margin: 0 }}>Weekly</h4>
                <div style={{ color: gold, fontWeight: '900' }}>₦17,500</div>
                <button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Weekly Plan`)} style={{ marginTop: '10px', padding: '8px', width: '100%', background: terracotta, border: 'none', color: '#fff', borderRadius: '8px', fontWeight: '800' }}>SUBSCRIBE</button>
              </div>
              <div style={{ flex: 1, padding: '15px', background: '#111', borderRadius: '15px', border: `2px solid ${gold}`, textAlign: 'center' }}>
                <h4 style={{ margin: 0 }}>Monthly</h4>
                <div style={{ color: gold, fontWeight: '900' }}>₦65,000</div>
                <button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Monthly Plan`)} style={{ marginTop: '10px', padding: '8px', width: '100%', background: gold, border: 'none', color: '#000', borderRadius: '8px', fontWeight: '800' }}>SUBSCRIBE</button>
              </div>
            </div>

            {/* 4. MENU */}
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '15px' }}>
              {menuData.LUNCH.map((item) => (
                <div key={item.day} style={{ minWidth: '140px', background: '#111', padding: '12px', borderRadius: '12px' }}>
                  <p style={{ color: terracotta, fontWeight: '900', margin: 0, fontSize: '0.7rem' }}>{item.day}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem' }}>{item.meal}</p>
                </div>
              ))}
            </div>

            {/* 5. RULES */}
            <div style={{ padding: '15px', backgroundColor: '#0a0a0a', borderRadius: '15px', border: '1px dashed #444' }}>
              <h3 style={{ color: '#f44', fontSize: '0.75rem', margin: '0 0 5px 0' }}>⚠️ RULES</h3>
              <ul style={{ margin: 0, paddingLeft: '15px', color: '#888', fontSize: '0.75rem' }}>
                <li>Changes = extra fee</li>
                <li>Delivery: 12:00 PM – 1:30 PM</li>
              </ul>
            </div>
          </div>
        )}

       {activeCategory === 'Wigs' && menuData.WIGS.map((cat) => (
  <div key={cat.type} style={{ padding: '0 20px 20px' }}>
    <h3 style={{ fontSize: '0.85rem', color: terracotta, textTransform: 'uppercase', padding: '20px 0 10px', letterSpacing: '2px', fontWeight: '900' }}>
      {cat.type}
    </h3>
    {cat.items.map((item) => (
      <div key={item.id} style={{ display: 'flex', padding: '15px', backgroundColor: '#111', borderRadius: '18px', marginBottom: '12px', border: '1px solid #1a1a1a', alignItems: 'center' }}>
        
        {/* --- THE IMAGE FRAME (FORCE VISIBLE) --- */}
        <div style={{ 
          width: '85px', 
          height: '85px', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          flexShrink: 0, 
          backgroundColor: '#222', // Dark grey box so you see the frame
          border: `1px solid ${gold}`, // Gold border to make it pop
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={item.img} 
            alt={item.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            // This alert will tell us if the path is actually broken
            onError={(e) => console.log("Failed to load:", item.img)} 
          />
        </div>

        {/* TEXT DETAILS */}
        <div style={{ flex: 1, marginLeft: '15px' }}>
          <h4 style={{ margin: 0, fontWeight: '700', fontSize: '1rem' }}>{item.name}</h4>
          <p style={{ margin: '4px 0', color: '#888', fontSize: '0.75rem', lineHeight: '1.3' }}>{item.desc}</p>
          <div style={{ color: gold, fontWeight: 'bold', marginTop: '5px', fontSize: '1.1rem' }}>₦{item.price}</div>
        </div>

        <button 
          onClick={() => addToCart(item)} 
          style={{ backgroundColor: terracotta, color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '12px', fontWeight: '900', fontSize: '0.7rem' }}
        >
          ADD
        </button>
      </div>
    ))}
  </div>
))}
      </main>
    </div>
  );
}

export default App;