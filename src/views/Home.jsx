import About from "../components/About/About";
import GalleryMain from "../components/GalleryMain/GalleryMain";
import Footer from "../components/Footer/Footer";
import Contact from "./Contact";

function Home() {
  return (
    <>
      {/* <Banner /> */}
      <div className="home-img">
      </div>
      <About />
      <GalleryMain />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
