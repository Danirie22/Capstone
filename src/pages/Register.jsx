import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // In a real app, you would handle the registration logic here.
    // For now, we'll just navigate to the login page.
    navigate("/login");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    minHeight: "calc(100vh - 150px)",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    backgroundColor: "#fff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "0.5rem",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#333",
  };

  const inputStyle = {
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "slategray",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const loginLinkStyle = {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "1rem",
    color: "#555",
  };

  const linkStyle = {
    color: "slategray",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "0.25rem",
  };

  return (
    <main style={containerStyle}>
      <form style={formStyle} onSubmit={handleRegister}>
        <h2
          style={{ textAlign: "center", margin: "0 0 1rem", fontSize: "2.5rem" }}
        >
          Create Account
        </h2>
        <div style={inputGroupStyle}>
          <label htmlFor="fullName" style={labelStyle}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            style={inputStyle}
            placeholder="Jake Williams"
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            style={inputStyle}
            placeholder="you@example.com"
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            placeholder="••••••••"
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Register
        </button>
        <p style={loginLinkStyle}>
          Already have an account?
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

export default function RegisterPage() {
  useEffect(() => {
    document.title = "Register | Blue Grounds Coffee";
  }, []);

  return <Register />;
}