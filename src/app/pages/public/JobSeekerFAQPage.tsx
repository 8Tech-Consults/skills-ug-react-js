// src/app/pages/public/JobSeekerFAQPage.tsx (Example file path)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * JobSeekerFAQPage Component
 * Displays Frequently Asked Questions for job seekers using Bootstrap Accordion.
 */
const JobSeekerFAQPage: React.FC = () => {

  // FAQ Data - Grouped by category
  const faqData = [
    {
      category: "Getting Started & Account Management",
      questions: [
        {
          q: "How do I register as a job seeker on 8jobspot.com?",
          a: `Click the "Sign Up" or "Register" button, choose the "Job Seeker" option, and fill in the required details like your name, email, and password. Follow the on-screen instructions to complete your registration. You might need to verify your email address.`
        },
        {
          q: "Is it free to register and use 8jobspot.com as a job seeker?",
          a: `Yes, creating a job seeker account, building your profile/CV, searching for jobs, and applying for most positions on 8jobspot.com is completely free. We may offer optional premium services ("8jobspot.com Pro") with additional features.`
        },
        {
          q: "I forgot my password. How can I reset it?",
          a: `Go to the Login page and click the "Forgot Password?" link. Enter your registered email address, and we'll send you instructions on how to reset your password.` // Consider adding <Link to="/auth/forgot-password">Forgot Password?</Link>
        },
        {
          q: "How do I update my account information (email, phone number)?",
          a: `Log in to your account and navigate to your Account Settings or Profile section. You should find options there to edit your contact details and other personal information. Remember to save your changes.` // Consider adding <Link to="/account/settings">Account Settings</Link>
        },
        {
          q: "How can I delete my account?",
          a: `If you wish to permanently delete your account and data, please go to your Account Settings section. Look for an option like "Delete Account" or "Close Account". Please note that this action is irreversible. Alternatively, contact our support team for assistance.` // Consider adding <Link to="/contact">support team</Link>
        }
      ]
    },
    {
      category: "Profile & Resume/CV",
      questions: [
        {
          q: "Why is completing my profile important?",
          a: `A complete and detailed profile significantly increases your visibility to potential employers searching for candidates. It allows you to showcase your skills, experience, and qualifications effectively, making you a more attractive candidate.`
        },
        {
          q: "How do I create or upload my CV/Resume?",
          a: `After logging in, go to your dashboard or profile section. Look for options like "Edit Resume," "Upload CV," or "Build Profile." You can typically either upload an existing CV file or use our tools to build one section by section.` // Consider adding <Link to="/edit-resume">Edit Resume</Link>
        },
        {
          q: "What format should my CV/Resume be in?",
          a: `We generally recommend uploading your CV in PDF format to preserve formatting. We may also support .doc or .docx formats. Check the upload section for specific allowed file types and size limits.`
        },
        {
          q: "How do I edit my profile or CV after creating it?",
          a: `Log in and navigate to your profile or dashboard. You should see options to edit each section of your profile or replace your uploaded CV file.`
        },
        {
          q: "What is a Video CV and how do I add one?",
          a: `A Video CV is a short video (usually 60-90 seconds) where you introduce yourself, highlight key skills, and express your career aspirations. It adds a personal touch to your application. You can usually upload a video file or add a link (e.g., YouTube, Vimeo) in the dedicated Video CV section of your profile. Find more details on our Video CV page.` // Replace with <Link to="/video-cv">Video CV page</Link>
        },
        {
          q: "Who can see my profile and CV? Can I make it private?",
          a: `By default, employers registered on 8jobspot.com may be able to search for and view profiles that match their criteria. When you apply for a job, the specific employer will receive your profile/CV. Check your Account Settings or Privacy Settings for options to control the visibility of your profile (options may vary).`
        }
      ]
    },
    {
        category: "Searching for Jobs & Gigs",
        questions: [
            {
                q: "How do I search for jobs or gigs?",
                a: `Use the main search bar on the homepage or navigate to the "Find Jobs" or "Browse Gigs" section. You can enter keywords (job title, skill), location (e.g., Kampala, Gulu, specific district), and use filters to narrow down results.` // Consider <Link to="/jobs">Find Jobs</Link>
            },
            {
                q: "How can I filter job search results (by location, type, category)?",
                a: `On the job search results page, look for filter options typically located on the side or top. You can usually filter by job type (full-time, part-time, contract, gig), industry/category, location, salary range (if available), and more.`
            },
            {
                q: "What are job alerts and how do I set them up?",
                a: `Job alerts notify you via email when new jobs matching your saved search criteria are posted. After performing a search, look for an option like "Create Job Alert" or "Save Search & Get Alerts." You can manage your alerts in your account dashboard.`
            },
            {
                q: "What's the difference between a job and a gig on the platform?",
                a: `Generally, "Jobs" refer to more traditional employment (full-time, part-time, contract with a company), while "Gigs" often refer to short-term, project-based, or freelance work, often for individuals or small businesses needing specific tasks done.`
            }
        ]
    },
    {
        category: "Applying for Jobs",
        questions: [
            {
                q: "How do I apply for a job listed on 8jobspot.com?",
                a: `When viewing a job description you're interested in, click the "Apply Now" or similar button. You may be asked to confirm which version of your profile/CV to submit, answer specific questions from the employer, or write a cover letter. Follow the on-screen steps.`
            },
            {
                q: "What happens after I apply? How can I track my application status?",
                a: `After applying, the employer receives your application. They will review it and contact you directly if they wish to proceed. You can usually track the status of your submitted applications (e.g., Sent, Viewed, Shortlisted - depending on employer actions) in the "My Applications" section of your dashboard.` // Replace with <Link to="/account/applications">My Applications</Link>
            },
            {
                q: "Can I withdraw an application after submitting it?",
                a: `This depends on the platform's features. Check the "My Applications" section. If an option to "Withdraw Application" exists, you can use it. Otherwise, the application cannot be recalled through the platform.`
            },
            {
                q: "Do employers see my contact details when I apply?",
                a: `Yes, when you apply for a job, the employer typically receives access to the contact information (email, phone number) included in your profile or uploaded CV to facilitate communication regarding your application.`
            }
        ]
    },
    // Optional: Add 8jobspot.com Pro section if applicable
    /*
    {
        category: "8jobspot.com Pro",
        questions: [
            {
                q: "What is 8jobspot.com Pro? What are the benefits?",
                a: `8jobspot.com Pro is an optional premium subscription offering enhanced features for job seekers, such as [List 2-3 key benefits, e.g., increased profile visibility, detailed application analytics, priority support]. You can find more details on our Pro page.` // Replace with <Link to="/skillsug-pro">Pro page</Link>
            },
            {
                q: "How do I subscribe to or cancel 8jobspot.com Pro?",
                a: `You can usually subscribe or manage your subscription through your Account Settings or Billing section after logging in. Follow the instructions provided there for upgrading or cancelling.`
            }
        ]
    },
    */
    {
        category: "Safety & Security",
        questions: [
            {
                q: "How can I identify potentially fraudulent job postings?",
                a: `Be cautious of jobs that seem too good to be true (e.g., very high pay for little work), ask for payment or sensitive personal information (bank details, NIDA card copies) upfront, have vague descriptions, use generic email addresses (like Gmail/Yahoo) for official communication, or pressure you to make quick decisions.`
            },
            {
                q: "What should I do if I suspect a job posting is fake or fraudulent?",
                a: `Do not apply or provide any personal information. Report the job posting to us immediately using the "Report Job" feature (if available) or by contacting our support team via the Contact Us page. Provide as much detail as possible.` // Replace with <Link to="/contact">Contact Us page</Link>
            },
            {
                q: "Does 8jobspot.com verify all employers and job postings?",
                a: `We strive to maintain a safe platform and may perform basic checks on registered employers. However, we cannot guarantee the legitimacy of every single job posting. We strongly encourage job seekers to do their own research and exercise caution during their job search. Never pay money to secure a job interview or offer.`
            }
        ]
    },
    {
        category: "Technical Issues",
        questions: [
            {
                q: "I'm having trouble logging in / uploading my CV. What should I do?",
                a: `First, ensure you are using the correct email and password. Try resetting your password if needed. For upload issues, check if your file meets the format (e.g., PDF, DOCX) and size requirements. Try clearing your browser cache or using a different browser. If problems persist, please contact our support team via the Contact Us page.` // Replace with <Link to="/contact">Contact Us page</Link>
            },
            {
                q: "Which web browsers are recommended for using 8jobspot.com?",
                a: `We recommend using the latest versions of major web browsers like Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge for the best experience.`
            }
        ]
    }
  ];

  // Helper to generate unique IDs for accordion elements
  const generateId = (text: string, index: number) => {
    return text.replace(/\s+/g, '-') + '-' + index;
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
                Job Seeker FAQ
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Frequently Asked Questions (Job Seekers)</h1>
            <p className="lead text-muted">
              Find answers to common questions about using 8jobspot.com.
            </p>
             {/* Optional Search Bar Placeholder */}
             {/*
             <div className="row justify-content-center mt-4">
                <div className="col-lg-6">
                    <input type="search" className="form-control form-control-lg" placeholder="Search FAQs..." />
                </div>
             </div>
             */}
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width */}

            {faqData.map((categoryData, catIndex) => (
              <div key={catIndex} className="mb-5">
                 {/* Optional Category Heading */}
                 <h2 className="fw-bolder mb-4 text-primary">{categoryData.category}</h2>

                 {/* Accordion for the category */}
                 <div className="accordion" id={`faqAccordion-${catIndex}`}>
                   {categoryData.questions.map((faq, qIndex) => {
                     const headingId = generateId(`heading-${catIndex}`, qIndex);
                     const collapseId = generateId(`collapse-${catIndex}`, qIndex);

                     return (
                       <div className="accordion-item" key={qIndex}>
                         <h2 className="accordion-header" id={headingId}>
                           <button
                             className="accordion-button collapsed fw-semibold" // Added fw-semibold
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
                           data-bs-parent={`#faqAccordion-${catIndex}`}
                         >
                           <div className="accordion-body">
                             {/* Render answer - replace placeholders with <Link> components as needed */}
                             {faq.a.split(/(\[Link to.*?\])/g).map((part, i) => {
                               const match = part.match(/\[Link to (.*?)(?: page)?\]/);
                               if (match) {
                                 const path = match[1];
                                 // Basic text extraction for link display (improve if needed)
                                 const linkTextMatch = faq.a.substring(faq.a.indexOf(part) + part.length).match(/^(\s?[\w\s]+)/);
                                 const linkText = linkTextMatch ? linkTextMatch[1].trim() : path;
                                 return <Link key={i} to={path}> {linkText}</Link>;
                               }
                               // Basic handling for bracketed text not matching the pattern
                               if (part.startsWith('[') && part.endsWith(']')) {
                                   return <span key={i}>{part}</span>; // Keep bracketed text if not a link pattern
                               }
                               return <span key={i}>{part}</span>; // Render normal text
                             })}
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
                <p className="text-muted mb-3">If you have other questions or need further assistance, please don't hesitate to reach out to our support team.</p>
                <Link to="/contact" className="btn btn-primary">Contact Support</Link>
             </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobSeekerFAQPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/JS globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// You might need Bootstrap JS for the accordion:
// import 'bootstrap/dist/js/bootstrap.bundle.min';

