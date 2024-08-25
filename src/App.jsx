import "./App.css";
import GalleryMain from "./components/GalleryMain/GalleryMain";
import Header from "./components/Header/Header";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Error from "./views/Error";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-overlay"></div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryMain />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
