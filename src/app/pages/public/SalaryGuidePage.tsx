// src/app/pages/public/SalaryGuidePage.tsx (Example file path - adjust as needed)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SalaryGuidePage Component
 * Provides guidance on understanding and negotiating salaries in the Ugandan job market.
 */
const SalaryGuidePage: React.FC = () => {

  // Placeholder link - replace with actual internal route
  const careerResourcesLink = "/career-resources";

  return (
    <React.Fragment>
      {/* --- Hero Section --- */}
      <div className="bg-body-secondary py-5 border-bottom mb-5">
        <div className="container px-4 px-lg-10">
          {/* --- Breadcrumb --- */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                 <Link to={careerResourcesLink}>Career Resources</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Salary Guide
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Understanding and Negotiating Salaries</h1>
            <p className="lead text-muted">
              A Job Seeker's Guide for the Ugandan Market
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width for readability */}

            <p className="lead mb-4">
              Salary is a crucial part of any job offer, yet discussing it can often feel challenging or unclear, especially in the Ugandan context where public salary data isn't always readily available. This guide aims to equip you, as a job seeker on 8jobspot.com, with practical strategies for researching salary expectations, understanding your worth, and navigating salary discussions professionally.
            </p>
            <hr className="my-5" />

            {/* Section 1: Understanding Compensation */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3"><span className="text-primary me-2">1.</span> Understanding Compensation in Uganda: Beyond the Basic Salary</h2>
              <p className="mb-4">When considering an offer, look beyond just the monthly figure:</p>

              <h3 className="h5 fw-semibold mb-2">Gross vs. Net Salary</h3>
              <p>Understand the difference. <strong>Gross salary</strong> is the amount before deductions. <strong>Net salary</strong> ("take-home pay") is what you receive after deductions like <strong>PAYE (Pay As You Earn income tax)</strong> and <strong>NSSF (National Social Security Fund contributions)</strong>. Always clarify if an offered figure is gross or net.</p>

              <h3 className="h5 fw-semibold mt-4 mb-2">Total Compensation Package</h3>
              <p>Salary is just one component. Evaluate the entire package, which might include:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Health Insurance (scope of coverage?)</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Transport Allowance</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Housing Allowance</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Airtime Allowance</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Pension/Retirement Contributions (beyond mandatory NSSF)</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Annual Bonuses or Performance Incentives</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Paid Leave Days (Annual, Sick, Maternity/Paternity)</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Training and Professional Development Opportunities</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Other perks (lunch, gym membership, etc.)</li>
              </ul>
              <p className="text-muted fst-italic small">A slightly lower base salary might be acceptable if the benefits package is particularly strong.</p>

              <h3 className="h5 fw-semibold mt-4 mb-2">Industry & Sector Variations</h3>
              <p>Be aware that typical salaries vary significantly based on the industry (e.g., Banking, Telecom, NGOs, Manufacturing), company size (large multinational vs. local SME), location (Kampala often commands higher salaries), and sector (Private vs. Public vs. Non-profit).</p>
            </section>

            {/* Section 2: Researching Expectations */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3"><span className="text-primary me-2">2.</span> Researching Salary Expectations: Navigating Limited Data</h2>
              <p className="mb-3">Finding reliable salary benchmarks for specific roles in Uganda can be tricky, but it's essential research. Don't rely on just one source:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><strong>Job Postings:</strong> Look for salary ranges on 8jobspot.com and other boards (though often omitted). Note ranges for comparable roles.</li>
                <li className="list-group-item px-0 border-0"><strong>Company Information:</strong> Research company size, sector, and reputation for clues.</li>
                <li className="list-group-item px-0 border-0"><strong>Online Salary Sites (Use with Caution):</strong> International sites may have limited/skewed Ugandan data. Use as a rough reference only.</li>
                <li className="list-group-item px-0 border-0"><strong>Networking & Informational Interviews (Crucial):</strong> Talk respectfully to mentors/contacts about typical *ranges* for roles at your level in your industry/location. Avoid asking personal salaries.</li>
                <li className="list-group-item px-0 border-0"><strong>Recruitment Agencies:</strong> Reputable agencies often have good market insights.</li>
                <li className="list-group-item px-0 border-0"><strong>Government & NGO Scales:</strong> Public sector and established NGO roles often have defined (sometimes public) salary scales.</li>
              </ul>
            </section>

            {/* Section 3: Determining Your Worth */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3"><span className="text-primary me-2">3.</span> Determining Your Worth</h2>
              <p className="mb-3">Based on your research and self-assessment, define your value:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><strong>Experience:</strong> Years of *relevant* experience for the role.</li>
                <li className="list-group-item px-0 border-0"><strong>Skills:</strong> In-demand technical skills, certifications, unique expertise, soft skills.</li>
                <li className="list-group-item px-0 border-0"><strong>Education:</strong> Relevance and level of your academic background.</li>
                <li className="list-group-item px-0 border-0"><strong>Track Record:</strong> Quantifiable achievements from previous roles (refer to your CV).</li>
                <li className="list-group-item px-0 border-0"><strong>Previous Salary:</strong> A data point, but focus on the value you bring to the *new* role.</li>
                <li className="list-group-item px-0 border-0"><strong>Define Your Range:</strong> Determine a realistic range (Minimum Acceptable to Target/Ideal) based on research and needs.</li>
              </ul>
            </section>

            {/* Section 4: Navigating Discussions */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3"><span className="text-primary me-2">4.</span> Navigating Salary Discussions</h2>
              <p className="mb-3">Timing and approach are key:</p>

              <h3 className="h5 fw-semibold mb-2">When to Discuss:</h3>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><strong>Ideally:</strong> Wait until after an offer is made or strong interest is shown.</li>
                <li className="list-group-item px-0 border-0">
                    <strong>If Asked Early:</strong> Try to defer politely (e.g., <em>"I'm open to discussing compensation once we determine I'm the right fit. Could you share the budgeted range?"</em>).
                    If you must provide a number, give your researched *range* (e.g., <em>"Based on my research..., salaries range from UGX [X] to UGX [Y]. My expectation falls within this range..."</em>). Avoid giving a single number or just your previous salary.
                </li>
              </ul>

              <h3 className="h5 fw-semibold mt-4 mb-2">Negotiating After an Offer:</h3>
               <ul className="list-group list-group-flush mb-3">
                 <li className="list-group-item px-0 border-0"><strong>Express Gratitude:</strong> Thank them and express enthusiasm.</li>
                 <li className="list-group-item px-0 border-0"><strong>Evaluate Full Package:</strong> Consider salary *and* benefits.</li>
                 <li className="list-group-item px-0 border-0"><strong>State Counter-Offer (If Needed):</strong> If the offer is low, professionally state your desired salary/range and *justify* it based on your value, skills, experience, and market research.
                    <blockquote className="blockquote bg-light border-start border-primary border-3 p-2 rounded fst-italic small mt-2">
                        <em>Example: "Thank you for the offer! I'm very excited... Based on my understanding and research for positions requiring [X years experience/specific skill] in [Industry] in Uganda, I was targeting a salary closer to UGX [Your Target Figure]. Would that be possible?"</em>
                    </blockquote>
                 </li>
                 <li className="list-group-item px-0 border-0"><strong>Be Prepared to Compromise:</strong> Know your minimum acceptable figure.</li>
                 <li className="list-group-item px-0 border-0"><strong>Negotiate Benefits:</strong> If salary is firm, explore negotiating allowances, training budget, or leave.</li>
                 <li className="list-group-item px-0 border-0"><strong>Maintain Professionalism:</strong> Keep the tone positive and collaborative.</li>
                 <li className="list-group-item px-0 border-0"><strong>Get it in Writing:</strong> Ensure the final agreed terms are in a written contract.</li>
               </ul>
            </section>

            {/* Section 5: Red Flags */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3"><span className="text-danger me-2">5.</span> Salary Red Flags to Watch For</h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>Employers demanding exact previous salary slips very early.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>Offers significantly below researched market rates without justification.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>High-pressure tactics demanding immediate acceptance.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>Vague promises about future raises instead of a fair start.</li>
                <li className="list-group-item px-0 border-0"><strong className="text-danger"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>Requests for payment from you to secure the job or interview – NEVER pay for a job!</strong></li>
              </ul>
            </section>

            <hr className="my-5" />

            {/* Section 6: Conclusion */}
            <section className="mb-5 text-center">
              <h2 className="fw-bolder mb-3">Conclusion</h2>
              <p className="lead text-muted mb-4">
                Navigating salary discussions requires preparation, research, and confidence. While finding precise salary data in Uganda can be challenging, focusing on networking, understanding the total compensation package, knowing your value, and practicing professional negotiation techniques will put you in a stronger position.
              </p>
              <p className="mb-4">
                 Use 8jobspot.com to research roles and companies, and leverage our other <Link to={careerResourcesLink}>Career Resources</Link> to prepare effectively.
              </p>
              <p className="fw-bold fs-5">Know your worth, communicate clearly, and negotiate professionally!</p>
            </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SalaryGuidePage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

