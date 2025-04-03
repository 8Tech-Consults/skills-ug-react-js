// src/app/pages/public/CoverLetterGuidePage.tsx (Example file path - adjust as needed)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CoverLetterGuidePage Component
 * Provides a detailed guide on writing effective cover letters for the Ugandan job market.
 */
const CoverLetterGuidePage: React.FC = () => {

  // Placeholder link - replace with actual internal route
  const careerResourcesLink = "/career-resources";

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
                 <Link to={careerResourcesLink}>Career Resources</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cover Letter Guide
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Writing a Compelling Cover Letter</h1>
            <p className="lead text-muted">
              Your Guide for the Ugandan Job Market
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width for readability */}

            <p className="lead mb-4">
              Your CV provides the facts about your experience and qualifications, but your cover letter is your chance to tell your story, connect with the employer, and show why you're the <em>perfect</em> fit for a specific role in Uganda. While not always explicitly required, a well-written, tailored cover letter can significantly boost your application on 8jobspot.com and set you apart from other candidates.
            </p>
            <p className="mb-5">
              This guide will walk you through the purpose, structure, and key tips for crafting cover letters that get noticed by Ugandan employers.
            </p>
            <hr className="my-5" />

            {/* Section: Why Bother? */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Why Bother Writing a Cover Letter?</h2>
              <p>In a competitive job market, a cover letter is a valuable tool. It allows you to:</p>
              <ol className="list-group list-group-numbered mb-3">
                <li className="list-group-item border-0 px-0"><strong>Introduce Yourself Personally:</strong> Show personality beyond the CV facts.</li>
                <li className="list-group-item border-0 px-0"><strong>Highlight Specific Relevance:</strong> Directly address job requirements with your skills/experience.</li>
                <li className="list-group-item border-0 px-0"><strong>Explain Motivations:</strong> Clearly state your interest in *this* role and *this* company.</li>
                <li className="list-group-item border-0 px-0"><strong>Address Gaps or Transitions:</strong> Provide context for career changes or employment gaps.</li>
                <li className="list-group-item border-0 px-0"><strong>Demonstrate Professionalism & Initiative:</strong> Show you are serious and thorough.</li>
                <li className="list-group-item border-0 px-0"><strong>Showcase Writing Skills:</strong> Provide a direct sample of your communication ability.</li>
              </ol>
            </section>

            {/* Section: Standard Format */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Standard Cover Letter Format (Ugandan Context)</h2>
              <p>Use a professional business letter format. Aim for clarity and conciseness, ideally fitting onto one page.</p>

              <h3 className="h5 fw-semibold mt-4 mb-2">1. Your Contact Information</h3>
              <ul className="list-unstyled ps-3 mb-3">
                  <li><i className="bi bi-dot me-1"></i>Full Name</li>
                  <li><i className="bi bi-dot me-1"></i>Phone Number (Reliable mobile)</li>
                  <li><i className="bi bi-dot me-1"></i>Professional Email Address</li>
                  <li><i className="bi bi-dot me-1"></i>LinkedIn Profile URL (Optional)</li>
                  <li><i className="bi bi-dot me-1"></i>General Location (e.g., Kampala, Uganda)</li>
                  <li className="small text-muted fst-italic">(Align top left or right)</li>
              </ul>

              <h3 className="h5 fw-semibold mt-4 mb-2">2. Date</h3>
              <p>The date you are writing/sending the letter.</p>

              <h3 className="h5 fw-semibold mt-4 mb-2">3. Employer's Contact Information</h3>
               <ul className="list-unstyled ps-3 mb-3">
                  <li><i className="bi bi-dot me-1"></i>Hiring Manager's Name (Try to find this!)</li>
                  <li><i className="bi bi-dot me-1"></i>Their Title</li>
                  <li><i className="bi bi-dot me-1"></i>Company Name</li>
                  <li><i className="bi bi-dot me-1"></i>Company Physical Address (If available)</li>
                   <li className="small text-muted fst-italic">(Align below date, on the left)</li>
              </ul>

               <h3 className="h5 fw-semibold mt-4 mb-2">4. Salutation</h3>
                <ul className="list-unstyled ps-3 mb-3">
                    <li><i className="bi bi-dot me-1"></i>Personalized & Formal: "Dear Mr./Ms. [Last Name]:" (Check spelling!)</li>
                    <li><i className="bi bi-dot me-1"></i>If Name Unknown: "Dear Hiring Manager:", "Dear Recruitment Team:", etc.</li>
                    <li><i className="bi bi-dot me-1"></i>Avoid: "To Whom It May Concern" or "Dear Sir/Madam".</li>
                </ul>

              <h3 className="h5 fw-semibold mt-4 mb-2">5. Body Paragraph 1: Introduction (The Hook)</h3>
               <ul className="list-unstyled ps-3 mb-3">
                  <li><i className="bi bi-dot me-1"></i>State the specific job title you're applying for.</li>
                  <li><i className="bi bi-dot me-1"></i>Mention where you saw the advert (e.g., "on 8jobspot.com").</li>
                  <li><i className="bi bi-dot me-1"></i>Briefly express strong interest and state your core value proposition.</li>
               </ul>
               <blockquote className="blockquote bg-light border-start border-5 border-primary p-3 rounded fst-italic small">
                  <p className="mb-0"><strong>Example:</strong> "I am writing to express my enthusiastic interest in the Project Officer position advertised on 8jobspot.com on April 3, 2025. With my three years of experience managing community health projects in Wakiso District and proven ability to secure grant funding, I am confident I possess the skills and dedication required to contribute significantly to [Company Name]'s impactful work."</p>
               </blockquote>

              <h3 className="h5 fw-semibold mt-4 mb-2">6. Body Paragraphs 2-3: Highlighting Your Fit (The Evidence)</h3>
               <ul className="list-unstyled ps-3 mb-3">
                  <li><i className="bi bi-dot me-1"></i><strong>Connect to Requirements:</strong> Directly address key points from the job description.</li>
                  <li><i className="bi bi-dot me-1"></i><strong>Show, Don't Just Tell:</strong> Provide specific examples/achievements (mini-STAR).</li>
                  <li><i className="bi bi-dot me-1"></i><strong>Use Keywords:</strong> Incorporate terms from the job description naturally.</li>
                  <li><i className="bi bi-dot me-1"></i><strong>Company Focus:</strong> Show you've researched them and explain how you can help *them*.</li>
                  <li><i className="bi bi-dot me-1"></i><strong>Tailor:</strong> Focus on the 2-3 most critical qualifications.</li>
               </ul>
                <blockquote className="blockquote bg-light border-start border-5 border-primary p-3 rounded fst-italic small">
                  <p className="mb-1"><strong>Example Snippet:</strong> "In my previous role at [Previous Company], I developed and delivered weekly project reports to stakeholders, resulting in improved communication clarity and timely feedback."</p>
                  <p className="mb-0"><strong>Example Snippet:</strong> "I was particularly impressed by [Company Name]'s recent initiative in [Specific Area], and I believe my experience in [Relevant Skill] would be valuable in supporting this effort."</p>
               </blockquote>


              <h3 className="h5 fw-semibold mt-4 mb-2">7. Body Paragraph 4: Closing</h3>
                <ul className="list-unstyled ps-3 mb-3">
                  <li><i className="bi bi-dot me-1"></i>Reiterate your strong interest and enthusiasm.</li>
                  <li><i className="bi bi-dot me-1"></i>Express eagerness to discuss qualifications in an interview; state availability.</li>
                  <li><i className="bi bi-dot me-1"></i>Refer the reader to your attached CV/Resume or 8jobspot.com profile.</li>
               </ul>
                <blockquote className="blockquote bg-light border-start border-5 border-primary p-3 rounded fst-italic small">
                  <p className="mb-0"><strong>Example:</strong> "I am very excited about the possibility of bringing my [Key Skill 1] and [Key Skill 2] to your team at [Company Name]. Thank you for considering my application. My attached CV provides further detail on my qualifications. I am available for an interview at your earliest convenience and look forward to hearing from you soon."</p>
               </blockquote>

              <h3 className="h5 fw-semibold mt-4 mb-2">8. Closing</h3>
              <p>Use a professional closing like "Sincerely," or "Yours faithfully,".</p>

              <h3 className="h5 fw-semibold mt-4 mb-2">9. Your Typed Name</h3>
              <p>Leave space for a signature if printing, then type your full name.</p>
            </section>

            <hr className="my-5" />

            {/* Section: Key Tips */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Key Tips for Writing an Effective Cover Letter</h2>
              <ul className="list-group list-group-flush mb-3">
                 <li className="list-group-item px-0 border-0"><strong className="text-danger">TAILOR EVERY LETTER:</strong> Generic letters rarely work. Address the specific company and role.</li>
                 <li className="list-group-item px-0 border-0"><strong>BE CONCISE:</strong> Aim for one page. Use clear, direct language.</li>
                 <li className="list-group-item px-0 border-0"><strong>PROFESSIONAL TONE:</strong> Be formal but confident and enthusiastic. Avoid slang.</li>
                 <li className="list-group-item px-0 border-0"><strong>FOCUS ON EMPLOYER NEEDS:</strong> Frame your skills in terms of how you benefit them.</li>
                 <li className="list-group-item px-0 border-0"><strong>QUANTIFY ACHIEVEMENTS:</strong> Use numbers to show impact where possible.</li>
                 <li className="list-group-item px-0 border-0"><strong>PROOFREAD METICULOUSLY:</strong> Errors undermine your application. Check grammar/spelling. Ask someone else to review.</li>
                 <li className="list-group-item px-0 border-0"><strong>MATCH FORMATTING:</strong> Use the same professional font/style as your CV.</li>
              </ul>
            </section>

            {/* Section: Submitting */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Submitting Your Cover Letter</h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0"><strong>Follow Instructions:</strong> Submit exactly as the employer requests (via 8jobspot.com, email, portal).</li>
                <li className="list-group-item px-0 border-0"><strong>File Format:</strong> Use PDF unless otherwise specified. Name it professionally (e.g., `YourName_CoverLetter_JobTitle.pdf`).</li>
                <li className="list-group-item px-0 border-0"><strong>Email Submission:</strong> Attaching a PDF is often preferred. Use a clear subject line (e.g., "Application for Project Officer Position - [Your Name]").</li>
              </ul>
            </section>

            <hr className="my-5" />

            {/* Section: Conclusion */}
            <section className="mb-5 text-center">
              <h2 className="fw-bolder mb-3">Conclusion</h2>
              <p className="lead text-muted mb-4">
                A compelling cover letter requires effort, but it's a powerful tool. It personalizes your application, demonstrates understanding, and showcases your communication skills. By following these guidelines and tailoring each letter carefully, you significantly increase your chances of making a strong impression on Ugandan employers through 8jobspot.com.
              </p>
            </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoverLetterGuidePage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

