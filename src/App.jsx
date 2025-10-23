// ...existing code...
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderLoggedIn from "./components/Header/HeaderLoggedIn";
import Footer from "./components/Footer/Footer";
import { MenuPage } from "./pages/Menu/Menu";
import CartPage from "./pages/Cart";
import Login from "./pages/Login";
import LogHome from "./pages/LogHome";
import MainHome from "./pages/MainHome";
import MenuLoggedIn from "./pages/Menu/MenuLoggedIn";
import RegisterPage from "./pages/Register";
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
            <MainHome />
          }
        />
        <Route
          path="/log-home"
          element={
            <LogHome />
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
          path="/menu-log-in"
          element={
            <div className="menu-page">
              <HeaderLoggedIn />
              <MenuLoggedIn />
              <Footer />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <HeaderLoggedIn />
              <ProfilePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="cart-page">
              <HeaderLoggedIn />
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
        <Route
          path="/register"
          element={
            <>
              <Header />
              <RegisterPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;