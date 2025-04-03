// src/app/pages/public/AccessibilityStatementPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AccessibilityStatementPage Component
 * Displays the Accessibility Statement for 8jobspot.com.
 *
 * IMPORTANT: The content herein provides a template. Specific claims regarding
 * conformance status, features, limitations, and assessment MUST be verified
 * and updated based on actual audits and testing of the platform.
 */
const AccessibilityStatementPage: React.FC = () => {
  // Placeholders - Replace/Confirm these based on actual status
  const lastUpdatedDate = 'April 3, 2025'; // Set current date
  const platformName = '8jobspot.com';
  const companyName = '8jobspot.com / 8Technologies.net';
  const accessibilityContactEmail = 'accessibility@8jobspot.com'; // Use a real monitored email
  const contactPageUrl = '/contact'; // Link to your general contact page

  // NOTE: Choose the most accurate conformance status after assessment
  const conformanceStatus = `partially conformant with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard due to [mention general reason briefly, e.g., ongoing improvements or known limitations listed below].`;
  // Alternative if still working towards it: `aiming to conform fully to WCAG 2.1 Level AA and are actively working to improve accessibility.`

  // NOTE: Verify these features are actually implemented
  const implementedFeatures = [
    'Using semantic HTML5 elements for logical content structure.',
    'Implementing WAI-ARIA roles and properties where appropriate.',
    'Ensuring most functionality is navigable using a keyboard alone.',
    'Providing clear visual focus indicators for keyboard users.',
    'Adding descriptive alternative text to meaningful images.',
    'Allowing text resizing through standard browser controls.',
    'Striving for sufficient color contrast between text and backgrounds.',
    'Maintaining a consistent and predictable layout across pages.',
    'Associating labels clearly with form fields.',
  ];

  // NOTE: Be transparent and list actual known limitations
  const knownLimitations = [
    'Content provided by third parties (e.g., some employer branding materials, embedded content) may not fully conform.',
    'User-uploaded documents (like resumes in certain formats) may vary in accessibility.',
    'Some legacy or complex interactive elements might pose challenges for certain assistive technologies; we are working on addressing these.',
    'Not all video content currently includes captions or transcripts, though we are working to expand this coverage.',
  ];

  // NOTE: Describe your actual assessment process
  const assessmentApproach = `Accessibility of ${platformName} is assessed through a combination of self-evaluation by our development team, the use of automated accessibility testing tools during development, and manual testing using keyboard navigation and screen reader software (such as NVDA and VoiceOver). We are continuously seeking ways to improve our assessment process.`;
  // Add ", and periodic user testing with individuals with disabilities" if applicable.

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
                Accessibility Statement
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Accessibility Statement</h1>
            <p className="lead text-muted">
              Last Updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width for readability */}

            {/* Section 1: Commitment */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">1. Our Commitment to Accessibility</h2>
              <p>{companyName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to make our platform, {platformName}, accessible to the widest possible audience, regardless of technology or ability.</p>
              <p>We believe all users should be able to access information and functionality easily, including those with visual, auditory, motor, or cognitive disabilities.</p>
            </section>

            {/* Section 2: Conformance Status */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">2. Conformance Status and Standards</h2>
              <p>We aim to adhere to the principles and guidelines of the **Web Content Accessibility Guidelines (WCAG) 2.1** at the **Level AA** conformance level, published by the World Wide Web Consortium (W3C).</p>
              <p>
                <strong>Current Status:</strong> {platformName} is currently assessed as being {conformanceStatus}
                {/* IMPORTANT: This statement MUST be verified by an actual accessibility assessment. */}
              </p>
            </section>

            {/* Section 3: Accessibility Features Implemented */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">3. Accessibility Features</h2>
              <p>We have implemented several features to enhance the accessibility of {platformName}. These include, but are not limited to:</p>
              <ul className="lh-lg">
                {implementedFeatures.map((feature, index) => (
                   <li key={index}><i className="bi bi-check-circle text-success me-2"></i>{feature}</li>
                ))}
              </ul>
               {/* IMPORTANT: Verify that these features are actually implemented correctly. */}
            </section>

            {/* Section 4: Known Limitations and Potential Barriers */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">4. Known Limitations and Potential Barriers</h2>
              <p>Despite our best efforts to ensure accessibility, there may be some limitations. Below are known issues we are aware of or areas where accessibility might be challenging. We are actively working to address these barriers:</p>
              <ul className="lh-lg">
                 {knownLimitations.map((limitation, index) => (
                   <li key={index}><i className="bi bi-exclamation-triangle text-warning me-2"></i>{limitation}</li>
                 ))}
              </ul>
              <p>If you encounter an accessibility barrier not listed here, please let us know using the contact information below.</p>
              {/* IMPORTANT: Be honest and specific about known limitations based on audits/testing. */}
            </section>

            {/* Section 5: Technical Specifications */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">5. Technical Specifications</h2>
              <p>Accessibility of {platformName} relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
              <ul className="lh-lg">
                <li>HTML</li>
                <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
                <li>CSS (Cascading Style Sheets)</li>
                <li>JavaScript</li>
              </ul>
              <p>Conformance is dependent on these technologies being supported by your browser and assistive technology.</p>
            </section>

            {/* Section 6: Compatibility */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">6. Compatibility with Browsers and Assistive Technology</h2>
              <p>{platformName} is designed to be compatible with recent versions of major web browsers including Chrome, Firefox, Safari, and Edge.</p>
              <p>We also strive for compatibility with common assistive technologies, such as screen readers (NVDA, JAWS, VoiceOver) and screen magnification software. However, optimal performance may vary depending on the specific browser and assistive technology combination used.</p>
            </section>

            {/* Section 7: Assessment Approach */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">7. Assessment Approach</h2>
              <p>{companyName} assesses the accessibility of {platformName} through the following approaches:</p>
              <ul className="lh-lg">
                 <li>{assessmentApproach}</li>
                 {/* Add other methods like "External audit conducted by [Audit Company Name] on [Date]" if applicable */}
              </ul>
               {/* IMPORTANT: Accurately describe how accessibility is actually assessed. */}
            </section>

            {/* Section 8: Feedback and Contact Information */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">8. Feedback and Contact Information</h2>
              <p>We welcome your feedback on the accessibility of {platformName}. If you encounter accessibility barriers or have suggestions for improvement, please contact us:</p>
              <ul className="list-unstyled lh-lg">
                <li><i className="bi bi-envelope-fill me-2"></i><strong>Email:</strong> <a href={`mailto:${accessibilityContactEmail}`}>{accessibilityContactEmail}</a></li>
                {/* Optional Phone */}
                {/* <li><i className="bi bi-telephone-fill me-2"></i><strong>Phone:</strong> [Your Phone Number]</li> */}
                <li><i className="bi bi-link-45deg me-2"></i><strong>Contact Form:</strong> Please use our <Link to={contactPageUrl}>Contact Form</Link> and mention "Accessibility" in your message.</li>
              </ul>
              <p>We try to respond to feedback within [e.g., 5] business days.</p>
            </section>

             {/* Section 9: Date */}
             <section className="mb-5">
                <p className="text-muted fst-italic">This statement was last reviewed on {lastUpdatedDate}.</p>
             </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccessibilityStatementPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

