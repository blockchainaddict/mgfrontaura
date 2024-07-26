import { Link } from "react-router-dom";
import { useState } from "react"

import Notification from "../Notification/Notification";


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
        <a>IG</a>
      </div>

      <div className="title">
          <h2><a href="/">Magu Frontaura</a></h2>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li>Blog</li>
          <li onClick={copyToClip}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
