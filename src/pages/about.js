import '../styles/about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-banner-wrapper">
        <div className="about-banner">
          <img src="logo-words.svg" alt="HighCurve Logo" className="about-banner-img"/>
        </div>
      </div>
      <p className="about-title">About</p>
      <div className="about-section">
        <p className="about-section-title">Mission</p>
        <p className="about-content">
          HighCurve is a project built by Aaron Bae to help new investers to get 
          started with basic information about investments. Financial stability
          and shrewd investment strategy is something that every person should 
          be able to freely access, and HighCurve is designed to meet that need.
        </p>
        <p className="about-content">
          Furthermore, HighCurve is different from other financial information platforms 
          in that it only looks at historical data. Meaning, it does not show a live data 
          during the day. Instead, HighCurve only shows you the daily stock values 
          from the past. Hence, it is the reason why the latest stock value information
          you can view is the day prior to the day of viewing.
        </p>
      </div>
      <div className="about-section">
        <p className="about-section-title">Limitations</p>
        <p className="about-content">
          This limitation on historical data was because of 2 reasons. First is 
          the cost. As the architect and the sole sponsor of this platform,
          I realized that the cost of maintaining this website would be very high
          if I were to host daily live data as well. Instead, if I were to only host 
          daily Open-High-Low-Close (OHLC) information, the volume of data HighCurve 
          would have to manage and the number of interactions each client would need 
          to make would be much smaller. Hopefully, in the near feature, I would be 
          able to increase this capacity with more funding.
        </p>
        <p className="about-content">
          Second reason is that HighCurve is not designed for recommendations for 
          day-traders. Instead, it is only designed for casual users who are 
          looking for longer investment recommendations. Therefore, daily historical
          data is perfectly adequate for mission of HighCurve.
        </p>
      </div>
      <div className="about-section">
        <p className="about-section-title">Yahoo API</p>
        <p className="about-content">
          Also, HighCurve is built on Yahoo API. Every midnight (PST), HighCurve will gather 
          the daily stock information from the day prior, and populate the database.
          Usually, the data will be finished populating by 1AM PST, and the information
          should be visible accordingly.
        </p>
      </div>
      <div className="about-section">
        <p className="about-section-title">Support HighCurve</p>
        <p className="about-content">
          Lastly, HighCurve is an on-going project solely lead by Aaron Bae, and I would
          love to hear more about your suggestions. Please if you have an idea, or 
          want to collaborate on this project, feel free to reach out to me via the 
          contact page of HighCurve.
        </p>
      </div>
    </div>
  )
}