// ...existing code...
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { MenuPage } from "./pages/Menu/Menu";
import Profile from "./pages/Profile";
import CartPage from "./pages/Cart";
import Login from "./pages/Login";
import "./assets/global.css";
import "./assets/styleguide.css";
import "./assets/figma-styles.css";
import ProfilePage from "./pages/Profile";
// ...existing code...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // wrapper must match the stylesheet's root selector
            <div className="home-page">
              <Header />
              <Hero />
              <Features />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route
          path="/menu"
          element={
            <div className="menu-page">
              <Header />
              <MenuPage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <ProfilePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="cart-page">
              <Header />
              <CartPage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;