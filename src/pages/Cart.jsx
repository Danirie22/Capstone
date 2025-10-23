import { useEffect } from "react";

function Cart() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Your Cart</h1>
      <p>Items you intend to purchase will appear here.</p>
    </main>
  );
}

export default function CartPage() {
  useEffect(() => {
    document.title = "Cart | Blue Grounds Coffee";
  }, []);

  return <Cart />;
}
