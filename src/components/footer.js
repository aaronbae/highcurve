import Link from 'next/link'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      <Link href="/"><a className="footer-logo-wrapper"><img src="logo-words.svg" className="footer-logo" /></a></Link>
      <div className="general-resource">
        <p className="footer-section-title">General Resource</p>
        <Link href="/about"><a>About</a></Link>
        <Link href="https://www.aaronbae.com/blog"><a target="_blank">Blog</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </div>
      <div className="technical">
        <p className="footer-section-title">Technical</p>
        <Link href="https://github.com/aaronbae/HighCurve"><a target="_blank">GitHub</a></Link>
        <Link href="https://finance.yahoo.com/"><a target="_blank">YahooAPI</a></Link>
      </div>
      <div className="legal">
        <p className="footer-section-title">Legal</p>
        <Link href="/disclaimer"><a>Disclaimer</a></Link>
      </div>
      <div className="footer-bottom">
        Built and Designed by AaronBae
      </div>
    </footer>
  )
}