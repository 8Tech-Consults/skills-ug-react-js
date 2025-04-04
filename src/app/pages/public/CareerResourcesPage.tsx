// src/app/pages/public/CareerResourcesPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CareerResourcesPage Component
 * Displays a collection of career advice, tools, and resources for job seekers.
 */
const CareerResourcesPage: React.FC = () => {

  // Placeholder URLs - Replace with actual internal/external links
  const placeholderLink = "#"; // Default placeholder
  const ugandaMglsdUrl = "https://www.mglsd.go.ug/"; // Example official site
  const nitaUUrl = "https://www.nita.go.ug/"; // Example official site
  const courseraUrl = "https://www.coursera.org/";
  const linkedInLearningUrl = "https://www.linkedin.com/learning/";

  // Define resource data structure (example)
  // In a real app, this might come from an API or CMS
  const resourceCategories = [
    {
      title: "Building Your Profile & Resume",
      icon: "bi-file-earmark-person-fill",
      resources: [
        { type: 'article', title: "Crafting a Winning CV/Resume for the Ugandan Market", description: "Tips on format, sections, action verbs, and tailoring.", link: "/resources/articles/crafting-winning-cv" },
        { type: 'article', title: "Optimizing Your 8jobspot.com Profile", description: "Maximize visibility with keywords, completeness, and a professional photo.", link: "/resources/articles/optimizing-profile" },
        { type: 'guide', title: "Mastering Your Video CV", description: "Benefits, structure, technical tips, and linking to the feature.", link: "/video-cv" }, // Link to feature page
        { type: 'article', title: "Common Resume Mistakes and How to Avoid Them", description: "Learn to avoid typos, generic summaries, and irrelevant info.", link: "/resources/articles/resume-mistakes" },
      ]
    },
    {
      title: "Effective Job Searching",
      icon: "bi-search",
      resources: [
        { type: 'guide', title: "How to Search for Jobs & Gigs on 8jobspot.com", description: "Utilize filters, keywords, saved searches, and job alerts effectively.", link: "/resources/guides/searching-8jobspot" },
        { type: 'article', title: "Networking Strategies in Uganda", description: "Leverage online platforms like LinkedIn and offline connections.", link: "/resources/articles/networking-uganda" },
        { type: 'article', title: "Understanding Job Descriptions", description: "Analyze requirements, identify keywords, and assess your fit.", link: "/resources/articles/understanding-jd" },
        { type: 'guide', title: "Researching Companies Before You Apply", description: "Why and how to research potential employers effectively.", link: "/resources/guides/researching-companies" },
      ]
    },
    {
      title: "Interview Preparation",
      icon: "bi-calendar-check-fill",
      resources: [
        { type: 'article', title: "Common Interview Questions in Uganda (and How to Prepare)", description: "Practice standard & behavioral questions using the STAR method.", link: "/resources/articles/interview-questions-uganda" },
        { type: 'guide', title: "Acing Phone, Video, and In-Person Interviews", description: "Specific tips for different interview formats.", link: "/resources/guides/interview-formats" },
        { type: 'article', title: "Professional Attire for Interviews in Uganda", description: "Guidance on dressing appropriately for different industries.", link: "/resources/articles/interview-attire-uganda" },
        { type: 'guide', title: "Smart Questions to Ask Your Interviewer", description: "Prepare insightful questions about the role, team, and company.", link: "/resources/guides/questions-for-interviewer" },
        { type: 'article', title: "Following Up After an Interview: Best Practices", description: "Learn the importance and etiquette of thank-you notes.", link: "/resources/articles/interview-follow-up" },
      ]
    },
    {
        title: "Career Development & Skills",
        icon: "bi-graph-up-arrow",
        resources: [
            { type: 'article', title: "Identifying and Highlighting Your Transferable Skills", description: "Recognize skills like communication, problem-solving, and teamwork.", link: "/resources/articles/transferable-skills" },
            { type: 'guide', title: "Resources for Upskilling and Continuous Learning", description: "Importance of lifelong learning and links to online platforms.", link: "/resources/guides/upskilling-resources" },
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
            { type: 'article', title: "Understanding Salary Expectations in Uganda", description: "Factors influencing pay and research methods.", link: "/resources/articles/salary-expectations-uganda" },
            { type: 'guide', title: "Tips for Negotiating Your Salary", description: "Learn when and how to negotiate effectively.", link: "/resources/guides/salary-negotiation" },
        ]
    },
    {
        title: "Workplace Essentials (Uganda Focus)",
        icon: "bi-briefcase-fill",
        resources: [
            { type: 'article', title: "Understanding Your Employment Contract in Uganda", description: "Key clauses and importance of careful review.", link: "/resources/articles/uganda-contracts" },
            { type: 'guide', title: "Professional Etiquette in the Ugandan Workplace", description: "Tips on punctuality, communication, and collaboration.", link: "/resources/guides/uganda-workplace-etiquette" },
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
            <div className="col-lg-6 col-xl-4 mb-4" key={catIndex}>
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-light border-bottom-0 p-3">
                  <h4 className="fw-semibold mb-0">
                    <i className={`bi ${category.icon} me-2 text-primary`}></i>
                    {category.title}
                  </h4>
                </div>
                <div className="card-body p-3">
                  <ul className="list-unstyled mb-0">
                    {category.resources.map((resource, resIndex) => (
                      <li key={resIndex} className="mb-3 pb-2 border-bottom border-light"> {/* Added border */}
                        <div className="d-flex align-items-start">
                           <i className={`bi ${getIconForType(resource.type)} me-2 mt-1 text-muted`}></i>
                           <div>
                             {resource.type === 'external' ? (
                               <a href={resource.link || placeholderLink} target="_blank" rel="noopener noreferrer" className="fw-medium stretched-link text-decoration-none">
                                 {resource.title}
                               </a>
                             ) : (
                               <Link to={resource.link || placeholderLink} className="fw-medium stretched-link text-decoration-none">
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
