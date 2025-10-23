import './Hero.css';
import { Link } from 'react-router-dom';

function Hero({ linkTo = "/login" }) {
  return (
    <section className="hero">
      <div className="hero-frame-35">
        <div className="hero-frame-34">
          <h1 className="hero-title">
            Your Budget <br />Friendly Cup
          </h1>
          <p className="hero-subtitle">Deliciously Affordable Coffee</p>
          
          <Link to={linkTo} className="hero-button">
            <span>Grab a cup now!</span>
          </Link>
        </div>

        <div className="hero-group-33837">
          <img className="hero-image-33" src="/src/assets/img/image-33.png" alt="Coffee cup" />
          <img className="hero-image-35" src="/src/assets/img/image-35.png" alt="Coffee beans" />
          <img className="hero-image-main" src="/src/assets/img/image-3.png" alt="Coffee shop" />
        </div>
        
        <h2 className="hero-beat-heat">Beat the heat</h2>
      </div>
      
      <img className="hero-image-41" src="/src/assets/img/image-41.png" alt="Hero Banner" />
    </section>
  );
}

export default Hero;
