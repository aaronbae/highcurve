import Banner from '../components/banner';
import '../styles/disclaimer.css';

export default function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <Banner height="30vh">
        DISCLAIMER
      </Banner>
      <p className="disclaimer-title">Disclaimer</p>
      <div className="disclaimer-section">
        <p className="disclaimer-content">
          HighCurve is intended to be an axillary information system
          that an investor can use. HighCurve strives to represent
          the fullest depiction of the market with the state-of-the-art
          machine learning algorithms, but limitations imposed by the 
          of the natural market volatility still lingers. When using 
          HighCurve and making an investment decision, all users 
          must acknowledge that HighCurve is not responsible for the 
          outcomes of an investment decision. 
        </p>
        <p className="disclaimer-content">
          To inquire about the proprietary recommendation system, 
          please reach out to me via the Contact page below. 
        </p>
      </div>
    </div>
  )
}