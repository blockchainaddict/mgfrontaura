import { Link } from "react-router-dom";
import { useState } from "react"
import './Header.scss';

import Notification from "../Notification/Notification";

import Ig from '../../assets/svgs/ig.svg';

function Header() {
  const [notification, setNotification] = useState(false);

  const copyToClip = () => {
    navigator.clipboard.writeText('agustinafrontaura@gmail.com');
    setNotification(true);
  
    setTimeout(() => {
      setNotification(false);
      window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvjThZNBzvfFlxndLRJXTKzTgGGVVdLNjHwdRhvznCvljMkcMjnxbJMkkbKfmWrMdCLB','_blank', 'rel=noopener noreferrer')
    }, 3000)
  }

  return (
    <header>
    {notification && <Notification title={"Contact"} body={"A Gmail tab will open up. Just PASTE and you'll see my email! (It's already on your clipboard)"}/> }

      <div className="social-icons flex-row">
        {/* <a>IG</a> */}
        <img src={Ig} alt="" className="ig-logo" />
      </div>

      <div className="title">
          <h1><a href="/">Magu Frontaura</a></h1>
          <p className="subtitle">Photography</p>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About me</a></li>
          <li><Link to="/gallery">Gallery</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          {/* <li onClick={copyToClip}>Contact</li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
