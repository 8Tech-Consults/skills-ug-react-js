// src/app/pages/employer/EmployerFAQPage.tsx (Example file path)

import React from "react";
import { Link } from "react-router-dom";

/**
 * EmployerFAQPage Component
 * Displays Frequently Asked Questions for employers using Bootstrap Accordion.
 */
const EmployerFAQPage: React.FC = () => {
  // FAQ Data - Grouped by category
  const faqData = [
    {
      category: "Getting Started & Account Management",
      questions: [
        {
          q: "How do I register as an employer on 8jobspot.com?",
          a: `Click the "Sign Up" or "Register" button, choose the "Employer" option. You'll need to provide company details (name, location, contact person) and create login credentials. Follow the steps to complete your company profile. [Link to /employer/register]`,
        },
        {
          q: "What information is needed to create a company profile?",
          a: `You'll typically need your company name, address, industry, size (number of employees), contact information, company logo, and a brief description. Completing your profile fully helps attract candidates. You can also add details about your commitment to disability inclusion. [Link to /employer/profile (if exists)]`,
        },
        {
          q: "Are there different types of employer accounts or packages?",
          a: `We may offer different packages or subscription tiers with varying features, such as the number of job posts allowed, access to the CV bank, or enhanced branding options. Please visit our [Link to /employer/products]Products & Services[/Link] page for details.`,
        },
        {
          q: "Is there a cost to register or post jobs?",
          a: `Basic registration and a limited number of job postings may be free. For expanded features like bulk posting, extended visibility, or CV database access, paid packages are usually required. Check our [Link to /employer/products]Products & Services[/Link] page for current pricing.`,
        },
        {
          q: "How do I manage or update my company profile information?",
          a: `Log in to your employer dashboard. Navigate to the "Company Profile" or "Account Settings" section to update your details, logo, description, and other information.`, // Consider adding <Link to="/employer/profile">Company Profile</Link>
        },
        {
          q: "How can I add multiple users or recruiters to my company account?",
          a: `(Answer depends on functionality) Check your Account Settings or User Management section within the employer dashboard. If this feature is available, you should find options to invite or add team members with specific permissions. Contact support if you need assistance.`, // Consider adding <Link to="/contact">support</Link>
        },
        {
          q: "How do I reset my password or manage account settings?",
          a: `Use the "Forgot Password?" link on the login page to reset your password. Other account settings can usually be managed within your employer dashboard after logging in.`, // Consider adding <Link to="/auth/forgot-password">Forgot Password?</Link>
        },
      ],
    },
    {
      category: "Posting Jobs & Gigs",
      questions: [
        {
          q: "How do I post a new job or gig listing?",
          a: `Log in to your employer dashboard and look for a button like "Post a Job," "Create New Listing," or similar. Fill out the required fields, including job title, description, responsibilities, qualifications, location, job type (full-time, part-time, gig, etc.), and application instructions. [Link to /employer/post-job]`,
        },
        {
          q: "What information should I include in a job description for best results?",
          a: `Include a clear job title, detailed responsibilities, required skills and qualifications, location, compensation range (optional but recommended), company overview, and clear application instructions. Use inclusive language.`,
        },
        {
          q: "Can I post both formal jobs and short-term gigs?",
          a: `Yes, 8jobspot.com is designed to accommodate both traditional employment opportunities (full-time, part-time, contract) and short-term gigs or freelance projects. Ensure you select the correct job type when posting.`,
        },
        {
          q: "How long does a job posting stay active? Can I renew it?",
          a: `Job postings typically remain active for a set period (e.g., 30 or 60 days), which may depend on your chosen package. You can usually manage (renew, close, edit) your active postings from your employer dashboard. [Link to /employer/manage-jobs (if exists)]`,
        },
        {
          q: "How do I edit or close a job posting?",
          a: `Navigate to your "Manage Jobs" or "Active Postings" section in your dashboard. You should find options to edit the details of a posting or close it once the position is filled or no longer available.`,
        },
        {
          q: "Are there options for featured job postings for better visibility?",
          a: `Yes, we often offer options to feature or boost your job postings for increased visibility in search results and on the homepage. Check our [Link to /employer/products]Products & Services[/Link] page for details on these options.`,
        },
      ],
    },
    {
      category: "Finding & Managing Candidates",
      questions: [
        {
          q: "How do I view applications for my job postings?",
          a: `Log in to your employer dashboard and go to the specific job posting under "Manage Jobs" or a dedicated "Applications" section. You'll be able to view the list of candidates who have applied.`,
        },
        {
          q: "How can I manage applicants (e.g., shortlist, reject, schedule interviews)?",
          a: `Our platform typically provides tools within the applicant viewing section to change application statuses (e.g., New, Viewed, Shortlisted, Interviewing, Hired, Rejected), add notes, and potentially contact candidates directly or schedule interviews (features may vary by plan).`,
        },
        {
          q: "Can I search for candidates directly in the CV bank? Is there a cost?",
          a: `Access to search and view candidate profiles/CVs in our database (CV Bank) is usually a premium feature included in specific employer packages. Please see our [Link to /employer/products]Products & Services[/Link] page for details on packages that include CV Bank access. [Link to /candidates or /employer/search (if exists)]`,
        },
        {
          q: "How do I use search filters effectively to find relevant candidates in the CV Bank?",
          a: `Utilize filters such as keywords (skills, job titles), location, experience level, education, and specific qualifications to narrow down the candidate pool and find the most relevant profiles efficiently.`,
        },
        {
          q: "What information about job seekers can I see?",
          a: `When viewing applications or searching the CV Bank (with appropriate access), you can typically see the job seeker's profile information, uploaded CV/resume, skills, experience, education, and potentially their Video CV, subject to the job seeker's privacy settings. Contact details are usually visible upon application or with CV Bank access.`,
        },
      ],
    },
    {
      category: "Billing & Payments (If Applicable)",
      questions: [
        {
          q: "What are the different employer packages or services available?",
          a: `We offer various packages tailored to different hiring needs, from single job postings to unlimited access and CV database searching. Please visit our detailed [Link to /employer/products]Products & Services[/Link] page for a comparison.`,
        },
        {
          q: "How does billing work? What payment methods are accepted?",
          a: `Billing details (frequency, cycle) depend on the chosen package. We typically accept payments via [List methods, e.g., Mobile Money, Credit/Debit Card, Bank Transfer]. Check the payment section during checkout or your account's billing area.`, // ** Placeholder: Update payment methods **
        },
        {
          q: "Where can I find my invoices or payment history?",
          a: `Log in to your employer dashboard and navigate to the "Billing" or "Account Settings" section. You should find your transaction history and invoices there.`,
        },
        {
          q: "How do I upgrade, downgrade, or cancel my plan?",
          a: `Subscription management options are usually available in the "Billing" or "Subscription" section of your employer dashboard. Follow the instructions there or contact support for assistance.`,
        },
      ],
    },
    {
      category: "Disability Inclusion",
      questions: [
        {
          q: "How can I indicate my company is open to hiring Persons with Disabilities (PWDs)?",
          a: `You can highlight your commitment in your Company Profile description and job postings. Look for specific fields in the Company Profile setup related to accessibility or disability inclusion policies. Stating this explicitly can attract a wider range of candidates.`,
        },
        {
          q: "Where can I learn more about disability inclusion practices in Uganda?",
          a: `We have compiled a guide with information and resources. Please see our [Link to /employer/disability-inclusion]Disability Inclusion Guide[/Link].`,
        },
      ],
    },
    {
      category: "Technical Issues & Support",
      questions: [
        {
          q: "I'm having trouble posting a job / accessing applications. What should I do?",
          a: `Please ensure you are logged in correctly and try clearing your browser cache or using a different browser. Check if your job post meets all requirements. If the problem persists, contact our employer support team.`,
        },
        {
          q: "Who do I contact for employer support?",
          a: `Please visit our [Link to /contact]Contact Us[/Link] page for dedicated employer support options, including email and phone details.`,
        },
      ],
    },
  ];

  // Helper to generate unique IDs for accordion elements
  const generateId = (text: string, catIndex: number, qIndex: number) => {
    return `${text.replace(/\s+/g, "-")}-${catIndex}-${qIndex}`;
  };

  // Function to parse answer text and replace placeholders with Link components
  const renderAnswer = (answer: string) => {
    // Simple regex to find placeholders like [Link to /path]Text[/Link] or [Link to /path]
    const linkRegex = /\[Link to (\/[^\]]+)\](?:([^\[]+)\[\/Link\])?/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(answer)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(answer.substring(lastIndex, match.index));
      }
      // Add the Link component
      const path = match[1];
      const text = match[2] || path; // Use path as text if no specific text is provided
      parts.push(
        <Link key={match.index} to={path}>
          {" "}
          {text}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    // Add any remaining text after the last link
    if (lastIndex < answer.length) {
      parts.push(answer.substring(lastIndex));
    }

    // Handle simple bracketed text that isn't a link pattern (like payment methods)
    return parts.map((part, i) =>
      typeof part === "string" && part.startsWith("[") && part.endsWith("]") ? (
        <em key={i} className="text-muted">
          {" "}
          {part.substring(1, part.length - 1)}
        </em> // Display bracketed text differently
      ) : (
        <span key={i}>{part}</span>
      )
    );
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
              <li className="breadcrumb-item">
                {/* Link to employer dashboard or section */}
                <Link to="/employer/dashboard">For Employers</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Employer FAQ
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">
              Frequently Asked Questions (Employers)
            </h1>
            <p className="lead text-muted">
              Find answers to common questions about using 8jobspot.com.
            </p>
            {/* Optional Search Bar Placeholder */}
            {/*
             <div className="row justify-content-center mt-4">
                <div className="col-lg-6">
                    <input type="search" className="form-control form-control-lg" placeholder="Search Employer FAQs..." />
                </div>
             </div>
             */}
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            {" "}
            {/* Adjusted width */}
            {faqData.map((categoryData, catIndex) => (
              <div key={catIndex} className="mb-5">
                {/* Category Heading */}
                <h2 className="fw-bolder mb-4 text-primary">
                  {categoryData.category}
                </h2>

                {/* Accordion for the category */}
                <div className="accordion" id="employerFAQAccordion">
                  {" "}
                  {/* Use one ID for the parent */}
                  {categoryData.questions.map((faq, qIndex) => {
                    const headingId = generateId(
                      `headingEmp`,
                      catIndex,
                      qIndex
                    );
                    const collapseId = generateId(
                      `collapseEmp`,
                      catIndex,
                      qIndex
                    );

                    return (
                      <div className="accordion-item" key={qIndex}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded="false"
                            aria-controls={collapseId}
                          >
                            {faq.q}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className="accordion-collapse collapse"
                          aria-labelledby={headingId}
                          data-bs-parent="#employerFAQAccordion" // Point to the main accordion ID
                        >
                          <div className="accordion-body">
                            {/* Render answer using the helper function */}
                            {renderAnswer(faq.a)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            {/* --- Still need help? --- */}
            <div className="text-center mt-5 p-4 bg-light rounded border">
              <h3 className="fw-semibold mb-3">Can't find an answer?</h3>
              <p className="text-muted mb-3">
                If you have other questions or need further assistance regarding
                employer services, please contact our dedicated support team.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Employer Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmployerFAQPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/JS globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// You might need Bootstrap JS for the accordion:
// import 'bootstrap/dist/js/bootstrap.bundle.min';
