import './Footer.scss'

function Footer() {
  return (
    <div className="footer-wrapper">
      <p>&copy; {new Date().getFullYear()} Magu Frontaura. All rights reserved.</p>
      <p>Website by <a href="https://santiagovb.io/" target="_blank"><b>Santiago VB</b></a></p>
    </div>
  )
}

export default Footer
