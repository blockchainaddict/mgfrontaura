import About from "../components/About/About";
// import GalleryMain from "../components/GalleryMain/GalleryMain";
import Footer from "../components/Footer/Footer";
import Contact from "./Contact";
import GalleryBig from "../components/GalleryBig/GalleryBig";

function Home() {
  return (
    <>
      {/* <Banner /> */}
      <div className="home-img"></div>
      <About />
      <div className="gallery-mobile"><a href="/gallery">Go to Gallery</a></div>
      <GalleryBig />

      <Contact />
      <Footer />
    </>
  );
}

export default Home;
