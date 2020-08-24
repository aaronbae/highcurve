import Link from 'next/link'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-inner-container">
        <Link href="/">
          <a className="logo-wrapper">
            <img className="highcurve-logo" src="/logo-words.svg" alt="HighCurve" />
          </a>
        </Link>
        <nav className="navigation">
          <div className="search-group">
            <span>Search</span>
            <input className="searchbar" type="text" />
          </div>
        </nav>
      </div>
    </header>
  )
}