// src/app/pages/public/ContactUsPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ContactUsPage Component
 * Displays contact information for 8jobspot.com.
 */
const ContactUsPage: React.FC = () => {
  // Contact Details (Based on 8technologies.net info and placeholders)
  const address = 'Eight Tech Corporation Towers, Palm Springs Estates, Kitagobwa, Nangabo, Kasangati Town Council, Wakiso District, Uganda';
  const phoneNumbers = ['+256 778 167 775', '+256 393 256 165'];
  const generalEmail = 'info@8jobspot.com'; // Or info@8technologies.net
  const supportEmail = 'support@8jobspot.com'; // Placeholder
  const partnershipsEmail = 'partnerships@8jobspot.com'; // Placeholder
  const accessibilityEmail = 'accessibility@8jobspot.com'; // Placeholder
  const businessHours = [
    'Monday - Friday: 8:00 AM – 5:00 PM (EAT)',
    'Saturday: 8:00 AM – 12:00 PM (EAT)',
    'Sunday & Public Holidays: Closed',
  ];
  // Social Media Links (Replace # with actual URLs)
   const socialLinks = {
    facebook: "#facebook",
    youtube: "#youtube",
    linkedin: "#linkedin",
    instagram: "#instagram",
    twitter: "#twitter", // Optional
  };
  // Google Maps Embed URL Placeholder (Replace with actual embed URL)
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d444.93573289998574!2d32.569985719499876!3d0.45020249168899096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1704507495%3A0x12305ba929f9db2a!2sEight%20Tech%20Consults%20Limited!5e1!3m2!1sen!2sug!4v1743668574949!5m2!1sen!2sug`; // Example Placeholder URL

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
                Contact Us
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Get In Touch</h1>
            <p className="lead text-muted">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row gx-4 gx-lg-5">

          {/* Column 1: Contact Details */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="fw-bolder mb-4">Contact Information</h2>

                {/* Address */}
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="bi bi-geo-alt-fill text-primary fs-3 me-3"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-1">Office Address</h5>
                    <p className="text-muted mb-0">{address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="bi bi-telephone-fill text-primary fs-3 me-3"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-1">Phone Numbers</h5>
                    {phoneNumbers.map((phone, index) => (
                      <p className="text-muted mb-0" key={index}>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-reset text-decoration-none">{phone}</a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="bi bi-envelope-fill text-primary fs-3 me-3"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-1">Email Addresses</h5>
                    <p className="text-muted mb-0">
                      General Inquiries: <a href={`mailto:${generalEmail}`} className="text-reset">{generalEmail}</a>
                    </p>
                    <p className="text-muted mb-0">
                      Support: <a href={`mailto:${supportEmail}`} className="text-reset">{supportEmail}</a>
                    </p>
                    <p className="text-muted mb-0">
                      Partnerships: <a href={`mailto:${partnershipsEmail}`} className="text-reset">{partnershipsEmail}</a>
                    </p>
                     <p className="text-muted mb-0">
                      Accessibility: <a href={`mailto:${accessibilityEmail}`} className="text-reset">{accessibilityEmail}</a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="d-flex mb-0"> {/* Removed mb-4 */}
                  <div className="flex-shrink-0">
                    <i className="bi bi-clock-fill text-primary fs-3 me-3"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-1">Business Hours</h5>
                    {businessHours.map((hours, index) => (
                       <p className="text-muted mb-0" key={index}>{hours}</p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Map and Social Media */}
          <div className="col-lg-6">
             {/* Map */}
             <div className="card shadow-sm mb-4">
                <div className="card-body p-4">
                    <h3 className="fw-bolder mb-3">Our Location</h3>
                     {/* Placeholder for Google Maps Embed */}
                     <div className="ratio ratio-16x9">
                        <iframe
                            src={mapEmbedUrl} // Use the placeholder URL
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                        ></iframe>
                    </div>
                    <p className="text-muted small mt-2">View on <a href="#" target="_blank" rel="noopener noreferrer">Google Maps</a></p> {/* Add actual link */}
                </div>
             </div>

             {/* Social Media */}
             <div className="card shadow-sm">
                <div className="card-body p-4">
                    <h3 className="fw-bolder mb-3">Follow Us</h3>
                     <div className="d-flex flex-wrap gap-4"> {/* Increased gap */}
                        <a
                            href={socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-body fs-3" // Use text-body for default color
                            aria-label="Facebook"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href={socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-body fs-3"
                            aria-label="YouTube"
                        >
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-body fs-3"
                            aria-label="LinkedIn"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-body fs-3"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        {/* Optional Twitter */}
                        {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-body fs-3" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a> */}
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUsPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

