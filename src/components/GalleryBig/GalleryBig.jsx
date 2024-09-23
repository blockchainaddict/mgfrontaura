import './GalleryBig.scss'

function GalleryBig() {
  return (
    <a href="/gallery" className="gallery-big-wrapper">
      <img className="gb-img" src="img/1.jpg" alt="img" />
      <img className="gb-img" src="img/2.jpg" alt="img" />
      <img className="gb-img" src="img/3.jpg" alt="img" />
    </a>
  )
}

export default GalleryBig
