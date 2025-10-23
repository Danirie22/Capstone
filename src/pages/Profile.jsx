import { useEffect } from "react";

function Profile() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Profile</h1>
      <p>View and edit your account details here.</p>
    </main>
  );
}

export default function ProfilePage() {
  useEffect(() => {
    document.title = "Profile | Blue Grounds Coffee";
  }, []);

  return <Profile />;
}