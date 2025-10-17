import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">CUSTOMER TESTIMONIALS</h2>
      <p className="testimonials-subtitle">What customers say about us</p>

      <div className="testimonials-cards">
        <div className="testimonial-card">
          <p className="testimonial-text">"Best coffee I've had for the price! The matcha is a game-changer."</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Fantastic coffee and great value. I'm a regular customer now!"</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Affordable, tasty, and always served with a smile. Love the cozy vibe too!"</p>
        </div>
      </div>

      <div className="testimonials-customers">
        <div className="customer">
          <img className="customer-photo" src="/src/assets/img/image-4.png" alt="James R." />
          <p className="customer-name">Alex M.</p>
        </div>
        <div className="customer">
          <img className="customer-photo" src="/src/assets/img/image-5.png" alt="Alex M." />
          <p className="customer-name">James R.</p>
        </div>
        <div className="customer">
          <img className="customer-photo" src="/src/assets/img/image-6.png" alt="Chloe T." />
          <p className="customer-name">Chloe T.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
