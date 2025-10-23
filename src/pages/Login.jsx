import { useEffect } from "react";

function Login() {
  
  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <p>Sign in to your account.</p>
    </main>
  );
}

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | Blue Grounds Coffee";
  }, []);

  return <Login />;
}