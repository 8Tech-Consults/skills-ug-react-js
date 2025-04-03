// src/app/pages/public/CareerResourcesPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CareerResourcesPage Component
 * Displays a collection of career advice, tools, and resources for job seekers.
 */
const CareerResourcesPage: React.FC = () => {

  // Placeholder URLs - Replace with actual internal/external links
  const placeholderLink = "#"; // Default placeholder for internal articles/guides not yet created
  const ugandaMglsdUrl = "https://www.mglsd.go.ug/"; // Example official site
  const nitaUUrl = "https://www.nita.go.ug/"; // Example official site
  const courseraUrl = "https://www.coursera.org/";
  const linkedInLearningUrl = "https://www.linkedin.com/learning/";
  // Add other external links as needed

  // Define resource data structure based on the detailed content plan
  // NOTE: Update 'link' properties with actual paths or URLs when available.
  const resourceCategories = [
    {
      title: "Building Your Profile & Resume",
      icon: "bi-file-earmark-person-fill", // Icon for the category
      resources: [
        { type: 'article', title: "Crafting a Winning CV/Resume for the Ugandan Market", description: "Tips on format, sections, action verbs, and tailoring.", link: "/resources/articles/crafting-winning-cv" }, // Example internal link
        { type: 'article', title: "Optimizing Your 8jobspot.com Profile", description: "Maximize visibility with keywords, completeness, and a professional photo.", link: placeholderLink },
        { type: 'guide', title: "Mastering Your Video CV", description: "Benefits, structure, technical tips, and linking to the feature.", link: "/video-cv" }, // Link to existing feature page
        { type: 'article', title: "Common Resume Mistakes and How to Avoid Them", description: "Learn to avoid typos, generic summaries, and irrelevant info.", link: placeholderLink },
      ]
    },
    {
      title: "Effective Job Searching",
      icon: "bi-search",
      resources: [
        { type: 'guide', title: "How to Search for Jobs & Gigs on 8jobspot.com", description: "Utilize filters, keywords, saved searches, and job alerts effectively.", link: placeholderLink },
        { type: 'article', title: "Networking Strategies in Uganda", description: "Leverage online platforms like LinkedIn and offline connections.", link: placeholderLink },
        { type: 'article', title: "Understanding Job Descriptions", description: "Analyze requirements, identify keywords, and assess your fit.", link: placeholderLink },
        { type: 'guide', title: "Researching Companies Before You Apply", description: "Why and how to research potential employers effectively.", link: placeholderLink },
      ]
    },
    {
      title: "Interview Preparation",
      icon: "bi-calendar-check-fill",
      resources: [
        { type: 'article', title: "Common Interview Questions in Uganda (and How to Prepare)", description: "Practice standard & behavioral questions using the STAR method.", link: placeholderLink },
        { type: 'guide', title: "Acing Phone, Video, and In-Person Interviews", description: "Specific tips for different interview formats.", link: placeholderLink },
        { type: 'article', title: "Professional Attire for Interviews in Uganda", description: "Guidance on dressing appropriately for different industries.", link: placeholderLink },
        { type: 'guide', title: "Smart Questions to Ask Your Interviewer", description: "Prepare insightful questions about the role, team, and company.", link: placeholderLink },
        { type: 'article', title: "Following Up After an Interview: Best Practices", description: "Learn the importance and etiquette of thank-you notes.", link: placeholderLink },
      ]
    },
    {
        title: "Career Development & Skills",
        icon: "bi-graph-up-arrow",
        resources: [
            { type: 'article', title: "Identifying and Highlighting Your Transferable Skills", description: "Recognize skills like communication, problem-solving, and teamwork.", link: placeholderLink },
            { type: 'guide', title: "Resources for Upskilling and Continuous Learning", description: "Importance of lifelong learning and links to online platforms.", link: placeholderLink },
            { type: 'external', title: "Coursera", description: "Access online courses from universities worldwide.", link: courseraUrl },
            { type: 'external', title: "LinkedIn Learning", description: "Develop business, tech and creative skills.", link: linkedInLearningUrl },
            { type: 'external', title: "NITA-U (National Information Technology Authority Uganda)", description: "Information on digital initiatives in Uganda.", link: nitaUUrl },
            // Add more curated links for specific sectors if available
        ]
    },
    {
        title: "Salary & Negotiation",
        icon: "bi-cash-coin",
        resources: [
            { type: 'article', title: "Understanding Salary Expectations in Uganda", description: "Factors influencing pay and research methods.", link: placeholderLink },
            { type: 'guide', title: "Tips for Negotiating Your Salary", description: "Learn when and how to negotiate effectively.", link: placeholderLink },
        ]
    },
    {
        title: "Workplace Essentials (Uganda Focus)",
        icon: "bi-briefcase-fill",
        resources: [
            { type: 'article', title: "Understanding Your Employment Contract in Uganda", description: "Key clauses and importance of careful review.", link: placeholderLink },
            { type: 'guide', title: "Professional Etiquette in the Ugandan Workplace", description: "Tips on punctuality, communication, and collaboration.", link: placeholderLink },
            { type: 'external', title: "Employee Rights & Responsibilities (MGLSD)", description: "Official information from the Ministry of Gender, Labour and Social Development.", link: ugandaMglsdUrl },
        ]
    },
  ];

  // Function to return appropriate icon based on resource type
  const getIconForType = (type: string) => {
    switch (type) {
      case 'article': return 'bi-file-text-fill';
      case 'guide': return 'bi-book-fill';
      case 'external': return 'bi-box-arrow-up-right';
      case 'video': return 'bi-play-btn-fill';
      default: return 'bi-link-45deg';
    }
  };

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
              <li className="breadcrumb-item active" aria-current="page">
                Career Resources
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Your Career Toolkit</h1>
            <p className="lead text-muted">
              Empower your job search and career growth with our collection of resources, guides, and tips tailored for success in Uganda's job market.
            </p>
             {/* Optional Search Bar Placeholder */}
             {/*
             <div className="row justify-content-center mt-4">
                <div className="col-lg-6">
                    <input type="search" className="form-control form-control-lg" placeholder="Search Resources..." />
                </div>
             </div>
             */}
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row gx-lg-5">
          {resourceCategories.map((category, catIndex) => (
            // Display each category as a card in a grid layout
            <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" key={catIndex}>
              <div className="card h-100 shadow-sm w-100">
                <div className="card-header bg-light border-bottom-0 p-3">
                  <h4 className="fw-semibold mb-0 fs-5"> {/* Adjusted heading size */}
                    <i className={`bi ${category.icon} me-2 text-primary`}></i>
                    {category.title}
                  </h4>
                </div>
                <div className="card-body p-3">
                  {/* List resources within the card */}
                  <ul className="list-unstyled mb-0">
                    {category.resources.map((resource, resIndex) => (
                      <li key={resIndex} className="mb-3 pb-2 border-bottom border-light"> {/* Added border */}
                        <div className="d-flex align-items-start">
                           <i className={`bi ${getIconForType(resource.type)} me-2 mt-1 text-muted`}></i>
                           <div className="flex-grow-1"> {/* Ensure text takes remaining space */}
                             {resource.type === 'external' ? (
                               // External link opens in new tab
                               <a
                                href={resource.link || placeholderLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fw-medium stretched-link text-decoration-none"
                               >
                                 {resource.title}
                               </a>
                             ) : (
                               // Internal link uses React Router's Link
                               <Link
                                to={resource.link || placeholderLink}
                                className="fw-medium stretched-link text-decoration-none"
                               >
                                 {resource.title}
                               </Link>
                             )}
                             <p className="small text-muted mb-0">{resource.description}</p>
                           </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerResourcesPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

