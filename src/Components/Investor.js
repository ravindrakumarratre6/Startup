import "../Css/Investor.css";

const Investor = () => {
  return (
    <div className="investor-container">
      <div className="investor-heading">
        <h1>INVESTORS</h1>
      </div>
      <div className="investor-paragraph">
        <p>
          Welcome to our platform, where we connect innovative startups with
          savvy investors. Our goal is to make the investment process as
          seamless and efficient as possible. We understand that as an investor,
          you are looking for opportunities to grow your portfolio and generate
          returns. That's why we've created a platform that streamlines the
          process of finding, researching, and investing in startups.
        </p>
      </div>
      <div className="investor-paragraph">
        <p>
          Our platform offers a wide range of startups across various industries
          and stages of development, providing investors with a diverse range of
          investment opportunities.
        </p>
      </div>
      <div>
        <ul className="investore-list">
          <li> A curated selection of high-potential startups</li>
          <li>
            Detailed information on each startup, including financials and pitch
            decks
          </li>
          <li>A streamlined investment process</li>
          <li>Exclusive events and networking opportunities</li>
          <li>
            Wide range of investment options across various industries and
            sectors
          </li>
          <li>Access to vetted and un-vetted startups</li>
          <li>Transparent and user-friendly interface</li>
          <li>
            Opportunity to connect and network with other like-minded
            individuals
          </li>
          <li>
            Dedicated team of experts constantly researching and analyzing the
            startup ecosystem
          </li>
          <li>
            Access to regular reports, newsletters and webinars on the latest
            trends and developments in the startup ecosystem.
          </li>
        </ul>
      </div>
      <div className="investor-paragraph">
        <p>
          By joining our platform, you'll have access to a diverse range of
          investment opportunities and the support you need to make informed
          decisions. Let's work together to build your portfolio and achieve
          your financial goals.
        </p>
      </div>
      <div>
        <ul className="investor-meter">
          <li> 
            <h3>9,050,656</h3>
            <p>Investors</p>
          </li>
          <li>
          <h3>20,956,732 </h3>
            <p>Registed Startups3</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Investor;
