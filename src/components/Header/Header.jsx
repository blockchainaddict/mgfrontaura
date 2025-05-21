import { Link } from "react-router-dom";
import './Header.scss';

import Ig from '../../assets/svgs/ig.svg';

function Header() {
  return (
    <header>
      <div className="social-icons flex-row">
        <div className="instagram-links">
          <a href="https://www.instagram.com/_maguula/" target="_blank" title="Personal Instagram">
            <img src={Ig} alt="Personal Instagram" className="ig-logo" />
          </a>
        </div>
      </div>

      <div className="title">
          <h1><a href="/">Agustina Frontaura</a></h1>
          <p className="subtitle">Photography</p>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About me</a></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
