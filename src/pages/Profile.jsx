import { useEffect, useState } from "react";
import profileImage from "../assets/img/AI.jpg";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Jake Williams",
    email: "jake.williams@example.com",
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Profile | Blue Grounds Coffee";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const orders = [
    {
      id: 1,
      name: "Blueberry w/ Nata Jelly",
      image: "https://via.placeholder.com/80/A2D2FF/000000?Text=Blueberry",
      size: "Large",
      quantity: 1,
      price: 150,
    },
    {
      id: 2,
      name: "Matcha w/ Oreo & Cream",
      image: "https://via.placeholder.com/80/C1E1C1/000000?Text=Matcha",
      size: "Medium",
      quantity: 2,
      price: 135,
    },
  ];

  return (
    <main className="profile-page">
      <div className="profile-header">
        {!isEditing ? (
          <>
            <div className="profile-info">
              <img
                src={profileImage}
                alt="Jake Williams"
                className="profile-image"
              />
              <h2 className="profile-name">{profileData.name}</h2>
              <p className="profile-email">{profileData.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="edit-profile-link"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <form className="edit-profile-form" onSubmit={handleSave}>
            <img
              src={profileImage}
              alt="Jake Williams"
              className="profile-image"
            />
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="profile-input"
            />
            <div className="edit-profile-actions">
              <button type="submit" className="save-button">
                Save
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Order History Section */}
      <section className="profile-section">
        <h3 className="section-title">Order History</h3>
        <div>
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <img src={order.image} alt={order.name} className="order-image" />
              <div className="order-details">
                <h4 className="order-name">{order.name}</h4>
                <p className="order-meta">Size: {order.size}</p>
                <p className="order-meta">Quantity: {order.quantity}</p>
              </div>
              <div className="order-price">₱{order.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section className="profile-section">
        <h3 className="section-title">Place an Order</h3>
        <ul className="menu-list">
          <li className="menu-item no-border">Orders</li>
          <li className="menu-item no-border">Rewards</li>
        </ul>
      </section>

      {/* Help Section */}
      <section className="profile-section">
        <h3 className="section-title">Need help?</h3>
        <ul className="menu-list">
          <li className="menu-item">Send a feedback</li>
          <li className="menu-item">FAQs</li>
          <li className="menu-item">Queue</li>
          <li className="menu-item no-border">My rewards</li>
        </ul>
      </section>

      <button className="back-button" onClick={() => navigate("/log-home")}>
        Back
      </button>
    </main>
  );
}
