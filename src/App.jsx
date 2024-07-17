import './App.css'
import GalleryMain from './components/GalleryMain/GalleryMain';
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
