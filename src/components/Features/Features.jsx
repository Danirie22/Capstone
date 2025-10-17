import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2 className="features-difference-title">THE BLUE GROUNDS DIFFERENCE</h2>
      
      <div className="features-frame-37">
        <div className="feature-item">
          <img className="feature-image-39" src="/src/assets/img/image-39.png" alt="Premium Beans" />
          <h3 className="feature-title">Premium Beans</h3>
          <p className="feature-description">
            We source only the highest quality coffee beans to ensure every cup is rich, aromatic, and full of character.
          </p>
        </div>
        
        <div className="feature-item">
          <img className="feature-image-38" src="/src/assets/img/image-38.png" alt="Affordable Prices" />
          <h3 className="feature-title">Affordable Prices</h3>
          <p className="feature-description">
            Enjoy world-class coffee without breaking the bank—crafted for everyday indulgence at a budget-friendly cost.
          </p>
        </div>
        
        <div className="feature-item">
          <img className="feature-image-40" src="/src/assets/img/image-40.png" alt="Expertly Crafted" />
          <h3 className="feature-title">Expertly Crafted</h3>
          <p className="feature-description">
            Each drink is carefully prepared by skilled baristas, blending flavor, texture, and presentation into every sip.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
