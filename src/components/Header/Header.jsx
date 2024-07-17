import { Link } from "react-router-dom";

const copyToClip = () => {
  navigator.clipboard.writeText('agustinafrontaura@gmail.com')
}

function Header() {
  return (
    <header>
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
          <li><a onClick={copyToClip} href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvjThZNBzvfFlxndLRJXTKzTgGGVVdLNjHwdRhvznCvljMkcMjnxbJMkkbKfmWrMdCLB" target="_blank">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
