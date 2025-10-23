
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img className="logo-image" src="/src/assets/img/image1.png" alt="Blue Grounds Coffee Logo" />
          <div className="logo-text">
            <h1 className="logo-title">BLUE GROUNDS</h1>
            <h2 className="logo-subtitle">COFFEE</h2>
          </div>
        </div>
        
        <nav className="navigation">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Menu
          </NavLink>
          <Link to="/login" className="login-button">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;