// src/app/pages/public/TermsAndConditionsPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TermsAndConditionsPage Component
 * Displays the Terms and Conditions for using 8jobspot.com.
 * V2: Finalized placeholders and set effective date.
 *
 * IMPORTANT: The content herein is a template and NOT legal advice.
 * Consult with a qualified legal professional before publishing.
 */
const TermsAndConditionsPage: React.FC = () => {
  // Effective Date set
  const effectiveDate = 'April 3, 2025';
  // Default values - Confirm these with your legal counsel
  const companyName = '8jobspot.com (operated by 8Technologies.net)';
  const legalJurisdiction = 'Kampala, Uganda';
  const contactEmailForTerms = 'legal@8jobspot.com'; // Use a real email address

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
                Terms and Conditions
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Terms and Conditions</h1>
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
              <p>Please read these Terms and Conditions carefully. They contain important information about your legal rights and obligations. The content provided here is for informational purposes only and does not constitute legal advice. You should consult with a qualified legal professional to ensure these terms meet your specific needs and comply with applicable laws.</p>
            </div>

            {/* Section 1: Introduction / Agreement */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">1. Introduction and Agreement to Terms</h2>
              <p>Welcome to {companyName}! These Terms and Conditions ("Terms") govern your access to and use of the 8jobspot.com website, mobile applications, and related services (collectively, the "Platform" or "Service"), operated by 8Technologies.net.</p>
              <p>By accessing, browsing, or using the Platform in any manner, you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy-policy">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Platform.</p>
              <p>These Terms constitute a legally binding agreement between you and {companyName}.</p>
            </section>

            {/* Section 2: Definitions */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">2. Definitions</h2>
              <ul className="list-unstyled lh-lg">
                <li><strong>Platform/Service:</strong> Refers to the 8jobspot.com website, mobile applications, features, and services.</li>
                <li><strong>User:</strong> Refers to any individual or entity accessing or using the Platform, including Job Seekers and Employers.</li>
                <li><strong>Job Seeker:</strong> A User seeking employment, gigs, or career-related information.</li>
                <li><strong>Employer:</strong> A User (individual or entity) seeking to hire employees or gig workers, or posting job opportunities.</li>
                <li><strong>Account:</strong> A User's registered profile on the Platform.</li>
                <li><strong>Content:</strong> Refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, tags, or other materials submitted, posted, displayed, or otherwise made available on the Platform by Users (User-Generated Content) or by {companyName}.</li>
              </ul>
            </section>

            {/* Section 3: User Accounts & Registration */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">3. User Accounts and Registration</h2>
              <p><strong>Eligibility:</strong> You must be at least 18 years of age and capable of forming a binding contract under Ugandan law to create an Account and use the Platform.</p>
              <p><strong>Account Creation:</strong> Certain features require registration. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
              <p><strong>Account Security:</strong> You are responsible for safeguarding your password and any activities or actions under your Account. You agree to notify {companyName} immediately of any unauthorized use of your Account.</p>
              <p><strong>Account Types:</strong> We may offer different account types (e.g., Job Seeker, Employer) with varying features and permissions.</p>
              <p><strong>Termination/Suspension:</strong> You may terminate your Account at any time through your account settings or by contacting us. {companyName} reserves the right to suspend or terminate your Account and access to the Platform at its sole discretion, without notice, for conduct that violates these Terms, is harmful to other users or {companyName}, or for any other reason deemed necessary, including inactivity or legal requirements.</p>
            </section>

            {/* Section 4: Use of the Service */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">4. Use of the Service</h2>
              <p><strong>License:</strong> {companyName} grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform strictly for its intended purposes as outlined in these Terms.</p>
              <p><strong>Permitted Activities:</strong> Include searching for jobs or candidates, creating profiles, posting job opportunities or gigs, applying for positions, and utilizing communication tools provided, all in accordance with your account type and these Terms.</p>
              <p><strong>Prohibited Activities:</strong> You agree not to engage in any of the following prohibited activities:</p>
              <ul className="lh-lg">
                <li>Posting or transmitting any Content that is unlawful, fraudulent, discriminatory, harassing, defamatory, obscene, or otherwise objectionable.</li>
                <li>Engaging in spamming, phishing, or distributing viruses or other harmful computer code.</li>
                <li>Attempting to gain unauthorized access to the Platform, user accounts, or computer systems.</li>
                <li>Using any robot, spider, scraper, or other automated means to access the Platform for any purpose without our express written permission.</li>
                <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
                <li>Violating the intellectual property rights of others or {companyName}.</li>
                <li>Interfering with or disrupting the integrity or performance of the Platform.</li>
                {/* Add any other specific prohibitions relevant to Uganda after legal review */}
              </ul>
            </section>

            {/* Section 5: User-Generated Content */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">5. User-Generated Content</h2>
              <p><strong>Responsibility:</strong> You are solely responsible for all Content that you upload, post, email, transmit, or otherwise make available via the Platform. You represent and warrant that you own or have the necessary rights and permissions to use and authorize {companyName} to use your Content as described herein, and that your Content does not violate any laws or third-party rights.</p>
              <p><strong>License Grant:</strong> By submitting Content, you grant {companyName} a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, host, store, reproduce, modify (for technical purposes like formatting), communicate, publish, publicly perform, publicly display, and distribute such Content solely for the purposes of operating, providing, promoting, and improving the Platform.</p>
              <p><strong>Content Moderation:</strong> {companyName} reserves the right, but has no obligation, to monitor, screen, edit, or remove Content that, in its sole discretion, violates these Terms or is otherwise objectionable. We are not responsible for any failure or delay in removing such Content.</p>
              <p><strong>No Endorsement:</strong> {companyName} does not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any User-Generated Content.</p>
            </section>

            {/* Section 6: Fees and Payment (Optional - Add back if needed after legal review) */}
            {/* This section is removed for now as it requires specific business decisions and legal input. */}

            {/* Section 7: Intellectual Property Rights */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">7. Intellectual Property Rights</h2>
              <p>The Platform and its original content (excluding User-Generated Content), features, and functionality are and will remain the exclusive property of {companyName} (8Technologies.net) and its licensors. The Platform is protected by copyright, trademark, and other laws of Uganda and foreign countries.</p>
              <p>Our trademarks and trade dress, including the "8jobspot.com" name and logo, may not be used in connection with any product or service without the prior written consent of {companyName}.</p>
            </section>

            {/* Section 8: Disclaimers */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">8. Disclaimers</h2>
              <p>THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. {companyName} EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
              <p>{companyName} MAKES NO WARRANTY THAT: (I) THE PLATFORM WILL MEET YOUR REQUIREMENTS; (II) THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (III) THE RESULTS OBTAINED FROM THE USE OF THE PLATFORM (INCLUDING JOB PLACEMENT OR CANDIDATE HIRES) WILL BE ACCURATE, RELIABLE, OR GUARANTEED; OR (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED BY YOU THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS.</p>
              <p>WE ARE NOT RESPONSIBLE FOR THE CONTENT OR CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER OF THE PLATFORM. WE ARE NOT RESPONSIBLE FOR ANY LINKS TO THIRD-PARTY WEBSITES.</p>
            </section>

            {/* Section 9: Limitation of Liability */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">9. Limitation of Liability</h2>
              <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {companyName}, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE PLATFORM; (III) ANY CONTENT OBTAINED FROM THE PLATFORM; OR (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</p>
              <p>IN NO EVENT SHALL THE AGGREGATE LIABILITY OF {companyName} EXCEED THE GREATER OF ONE HUNDRED US DOLLARS (USD $100) OR THE AMOUNT YOU PAID {companyName}, IF ANY, IN THE PAST SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM. (Note: This cap requires legal review based on your business model and Ugandan law).</p>
              <p>THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT {companyName} HAS BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE.</p>
            </section>

            {/* Section 10: Indemnification */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">10. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless {companyName} and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.</p>
            </section>

            {/* Section 11: Governing Law and Dispute Resolution */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">11. Governing Law and Dispute Resolution</h2>
              <p><strong>Governing Law:</strong> These Terms shall be governed and construed in accordance with the laws of the Republic of Uganda, without regard to its conflict of law provisions.</p>
              <p><strong>Dispute Resolution:</strong> You agree to first attempt to resolve any dispute arising out of or relating to these Terms or the Platform informally by contacting {companyName}. If the dispute is not resolved within thirty (30) days, either party may pursue formal action. Any legal suit, action, or proceeding arising out of or related to these Terms or the Platform shall be instituted exclusively in the competent courts located in {legalJurisdiction}. (Note: Confirm the specific dispute resolution process like mediation/arbitration with legal counsel).</p>
            </section>

            {/* Section 12: Modifications to Terms */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">12. Modifications to Terms</h2>
              <p>{companyName} reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least thirty (30) days' notice prior to any new terms taking effect, which may be provided via posting on the Platform or by email to registered users.</p>
              <p>By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Platform. We encourage you to review these Terms periodically.</p>
            </section>

            {/* Section 13: General Provisions */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">13. General Provisions</h2>
              <p><strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
              <p><strong>Waiver:</strong> No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and {companyName}'s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</p>
              <p><strong>Assignment:</strong> These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by {companyName} without restriction.</p>
              <p><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and {companyName} regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>
            </section>

            {/* Section 14: Contact Information */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">14. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmailForTerms}`}>{contactEmailForTerms}</a>.</p>
              {/* Optionally add physical address after legal confirmation */}
              {/* <p>Address: [Your Company Address, e.g., 8Technologies Address]</p> */}
            </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TermsAndConditionsPage;
