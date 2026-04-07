const WigStore = () => {
  const categories = [
    { 
      type: "Human Hair", 
      items: [
        { name: "2 toned yaki bob wig", price: "32,000", desc: "11\" 2*6 tclosure"},
      ] 
    },
    { 
      type: "Premium Fibre", 
      items: [
        { name: "roman bounce", price: "25,000", desc: "14\" t closure "  },
      ] 
    },
    { 
      type: "Hair Blend", 
      items: [
        { name: "burgundy straight", price: "35,000", desc: "28\" 5*5 Closure" },
        { name: "tip wavy piano", price: "25,000", desc:"24\" t closure" },
      ] 
    }
  ];

  return (
    /* THIS DIV FORCES THE CATEGORIES TO BE SIDE-BY-SIDE */
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', // Horizontal!
      overflowX: 'auto',    // Allow swiping left/right
      gap: '20px', 
      padding: '0 20px 20px', 
      scrollbarWidth: 'none',
      alignItems: 'flex-start' 
    }}>
      {categories.map((cat) => (
        <div key={cat.type} style={{ 
          minWidth: '260px', // Forces the "Pillar" width
          flexShrink: 0 
        }}>
          
          {/* CATEGORY HEADER (Horizontal Title) */}
          <h3 style={{ 
            fontSize: '0.75rem', 
            color: terracotta, 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            marginBottom: '15px',
            borderBottom: `2px solid ${terracotta}`,
            paddingBottom: '6px',
            textAlign: 'center'
          }}>
            {cat.type}
          </h3>

          {/* VERTICAL LIST (Wigs falling under the title) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cat.items.map((item) => (
              <div key={item.name} style={{ 
                backgroundColor: '#111', 
                borderRadius: '12px', 
                padding: '15px', 
                border: '1px solid #1a1a1a',
                textAlign: 'center'
              }}>
                {/* Image Placeholder */}
                <div style={{ 
                  width: '100%', 
                  height: '140px', 
                  backgroundColor: '#000', 
                  borderRadius: '8px', 
                  marginBottom: '12px' 
                }}></div>

                <h4 style={{ fontSize: '0.85rem', margin: '0', color: '#fff', fontWeight: '600' }}>{item.name}</h4>
                <p style={{ fontSize: '0.65rem', color: '#666', margin: '4px 0 8px' }}>{item.desc}</p>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: gold, marginBottom: '10px' }}>₦{item.price}</div>

                <button style={{ 
                  width: '100%',
                  backgroundColor: terracotta, 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '25px', 
                  padding: '8px 0', 
                  fontSize: '0.7rem', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>ADD TO CART</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};