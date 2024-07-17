import "./App.css";
import GalleryMain from "./components/GalleryMain/GalleryMain";
import Header from "./components/Header/Header";
import Error from "./views/Error";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryMain />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
