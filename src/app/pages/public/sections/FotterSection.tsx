// src/app/components/FooterSection.tsx

import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * Revised footer component for 8jobspot.com.
 * Features improved structure, spacing, wording, and professional styling using Bootstrap 5.
 * V3: Fixed link visibility and ensured bullet points are visible on dark background.
 */
const FooterSection: React.FC = () => {
  // Define social media links (replace '#' with actual URLs)
  const socialLinks = {
    facebook: "#facebook", // Replace with your Facebook URL
    youtube: "#youtube", // Replace with your YouTube URL
    linkedin: "#linkedin", // Replace with your LinkedIn URL
    instagram: "#instagram", // Replace with your Instagram URL
    twitter: "#twitter", // Replace with your Twitter URL (Optional)
  };

  // Define app store links (replace '#' with actual URLs)
  const appStoreLinks = {
    googlePlay: "#playstore", // Replace with Google Play URL
    appleStore: "#appstore", // Replace with Apple App Store URL
    appGallery: "#appgallery", // Replace with Huawei AppGallery URL (Optional)
  };

  // Contact information (replace with actual details or load from config)
  const contactPhoneNumbers = "+256 778 167 775, +256 393 256 165"; // Example numbers
  const contactHours = "9:00 AM - 8:00 PM (Saturday - Thursday)"; // Example hours

  return (
    // Use a slightly lighter dark theme for better contrast and Bootstrap dark theme compatibility
    <footer
      className="bg-body-tertiary text-light pt-5 pb-4" // Increased bottom padding
      data-bs-theme="dark" // Ensures Bootstrap components adapt to dark background
      style={{ fontSize: "0.9rem" }} // Keep base font size
    >
      <div className="container px-3 px-lg-10">
        {/* Main Footer Links Section */}
        <div className="row gy-4 mb-4">
          {" "}
          {/* Add bottom margin before the HR */}
          {/* Column 1: About Us */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 fw-semibold text-uppercase">About Us</h5>{" "}
            {/* Use fw-semibold */}
            {/* Removed list-unstyled to show bullets */}
            <ul className="lh-lg ps-4 footer-list-bullets">
              {" "}
              {/* Added ps-4 and custom class */}
              <li>
                <Link to="/about" className="text-decoration-none footer-link">
                  About 8jobspot.com
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-decoration-none footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-decoration-none footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-decoration-none footer-link"
                >
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-decoration-none footer-link"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-decoration-none footer-link"
                >
                  Site Map
                </Link>{" "}
                {/* Added Site Map */}
              </li>
            </ul>
          </div>
          {/* Column 2: For Job Seekers */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 fw-semibold text-uppercase">For Job Seekers</h5>
            {/* Removed list-unstyled to show bullets */}
            <ul className="lh-lg ps-4 footer-list-bullets">
              {" "}
              {/* Added ps-4 and custom class */}
              <li>
                <Link
                  to="/admin" // Example: Link to user dashboard
                  className="text-decoration-none footer-link"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/profile-edit"
                  className="text-decoration-none footer-link"
                >
                  Create/Edit Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/my-cv"
                  className="text-decoration-none footer-link"
                >
                  Down PDF CV
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    toast("Coming Soon!", { type: "info" }); 
                  }}
                  className="btn btn-link text-decoration-none footer-link d-inline-flex align-items-center p-0"
                  style={{ cursor: "pointer" }}
                >
                  8jobspot.com Pro
                  <span className="badge bg-warning text-dark ms-2">NEW</span>
                </button>
              </li>
              <li>
                {/* Updated link text and kept original path for now */}
                <a
                  href="https://8learning.org/register-for-course/" // Updated to external link
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Ensures security for external links
                  className="text-decoration-none footer-link d-inline-flex align-items-center" // Use flex for alignment
                >
                  8learning
                  <span className="badge bg-warning text-dark ms-2">
                    NEW
                  </span>{" "}
                  {/* Adjusted margin */}
                </a>
              </li>
              <li>
                <Link
                  to="/career-resources" // Consolidated link
                  className="text-decoration-none footer-link"
                >
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/jobseekers-faq"
                  className="text-decoration-none footer-link"
                >
                  Job Seeker FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: For Employers */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 fw-semibold text-uppercase">For Employers</h5>
            {/* Removed list-unstyled to show bullets */}
            <ul className="lh-lg ps-4 footer-list-bullets">
              {" "}
              {/* Added ps-4 and custom class */}
              <li>
                <Link
                  to="/admin/company-profile-edit"
                  className="text-decoration-none footer-link"
                >
                  Create Employer Account
                </Link>
              </li>
              <li>
                <Link
                  to="/admin" // Example: Link to employer dashboard
                  className="text-decoration-none footer-link"
                >
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/job-create"
                  className="text-decoration-none footer-link"
                >
                  Post a Job / Gig
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-decoration-none footer-link">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  to="disability-inclusion"
                  className="text-decoration-none footer-link"
                >
                  Disability Inclusion
                </Link>
              </li>
              <li>
                <Link
                  to="employer-faq"
                  className="text-decoration-none footer-link"
                >
                  Employer FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Connect & Download */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 fw-semibold text-uppercase">Connect With Us</h5>
            {/* Social Media Links */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4" // Increased icon size
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              {/* Optional Twitter */}
              {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-light fs-4" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a> */}
            </div>

            {/* Download App Section */}
            <h6 className="text-light mb-3 fw-semibold">Download Our App</h6>
            <div className="d-flex flex-column gap-2">
              {" "}
              {/* Stack badges vertically */}
              <a
                href={appStoreLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label="Get it on Google Play"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  style={{ height: "40px" }} // Slightly larger badges
                />
              </a>
              <a
                href={appStoreLinks.appleStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label="Download on the App Store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  style={{ height: "40px" }}
                />
              </a>
              {/* Optional AppGallery */}
              {/* <a href={appStoreLinks.appGallery} target="_blank" rel="noopener noreferrer" className="text-decoration-none" aria-label="Explore it on AppGallery">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Huawei_AppGallery_badge_EN.svg" alt="Explore it on AppGallery" style={{ height: '40px' }} />
                            </a> */}
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="text-white my-4" />

        {/* Footer Bottom: Contact Info & Copyright */}
        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-1 text-white">
              Need Support? Call Us:{" "}
              <i className="bi bi-telephone-fill text-warning me-1"></i>
              <span className="text-warning fw-bold">
                {contactPhoneNumbers}
              </span>
            </p>
            <p className="mb-0 text-white" style={{ fontSize: "0.85rem" }}>
              <i className="bi bi-clock-fill me-1"></i>
              Support Hours: {contactHours}
            </p>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <small className="text-white">
              &copy; {new Date().getFullYear()} 8jobspot.com. All Rights
              Reserved.
            </small>
            <br />
            {/* Optional: Link to developer */}
            <small className="text-white" style={{ fontSize: "0.75rem" }}>
              Developed by{" "}
              <a
                href="https://8technologies.net/" // Link to developer
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                8Technologies.net
              </a>
            </small>
          </div>
        </div>
      </div>

      {/* CSS for link hover effect and bullet visibility */}
      <style>{`
        /* Default link style - visible on dark background */
        .footer-link {
          color: var(--bs-gray-900) !important; /* Corrected: Lighter gray for visibility */
          transition: color 0.2s ease-in-out;
        }
        /* Link hover style */
        .footer-link:hover {
          color: var(--bs-warning) !important; /* Brighter color on hover */
          text-decoration: underline !important;
        }
        /* Style for secondary links like 'Developed by' */
        .footer-link-secondary {
          color: var(--bs-secondary) !important;
          transition: color 0.2s ease-in-out;
        }
        .footer-link-secondary:hover {
          color: var(--bs-light) !important;
        }
        /* Ensure bullets are visible */
        .footer-list-bullets li::marker {
            color: var(--bs-gray-500) !important; /* Use a visible gray for bullets */
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;

// Make sure you have react-router-dom and bootstrap installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Ensure Bootstrap CSS and JS are imported in your main application file (e.g., index.tsx or App.tsx)
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Optional: if you need JS components like dropdowns
