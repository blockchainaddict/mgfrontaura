import './About.scss';

function About() {
  return (
    <div className="about-wrapper">
      <h3 id="about">About Me</h3>
      <div className="about-content">
        <div className="about-description inner-margin">
          <p>
            Hi! Welcome to my little photographic corner on the web.
            I'm Maria Agustina Frontaura, better known as Magu, a passionate
            31-year-old photographer of Italo-Argentinian nationality currently
            based in Lund, Sweden. Since I was 15, I ventured into the world of
            freelance photography, and ever since, each capture has been an
            expression of my connection with the world around me.
          </p>
          <p>
            On my page, you'll find a fusion of natural landscapes, intimate
            portraits, and the majesty of wildlife. The diversity of life, its
            colors, and emotions are reflected in each image. Photography for me
            is more than a profession; it's my grounding force, my means to
            convey what I see and feel. The opportunity to share my unique
            vision of the world fascinates me and nurtures my creativity. This
            space is a reflection of my visual journey. Each image is imbued
            with passion and love, as each capture represents a special moment
            in my career. I hope you enjoy exploring these images as much as I
            enjoyed capturing them. Feel free to connect with me via email or
            Instagram, both available in the contacts section.
          </p>
          <p>
            I'm here to answer questions, share stories, or simply chat about
            the magic of photography. Thank you for being part of this visual
            experience. Enjoy and welcome to my world through my lens!
          </p>
        </div>
        <img className="about-img" src="img/about-img.jpg" alt="" />
      </div>
    </div>
  );
}

export default About;
