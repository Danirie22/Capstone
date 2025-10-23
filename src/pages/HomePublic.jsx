import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function HomePublic() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePublic;