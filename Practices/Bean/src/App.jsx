import About from "./components/About";
import Announcement from "./components/Announcement";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Announcement />
      <Banner />
      <Collection />
      <Reviews />
      <About />
      <Footer />
    </div>
  );
};

export default App;
