import "../Css/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-scroll-container">
        <div class="scroll-container">
          <h1 className="firsth1">Discover</h1>
          <h1 className="secondh1">amazing startups</h1>
        </div>
        <div className="home-text">
          <p>Find great startups curated by our experts for i</p>
        </div>
        <div className="home-input">
          <input type="text" placeholder="Ex: Nearbygrocer,Nykaa,etc" />
          <label>Startup Name</label>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </button>
        </div>
      </div>
{/* Business Model */}
      <div className="business-model-container">
          <h1>
            Explore By <b>Business Model</b>
          </h1>
        <div className="business-model-list">
          <div>
            <button>B2B - Business To Business</button>
          </div>
          <div>
          
            <button>B2C - Business To Consumer</button>
          </div>
          <div>
            <button>B2B2C - Business To Business To Customer</button>
          </div>
          <div>
            <button>C2C-Consumer To Consumer</button>
          </div>
          <div>
            <button>C2B -Consumer To Business</button>
          </div>
          <div>
            <button>B2A - Business To Administration</button>
          </div>
          <div>
            <button>C2A - Customer To Administration</button>
          </div>
          <div className="last-btn">    
            <button>Other</button>
          </div>
        </div>
      </div>
{/*  Interested In*/}
      <div className="interested-container">
    
          <h1>
            Explore By <b>Interested In</b>
          </h1>
       
        <div className="interested-list">
          <div>
            <button>Incubation</button>
          </div>
          <div>
            <button>Acceleration</button>
          </div>
          <div>
            <button>Invesment</button>
          </div>
          <div>
            <button>Tech Mentorship</button>
          </div>
          <div>
            <button>Marketing Mentorship</button>
          </div>
          <div>
            <button>Legal Mentorship</button>
          </div>
          <div>
            <button>Operations Mentorship</button>
          </div>
          <div>
            <button>Financials Mentorship</button>
          </div>
          <div className="interested-lastbtn">
            <button> Business Collabs: Co-Founder</button>
          </div>
        </div>
      </div>
{/* Stage */}
      <div className="stage-container">
       
          <h1>
            Explore By <b>Stage</b>
          </h1>
        <div className="stage-list">
          <div>
            <button>Ideation</button>
          </div>
          <div>
            <button>Validation</button>
          </div>
          <div>
            <button>Early Traction</button>
          </div>
          <div>
            <button>Scaling</button>
          </div>
        </div>
      </div>
{/* Funding Type */}
      <div className="funding-type-container">
          <h1>
            Explore By <b>Funding Type</b>
          </h1>
        <div className="funding-type-list">
          <div>
            <button>Crowd Funded</button>
          </div>
          <div>
            <button>Pre-Seed Funded</button>
          </div>
          <div>
            <button>Seed Funded</button>
          </div>
          <div>
            <button>Series A</button>
          </div>
          <div>
            <button>Series B</button>
          </div>
          <div>
            <button>Series C</button>
          </div>
          <div>
            <button>Series D</button>
          </div>
          <div>
            <button>Series E</button>
          </div>
          <div className="founding-type-fbtn">
            <button>Series F</button>
          </div>
          <div className="founding-type-gbtn">
            <button>Series G</button>
          </div>
          <div className="founding-type-hbtn">
            <button>Series H</button>
          </div>
        </div>
      </div>
{/* Business Nature */}
      <div className="business-nature-container">
          <h1>
            Explore By <b>Business Nature</b>{" "}
          </h1>
        <div className="business-nature-list">
          <div>
            <button>Service</button>
          </div>
          <div>
            <button>Product</button>
          </div>
          <div>
            <button>Both</button>
          </div>
        </div>
      </div>
{/*Investment Nature*/}
      <div className="investment-nature-container">
          <h1>
            Explore By <b>Investment Nature</b>
          </h1>


        <div className="investment-nature-list">
          <div>
            <button>Equity Dilution</button>
          </div>
          <div>
            <button>Debt Funding</button>
          </div>
          <div>
            <button>Conertible Debt</button>
          </div>
          <div>
            <button>Crowd-Funding</button>
          </div>
          <div className="investment-nature-csr">
            <button>CSR</button>
          </div>
          <div className="investment-nature-all">
            <button>All</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
