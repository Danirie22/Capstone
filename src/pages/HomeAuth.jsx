import HeaderLoggedIn from "../components/Header/HeaderLoggedIn";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function HomeAuth() {
  return (
    <div className="home-page">
      <HeaderLoggedIn />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomeAuth;