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
          HighCurve is intended to be used as an auxillary information
          to an investor's decision. It is recommended that any 
          investment decision be augmented to the content 
          presented on HighCurve. By using HighCurve, all users are implicitly 
          agreeing that HighCurve is not responsible for the outcomes 
          of an investment decision. 
        </p>
      </div>
    </div>
  )
}