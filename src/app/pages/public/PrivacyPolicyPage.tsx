// src/app/pages/public/PrivacyPolicyPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PrivacyPolicyPage Component
 * Displays the Privacy Policy for 8jobspot.com.
 *
 * IMPORTANT: The content herein is a template and NOT legal advice.
 * Consult with a qualified legal professional familiar with Ugandan law
 * (Data Protection and Privacy Act, 2019) before publishing.
 */
const PrivacyPolicyPage: React.FC = () => {
  // Effective Date set
  const effectiveDate = 'April 3, 2025';
  // Default values - Confirm these with your legal counsel
  const companyName = '8jobspot.com (operated by 8Technologies.net)';
  const platformName = '8jobspot.com';
  const contactEmailForPrivacy = 'privacy@8jobspot.com'; // Use a real email address for privacy inquiries
  // const dataProtectionOfficer = '[Title and Contact Details of DPO, if applicable]'; // Required under DPPA depending on processing activities

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
                Privacy Policy
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Privacy Policy</h1>
            <p className="lead text-muted">
              Effective Date: {effectiveDate}
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width for readability */}

            {/* Legal Disclaimer - KEEP THIS VISIBLE */}
            <div className="alert alert-warning mb-5" role="alert">
              <h4 className="alert-heading">Important Notice</h4>
              <p>This Privacy Policy explains how {companyName} collects, uses, shares, and protects your personal information when you use the {platformName} platform. Please read this policy carefully. The content provided here is for informational purposes only and does not constitute legal advice. You should consult with a qualified legal professional to ensure this policy accurately reflects your data practices and complies with Uganda's Data Protection and Privacy Act, 2019 (DPPA) and other applicable laws.</p>
            </div>

            {/* Section 1: Introduction */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">1. Introduction</h2>
              <p>{companyName} ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes our practices regarding the collection, use, disclosure, and protection of personal data when you use our website, mobile applications, and services (collectively, the "Platform").</p>
              <p>This policy is designed to comply with Uganda's Data Protection and Privacy Act, 2019 (DPPA).</p>
              <p>By using the Platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not use the Platform.</p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">2. Information We Collect</h2>
              <p>We collect various types of information in connection with the services we provide, including:</p>
              <h3 className="h5 fw-semibold mt-4 mb-2">A. Personal Data Provided Directly by You:</h3>
              <ul className="lh-lg">
                <li><strong>Account Registration:</strong> Name, email address, phone number, password.</li>
                <li><strong>Profile Information:</strong> Information you add to your profile, such as date of birth, gender, nationality, address (home/current), professional title, career summary, objective, skills, languages spoken, profile picture, NIDA number (if provided), TIN (if provided), NSSF number (if provided).</li>
                <li><strong>Educational and Professional Background:</strong> Details about your education (schools, degrees, graduation years), work experience (company names, titles, responsibilities, dates), certifications, special qualifications.</li>
                <li><strong>Job Preferences:</strong> Expected salary, preferred job level, nature, location (districts, abroad), preferred categories.</li>
                <li><strong>Contact & Family Information (Optional):</strong> Spouse details, parent details, emergency contact information.</li>
                <li><strong>Disability Information (Optional & Sensitive):</strong> Information regarding disabilities, if you choose to provide it for inclusion purposes (requires explicit consent).</li>
                <li><strong>Video CVs:</strong> Video recordings you upload as part of your profile or application (contains your image, voice, and statements).</li>
                <li><strong>Employer Information:</strong> Company details (name, address, contact, size, industry, license numbers, website, logo), contact person details.</li>
                <li><strong>Communications:</strong> Information provided when you contact support, provide feedback, or communicate through the Platform.</li>
                <li><strong>Payment Information:</strong> If you use paid services, we collect necessary billing information (processed securely by our payment partners).</li>
              </ul>
              <h3 className="h5 fw-semibold mt-4 mb-2">B. Data Collected Automatically (Usage Data):</h3>
              <ul className="lh-lg">
                <li><strong>Log Data:</strong> IP address, browser type, operating system, referring/exit pages, date/time stamps, clickstream data.</li>
                <li><strong>Device Information:</strong> Device type, unique device identifiers, device settings.</li>
                <li><strong>Usage Information:</strong> Features you use, pages you visit, searches you conduct, jobs you view or apply for.</li>
              </ul>
               <h3 className="h5 fw-semibold mt-4 mb-2">C. Cookies and Tracking Technologies:</h3>
              <p>We use cookies and similar technologies (like web beacons, pixels) to collect usage data, enhance user experience, and analyze trends. See Section 9 for more details.</p>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="lh-lg">
                <li><strong>To Provide and Manage the Platform:</strong> Operate the site, create/manage accounts, facilitate job searching and applications, connect Job Seekers and Employers.</li>
                <li><strong>To Personalize Your Experience:</strong> Show relevant job recommendations, tailor content.</li>
                <li><strong>To Communicate With You:</strong> Send service-related notifications (application updates, alerts), respond to inquiries, provide support, send marketing communications (with your consent where required, and always with an opt-out option).</li>
                <li><strong>To Process Payments:</strong> For any paid services you subscribe to.</li>
                <li><strong>For Security and Fraud Prevention:</strong> Protect the Platform and our users, detect and prevent fraudulent activity.</li>
                <li><strong>For Analytics and Improvement:</strong> Understand how users interact with the Platform to improve our services, features, and user experience.</li>
                <li><strong>To Comply with Legal Obligations:</strong> Fulfill legal requirements, respond to lawful requests from authorities.</li>
                <li><strong>To Enforce Our Terms:</strong> Protect our rights and enforce our Terms and Conditions.</li>
              </ul>
            </section>

            {/* Section 4: Legal Basis for Processing (DPPA) */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">4. Legal Basis for Processing (under DPPA)</h2>
              <p>We process your personal data based on the following legal grounds as defined under Uganda's Data Protection and Privacy Act, 2019:</p>
              <ul className="lh-lg">
                <li><strong>Consent:</strong> Where you have given explicit consent for processing your data for specific purposes (e.g., optional profile information, marketing emails, processing sensitive data like disability information or Video CVs). You can withdraw consent at any time.</li>
                <li><strong>Contractual Necessity:</strong> Processing necessary for the performance of a contract with you (e.g., providing the core job matching and application services outlined in our Terms).</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests (e.g., security, analytics, service improvement), provided these interests are not overridden by your fundamental rights and freedoms.</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with a legal obligation applicable to us.</li>
              </ul>
            </section>

            {/* Section 5: How We Share Your Information */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">5. How We Share Your Information</h2>
              <p>We do not sell your personal data. We may share your information in the following circumstances:</p>
              <ul className="lh-lg">
                <li><strong>With Employers:</strong> When you apply for a job or gig through the Platform, we share your profile information, resume, and application details (including Video CV if submitted) with the respective Employer. Employers are independent data controllers and their handling of your data is subject to their own privacy policies.</li>
                <li><strong>With Service Providers:</strong> We engage third-party companies and individuals to perform services on our behalf (e.g., hosting, data storage, payment processing, analytics, customer support). These providers have access to your information only to perform these tasks and are obligated not to disclose or use it for other purposes.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, subpoena, or other legal process, or if we have a good faith belief that disclosure is reasonably necessary to (i) investigate, prevent, or take action regarding suspected or actual illegal activities or to assist government enforcement agencies; (ii) enforce our agreements with you; (iii) investigate and defend ourselves against any third-party claims or allegations; (iv) protect the security or integrity of our Service; or (v) exercise or protect the rights and safety of {platformName}, our users, personnel, or others.</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company, your information may be transferred.</li>
                <li><strong>With Your Consent:</strong> We may share your information for other purposes if you have given us your explicit consent to do so.</li>
              </ul>
            </section>

            {/* Section 6: Data Security */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">6. Data Security</h2>
              <p>We implement reasonable technical and organizational measures designed to protect your personal data from unauthorized access, use, alteration, or destruction. These measures may include encryption, access controls, secure servers, and staff training.</p>
              <p>However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
            </section>

            {/* Section 7: Data Retention */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">7. Data Retention</h2>
              <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy, including for the duration of your active Account and as needed to provide you services. We will also retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
              <p>Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>
            </section>

            {/* Section 8: Your Data Protection Rights (under DPPA) */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">8. Your Data Protection Rights</h2>
              <p>Under Uganda's Data Protection and Privacy Act, 2019, you have certain rights regarding your personal data. Subject to legal limitations, these rights include:</p>
              <ul className="lh-lg">
                <li><strong>Right to Access:</strong> You have the right to request access to the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete personal data.</li>
                <li><strong>Right to Erasure:</strong> You have the right to request the deletion of your personal data under certain conditions.</li>
                <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data, particularly for direct marketing purposes.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request the restriction of processing your personal data under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format, where technically feasible.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you have the right to withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</li>
              </ul>
              <p><strong>Exercising Your Rights:</strong> To exercise these rights, please contact us using the contact details provided in Section 13. You may also be able to access and update some of your information directly through your Account settings. We may need to verify your identity before responding to your request.</p>
              <p>You also have the right to lodge a complaint with the Personal Data Protection Office (PDPO) of Uganda if you believe your rights have been violated.</p>
            </section>

            {/* Section 9: Cookies and Tracking Technologies */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">9. Cookies and Tracking Technologies</h2>
              <p>We use cookies (small text files placed on your device) and similar tracking technologies to track activity on our Platform and hold certain information. Cookies help us analyze traffic, remember user preferences, and improve your experience.</p>
              <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. We use Session Cookies (temporary) and Persistent Cookies (remain for a set period).</p>
              {/* Optional: Link to a more detailed Cookie Policy or management tool */}
              {/* <p>For more detailed information on the cookies we use and your choices regarding cookies, please see our <Link to="/cookie-policy">Cookie Policy</Link>.</p> */}
            </section>

            {/* Section 10: Children's Privacy */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">10. Children's Privacy</h2>
              <p>Our Platform is not intended for use by individuals under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from Children. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
            </section>

            {/* Section 11: International Data Transfers */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">11. International Data Transfers</h2>
              <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of Uganda where the data protection laws may differ. We primarily store and process data within Uganda. If we transfer your Personal Data outside Uganda (e.g., through use of international service providers), we will take appropriate safeguards to ensure your data receives an adequate level of protection as required by the DPPA.</p>
            </section>

            {/* Section 12: Changes to This Privacy Policy */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">12. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. We may also notify registered users via email.</p>
              <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>

            {/* Section 13: Contact Us */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">13. Contact Us / Data Protection Contact</h2>
              <p>If you have any questions about this Privacy Policy, wish to exercise your data protection rights, or have concerns about our privacy practices, please contact us:</p>
              <ul className="list-unstyled lh-lg">
                <li><strong>By Email:</strong> <a href={`mailto:${contactEmailForPrivacy}`}>{contactEmailForPrivacy}</a></li>
                {/* Add DPO contact if designated */}
                {/* <li><strong>Data Protection Officer:</strong> {dataProtectionOfficer}</li> */}
                {/* Optionally add physical address */}
                {/* <li><strong>By Mail:</strong> [Your Company Address]</li> */}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

