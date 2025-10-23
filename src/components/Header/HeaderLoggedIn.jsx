import { NavLink, Link } from "react-router-dom";

function HeaderLoggedIn() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-image"
            src="/src/assets/img/image1.png"
            alt="Blue Grounds Coffee Logo"
          />
          <div className="logo-text">
            <h1 className="logo-title">BLUE GROUNDS</h1>
            <h2 className="logo-subtitle">COFFEE</h2>
          </div>
        </div>

        <nav className="navigation">
          <NavLink to="/log-home" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/menu-log-in" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Menu</NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Profile</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Cart</NavLink>
          <Link to="/" className="login-button">Logout</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderLoggedIn;