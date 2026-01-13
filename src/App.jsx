import { useEffect, useRef } from 'react'
import './App.css'

// Images
import logo from './images/bea_cruz_logo_circle.png'
import heroImg from './images/section_1.jpg'
import collectionImg from './images/section-2.jpg'
import exhibitionImg from './images/section-3.jpg'
import clientImg from './images/section-4.jpg'
import threeDImg from './images/section-5.jpg'
import artworkImg from './images/section-6.jpg'
import aboutImg from './images/section-7.jpg'
import selfPortrait from './images/self_portrait.jpg'

// Press logos
import businessmirror from './images/press/businessmirror.jpg'
import businessworld from './images/press/businessworld.png'
import cbs8 from './images/press/cbs8.png'
import citizenink from './images/press/citizenink.png'
import diarist from './images/press/diarist.png'
import grazia from './images/press/grazia.jpg'
import manilatimes from './images/press/manilatimes.png'
import negros from './images/press/negros.jpg'
import sothebys from './images/press/sothebys.png'
import sunstar from './images/press/sunstar.png'

// Featured press (premium placement)
const featuredPress = [
  {
    src: sothebys,
    alt: "Sotheby's",
    title: "Sotheby's New York",
    subtitle: "Art Renewal Center Exhibition",
    description: "Contemporary Realism: 14th International Virtual Art Renewal Center Salon Exhibition",
    year: "2020",
    url: "https://www.sothebys.com/en/articles/contemporary-realism-14th-international-virtual-arc-salon-exhibition"
  },
  {
    src: grazia,
    alt: 'Grazia',
    title: "Grazia Philippines",
    subtitle: "Digital Cover Feature",
    description: "Showcasing Bea Cruz Designs at Fashion Week San Diego",
    year: "2024",
    isCover: true,
    url: "https://grazia.ph/2024/09/14/bing-jie-showcases-bea-cruz-designs-at-fashion-week-san-diego/"
  },
]

// Other press logos (marquee)
const pressLogos = [
  { src: businessworld, alt: 'Business World', url: 'https://www.bworldonline.com/arts-and-leisure/2021/05/03/365316/young-pinay-designer-teases-new-collection-in-fashion-week-san-diego-spring-showcase/' },
  { src: businessmirror, alt: 'Business Mirror', url: 'https://businessmirror.com.ph/2020/10/27/young-filipina-named-top-designer-bags-back-to-back-awards-in-the-us/' },
  { src: cbs8, alt: 'CBS 8', url: 'https://www.cbs8.com/video/entertainment/events/fashion-week-san-diego-2021/509-92b34b8d-eaa2-4d9b-bc9c-d4bf453bf29a' },
  { src: manilatimes, alt: 'Manila Times', url: 'https://www.manilatimes.net/2020/12/26/weekly/the-lookbook/young-filipina-designer-bea-cruz-wins-top-awards-in-us-fashion-shows/817465' },
  { src: sunstar, alt: 'Sun Star', url: null },
  { src: citizenink, alt: 'Citizen Ink', url: 'https://thecitizensink.weebly.com/feature/turning-heads-weaving-pride' },
  { src: diarist, alt: 'Diarist', url: 'https://www.thediarist.ph/bea-cruz-so-young-so-lured-into-the-1920s/' },
  { src: negros, alt: 'Negros', url: 'https://www.negrosseasonofculture.com/2022/09/bea-cruz.html' },
]

function App() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    // Observe sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Observe reveal-text elements for staggered animations
    document.querySelectorAll('.reveal-text').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="BÉACRUZ" />
          </button>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('collections')}>Collections</button></li>
            <li><button onClick={() => scrollToSection('exhibitions')}>Exhibitions</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('artworks')}>Artworks</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
          </ul>
        </div>
      </nav>

      {/* Parallax Sections Wrapper */}
      <div className="parallax-wrapper">
        {/* Hero Section */}
        <section id="hero" className="parallax-section hero">
          <div className="hero-image">
            <img src={heroImg} alt="BÉACRUZ craftsmanship" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">BÉACRUZ</h1>
            <p className="hero-tagline">Made in the Philippines</p>
          </div>
          <button className="scroll-indicator" onClick={() => scrollToSection('collections')}>
            <span className="scroll-line"></span>
          </button>
        </section>

        {/* Fashion Collection */}
        <section id="collections" className="parallax-section section-fullbleed" ref={addToRefs}>
          <div className="section-fullbleed-bg">
            <img src={collectionImg} alt="Fashion Collection" />
          </div>
          <div className="section-fullbleed-content">
            <span className="reveal-text section-label light" data-delay="1">Fashion Collection</span>
            <h2 className="reveal-text section-title light" data-delay="2">2018 — 2021</h2>
          </div>
        </section>

        {/* FWSD Exhibition */}
        <section id="exhibitions" className="parallax-section section-fullbleed" ref={addToRefs}>
          <div className="section-fullbleed-bg">
            <img src={exhibitionImg} alt="FWSD Exhibition" />
          </div>
          <div className="section-fullbleed-content">
            <span className="reveal-text section-label light" data-delay="1">Exhibition</span>
            <h2 className="reveal-text section-title-large light" data-delay="2">FWSD: Art and Beauty Behind Fashion</h2>
            <p className="reveal-text section-description light" data-delay="3">
              Sotheby's New York + Art Renewal Center
              <br />
              <span className="year light">2020 — 2021</span>
            </p>
          </div>
        </section>

        {/* Client Projects */}
        <section id="projects" className="parallax-section section-fullbleed" ref={addToRefs}>
          <div className="section-fullbleed-bg">
            <img src={clientImg} alt="Client Projects" />
          </div>
          <div className="section-fullbleed-content">
            <span className="reveal-text hashtag light" data-delay="1">#wearBCPH</span>
            <h2 className="reveal-text section-title-large light" data-delay="2">Client & Special Projects</h2>
          </div>
        </section>

        {/* 3D Fashion */}
        <section id="3d" className="parallax-section section-fullbleed dark-overlay" ref={addToRefs}>
          <div className="section-fullbleed-bg">
            <img src={threeDImg} alt="3D Fashion" />
          </div>
          <div className="section-fullbleed-content">
            <span className="reveal-text section-label light" data-delay="1">Digital</span>
            <h2 className="reveal-text section-title-large light" data-delay="2">3D Fashion & Jewelry</h2>
          </div>
        </section>

        {/* Artworks */}
        <section id="artworks" className="parallax-section section-fullbleed" ref={addToRefs}>
          <div className="section-fullbleed-bg">
            <img src={artworkImg} alt="Artworks" />
          </div>
          <div className="section-fullbleed-content">
            <span className="reveal-text section-label light" data-delay="1">Creative</span>
            <h2 className="reveal-text section-title-large light" data-delay="2">Artworks & Fashion Illustrations</h2>
          </div>
        </section>
      </div>

      {/* About */}
      <section id="about" className="section section-about" ref={addToRefs}>
        <div className="about-header">
          <h2 className="about-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-portrait">
            <img src={selfPortrait} alt="Beatriz Cruz" />
          </div>
          <div className="about-bio">
            <p className="bio-lead">
              Beatriz Cruz is a Filipino artist, womenswear fashion designer and the creative force of self-owned fashion brand BÉACRUZ.
            </p>
            <p>
              She started her brand from a thesis project which then gave her a step forward to the fashion scene, making her dreams into reality and achieved the Top Designer Award at Fashion Week San Diego, and the Top Team Designer Award for Fashion Week San Diego: Art & Beauty Behind Fashion exhibition in partnership with Sotheby's New York hosted by The Art Renewal Center in 2020, and was given the very first Fashion Week San Diego: Ashley Nell Tipton Special Award the following year.
            </p>
            <p>
              Bea specializes in bridal design, made-to-measure evening wear and luxury ready-to-wear pieces with subtle sophistication, elegantly intricate detailing and hand-sewn embroideries.
            </p>
            <p>
              From conceptualization to design execution to garment construction, she pours passion into every stitch of every garment piece she creates, same goes to her artworks and in life, as both art and fashion are her prime storytelling medium, a realm where you get to hear her thoughts and where she gets to share her emotions to the world.
            </p>
          </div>
          <div className="about-work">
            <img src={aboutImg} alt="Bea at work" />
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section section-press" ref={addToRefs}>
        <div className="press-header">
          <span className="press-label">Recognition</span>
          <h3 className="press-title">Featured In</h3>
        </div>

        {/* Featured Press Highlights */}
        <div className="press-featured">
          {featuredPress.map((feature, i) => (
            <a
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`press-feature-card ${feature.isCover ? 'is-cover' : ''}`}
              key={i}
            >
              <div className="feature-image-wrapper">
                <img src={feature.src} alt={feature.alt} />
                <div className="feature-shine"></div>
              </div>
              <div className="feature-details">
                <span className="feature-year">{feature.year}</span>
                <h4 className="feature-title">{feature.title}</h4>
                <span className="feature-subtitle">{feature.subtitle}</span>
                <p className="feature-description">{feature.description}</p>
                <span className="feature-cta">Read Article →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Other Press - Marquee */}
        <div className="press-other">
          <span className="press-other-label">Also featured in</span>
          <div className="press-marquee">
            <div className="marquee-track">
              {[...pressLogos, ...pressLogos].map((logo, i) =>
                logo.url ? (
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-logo"
                    key={i}
                  >
                    <img src={logo.src} alt={logo.alt} />
                  </a>
                ) : (
                  <div className="press-logo" key={i}>
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="BÉACRUZ" className="footer-logo" />
            <span className="footer-name">BÉACRUZ</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">CV</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Instagram</a>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} BÉACRUZ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
