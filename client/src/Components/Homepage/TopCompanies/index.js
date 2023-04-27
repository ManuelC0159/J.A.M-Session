import {React} from "react";

function TopCompanies() {
    const companies = [
      { name: "Google", logo: "google-logo.png" },
      { name: "Facebook", logo: "facebook-logo.png" },
      { name: "Amazon", logo: "amazon-logo.png" },
      { name: "Microsoft", logo: "microsoft-logo.png" },
      { name: "Apple", logo: "apple-logo.png" },
    ];
  
    return (
      <section className="top-companies">
        <h2>Top Companies Hiring</h2>
        <div className="company-list">
          {companies.map((company) => (
            <div key={company.name} className="company-item">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default TopCompanies;