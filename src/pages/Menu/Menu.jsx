import { useEffect } from "react";
import "./Menu.css";
import image3 from "../../assets/img/image-3.png";
import image4 from "../../assets/img/image-4.png";
import image5 from "../../assets/img/image-5.png";

const menuItems = [
  {
    name: "Espresso",
    description: "A strong, concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
    price: "$2.50",
    image: image3,
  },
  {
    name: "Latte",
    description: "A coffee drink made with espresso and steamed milk, topped with a thin layer of foam.",
    price: "$4.00",
    image: image4,
  },
  {
    name: "Cappuccino",
    description: "An espresso-based coffee drink that originated in Italy, and is traditionally prepared with double espresso and steamed milk foam.",
    price: "$3.50",
    image: image5,
  },
];

function Menu() {
  return (
    <main className="menu-content">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export function MenuPage() {
  useEffect(() => {
    document.title = "Menu | Blue Grounds Coffee";
  }, []);

  return <Menu />;
}