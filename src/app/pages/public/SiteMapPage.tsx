// src/app/pages/public/SiteMapPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SiteMapPage Component
 * Displays a hierarchical list of links to major pages on 8jobspot.com.
 */
const SiteMapPage: React.FC = () => {
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
                Site Map
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Site Map</h1>
            <p className="lead text-muted">
              Navigate 8jobspot.com easily. Find links to all major sections and pages below.
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row">

          {/* Column 1: Main & Auth */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="mb-4">
              <h3 className="fw-semibold mb-3">Main Pages</h3>
              <ul className="list-unstyled lh-lg">
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/">Home</Link></li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/jobs">Find Jobs & Gigs</Link> {/* Confirm route */}</li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/candidates">Find Candidates</Link> {/* Confirm route, e.g., /candidates or /employer/search */}</li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/about">About Us</Link></li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/contact">Contact Us</Link></li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/sitemap">Site Map</Link></li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="fw-semibold mb-3">Authentication & Account</h3>
               <ul className="list-unstyled lh-lg">
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/auth/login">Login</Link> {/* Confirm route */}</li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/auth/registration">Register (Job Seeker)</Link> {/* Confirm route */}</li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/register">Register (Employer)</Link></li>
                <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/auth/forgot-password">Forgot Password</Link> {/* Confirm route */}</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Job Seekers */}
          <div className="col-md-6 col-lg-4 mb-4">
            <h3 className="fw-semibold mb-3">For Job Seekers</h3>
            <ul className="list-unstyled lh-lg">
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/account/dashboard">Job Seeker Dashboard</Link> {/* Confirm route */}</li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/edit-resume">Create/Edit Resume</Link></li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/account/applications">My Applications</Link> {/* Proposed route */}</li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/account/saved-jobs">Saved Jobs</Link> {/* Proposed route */}</li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/video-cv">Video CV Service</Link></li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/skillsug-pro">8jobspot.com Pro</Link> {/* Confirm route */}</li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/career-resources">Career Resources</Link></li>
              <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/jobseekers-faq">Job Seeker FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Employers & Info/Legal */}
          <div className="col-md-6 col-lg-4 mb-4">
             <div className="mb-4">
                <h3 className="fw-semibold mb-3">For Employers</h3>
                 <ul className="list-unstyled lh-lg">
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/dashboard">Employer Dashboard</Link> {/* Confirm route */}</li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/post-job">Post a Job/Gig</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/candidates">Find Candidates</Link> {/* Confirm route, e.g., /candidates or /employer/search */}</li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/manage-jobs">Manage Jobs</Link> {/* Proposed route */}</li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/profile">Company Profile</Link> {/* Proposed route */}</li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/products">Products & Services</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/disability-inclusion">Disability Inclusion Info</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/employer/faq">Employer FAQ</Link></li>
                </ul>
             </div>

             <div className="mb-4">
                <h3 className="fw-semibold mb-3">Information & Legal</h3>
                 <ul className="list-unstyled lh-lg">
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/partners">Partners</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/feedback">Feedback</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/terms">Terms & Conditions</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><i className="bi bi-link-45deg me-2 text-primary"></i><Link to="/accessibility">Accessibility Statement</Link></li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default SiteMapPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

