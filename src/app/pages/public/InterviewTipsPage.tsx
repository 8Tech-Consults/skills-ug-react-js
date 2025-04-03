// src/app/pages/public/InterviewTipsPage.tsx (Example file path - adjust as needed)

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * InterviewTipsPage Component
 * Provides a detailed guide on preparing for and succeeding in job interviews in Uganda.
 */
const InterviewTipsPage: React.FC = () => {

  // Placeholder links - replace with actual internal routes
  const cvGuideLink = "/resources/articles/crafting-winning-cv"; // Example path
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
                Interview Tips
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Mastering the Job Interview</h1>
            <p className="lead text-muted">
              A Comprehensive Guide for Ugandan Job Seekers
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9"> {/* Adjusted width for readability */}

            <p className="lead mb-4">
              So, you've submitted your CV through 8jobspot.com, and you've landed an interview – congratulations! That's a huge step. Interviews can feel nerve-wracking, but think of them as a conversation – a chance for the employer to learn about you, and equally, a chance for you to learn about them and see if the role is the right fit.
            </p>
            <p className="mb-5">
              Being well-prepared is the key to turning interview anxiety into confidence. This guide provides detailed tips covering every stage – before, during, and after the interview – tailored for success in the Ugandan job market.
            </p>
            <hr className="my-5" />

            {/* Section 1: Preparation */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-4"><span className="text-primary me-2">1.</span> Before the Interview: Preparation is Your Superpower</h2>
              <p className="mb-4">Don't underestimate the power of preparation. Walking in prepared shows professionalism and genuine interest.</p>

              <h3 className="h4 fw-semibold mb-3">Research the Company Deeply</h3>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Go beyond their website homepage. Understand their <strong>mission, vision, and values</strong>.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Check their <strong>recent news or projects</strong> (website blog, news articles, social media).</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Look up their profile on <strong>8jobspot.com</strong> and <strong>LinkedIn</strong>. Note their leaders and company culture clues.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Understand their <strong>products/services</strong> and position in the Ugandan market.</li>
                <li className="list-group-item px-0 border-0 fst-italic text-muted"><i className="bi bi-info-circle me-2"></i>Why? This helps tailor answers and ask insightful questions, showing genuine interest.</li>
              </ul>

              <h3 className="h4 fw-semibold mb-3">Dissect the Job Description (Again!)</h3>
               <ul className="list-group list-group-flush mb-4">
                 <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Highlight the <strong>key skills, qualifications, and responsibilities</strong> required.</li>
                 <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Prepare <strong>specific examples</strong> from your experience demonstrating each requirement.</li>
               </ul>

              <h3 className="h4 fw-semibold mb-3">Prepare Your Answers (The Core Work)</h3>
              <h4 className="h5 fw-medium mb-2">Common Questions:</h4>
              <p>Practice concise, confident answers (don't memorize scripts):</p>
              <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0 border-0"><em>"Tell me about yourself."</em> (Brief professional journey, relevant skills, goals).</li>
                  <li className="list-group-item px-0 border-0"><em>"What are your strengths?"</em> (Relevant to the job, with examples).</li>
                  <li className="list-group-item px-0 border-0"><em>"What are your weaknesses?"</em> (Honest, constructive, show self-awareness and improvement).</li>
                  <li className="list-group-item px-0 border-0"><em>"Why this role?"</em> (Connect your skills/interests to the job description).</li>
                  <li className="list-group-item px-0 border-0"><em>"Why our company?"</em> (Show your research - values, projects, mission).</li>
                  <li className="list-group-item px-0 border-0"><em>"Where do you see yourself in 5 years?"</em> (Realistic ambition aligned with the role/company).</li>
              </ul>

              <h4 className="h5 fw-medium mb-2">Behavioral Questions ("Tell me about a time when..."):</h4>
              <p>Prepare using the <strong>STAR Method</strong>:</p>
              <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0 border-0"><strong>S</strong>ituation: Briefly describe the context.</li>
                  <li className="list-group-item px-0 border-0"><strong>T</strong>ask: What was your goal or responsibility?</li>
                  <li className="list-group-item px-0 border-0"><strong>A</strong>ction: What specific steps did *you* take? (Use "I").</li>
                  <li className="list-group-item px-0 border-0"><strong>R</strong>esult: What was the outcome? (Quantify if possible).</li>
              </ul>
              <p className="text-muted fst-italic small">Prepare 3-5 STAR stories showcasing skills like problem-solving, teamwork, leadership, handling pressure, adaptability.</p>

              <h4 className="h5 fw-medium mt-3 mb-2">Salary Expectations:</h4>
              <p>Research typical ranges in Uganda for the role and your experience. Have a realistic range in mind, but often it's best to defer specific numbers until later. You can state you're open to discussion based on the full package.</p>

              <h3 className="h4 fw-semibold mt-4 mb-3">Prepare YOUR Questions</h3>
              <p>Prepare 3-5 thoughtful questions to ask the interviewer. Avoid questions easily answered online. Examples:</p>
              <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item px-0 border-0">"What does a typical day look like in this role?"</li>
                  <li className="list-group-item px-0 border-0">"How does the team collaborate on projects?"</li>
                  <li className="list-group-item px-0 border-0">"What are the biggest challenges someone in this role might face?"</li>
                  <li className="list-group-item px-0 border-0">"How is success measured for this position?"</li>
                  <li className="list-group-item px-0 border-0">"What are the opportunities for professional development here?"</li>
                  <li className="list-group-item px-0 border-0">"What are the next steps in the hiring process?"</li>
              </ul>

              <h3 className="h4 fw-semibold mb-3">Logistics & Practice</h3>
               <ul className="list-group list-group-flush mb-4">
                 <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Confirm date, time, location/link, and interviewer details.</li>
                 <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i>Plan your journey (in-person) or test your technology (virtual).</li>
                 <li className="list-group-item px-0 border-0"><i className="bi bi-check text-success me-2"></i><strong>Practice!</strong> Rehearse answers aloud, do a mock interview.</li>
               </ul>
            </section>

            <hr className="my-5" />

            {/* Section 2: Interview Formats */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-4"><span className="text-primary me-2">2.</span> Interview Formats: Adapting Your Approach</h2>
              <p className="mb-4">Interviews come in different forms. Adjust your strategy accordingly:</p>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-semibold mb-2"><i className="bi bi-telephone-fill me-2"></i>Phone Interview/Screening</h4>
                  <p className="small text-muted mb-2">Purpose: Initial check for qualifications and communication.</p>
                  <ul className="mb-0">
                    <li>Find a quiet place with good reception.</li>
                    <li>Have your CV and job description ready.</li>
                    <li>Speak clearly and professionally. Listen carefully.</li>
                    <li>Stand up to project confidence. Smile!</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-semibold mb-2"><i className="bi bi-camera-video-fill me-2"></i>Video Interview (Zoom, Teams, etc.)</h4>
                  <ul className="mb-0">
                    <li><strong>Tech Check:</strong> Test internet, camera, microphone beforehand.</li>
                    <li><strong>Environment:</strong> Quiet room, professional background, good lighting.</li>
                    <li><strong>Attire:</strong> Dress professionally (at least waist-up).</li>
                    <li><strong>Engagement:</strong> Look at the camera, sit upright, minimize distractions.</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-semibold mb-2"><i className="bi bi-person-fill me-2"></i>In-Person Interview</h4>
                   <ul className="mb-0">
                    <li><strong>Attire:</strong> Dress professionally and neatly (lean formal in Uganda unless specified otherwise).</li>
                    <li><strong>Punctuality:</strong> Arrive 10-15 minutes early. Plan for traffic.</li>
                    <li><strong>Etiquette:</strong> Polite greeting, firm handshake (if appropriate), eye contact, good posture. Be courteous to everyone.</li>
                    <li><strong>Preparation:</strong> Bring extra printed copies of your CV.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="my-5" />

            {/* Section 3: During the Interview */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-4"><span className="text-primary me-2">3.</span> During the Interview: Making Your Best Impression</h2>
              <p className="mb-4">This is your chance to connect and showcase your suitability:</p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>First Impressions:</strong> Confident greeting, warm smile, professionalism.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Active Listening:</strong> Pay close attention, don't interrupt, ask for clarification if needed.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Clear Communication:</strong> Speak clearly and concisely. Use the STAR method for examples. Avoid slang.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Show Enthusiasm:</strong> Express genuine interest in the role and company.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Positive Body Language:</strong> Good posture, eye contact, nod to show engagement.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Honesty and Authenticity:</strong> Be truthful. It's okay not to know everything; express willingness to learn. Be yourself.</li>
                <li className="list-group-item px-0 border-0"><i className="bi bi-check-circle text-success me-2"></i><strong>Ask Your Questions:</strong> Ask your prepared, thoughtful questions when prompted.</li>
              </ul>
            </section>

            <hr className="my-5" />

            {/* Section 4: After the Interview */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-4"><span className="text-primary me-2">4.</span> After the Interview: The Follow-Up Matters</h2>
              <p className="mb-4">The process isn't over yet. Professional follow-up is key:</p>

               <h3 className="h5 fw-semibold mb-2">Thank You Note (Essential!)</h3>
               <ul className="list-group list-group-flush mb-3">
                 <li className="list-group-item px-0 border-0">Send a personalized thank-you email within 24 hours to each interviewer.</li>
                 <li className="list-group-item px-0 border-0">Keep it brief, professional, and error-free.</li>
                 <li className="list-group-item px-0 border-0">Thank them for their time, reiterate your interest, and mention a specific point discussed.</li>
               </ul>

               <h3 className="h5 fw-semibold mb-2">Patience & Polite Check-In</h3>
               <ul className="list-group list-group-flush mb-3">
                 <li className="list-group-item px-0 border-0">Respect the hiring timeline provided. Avoid excessive contact.</li>
                 <li className="list-group-item px-0 border-0">If the timeline passes, one polite follow-up email inquiring about the status is acceptable.</li>
               </ul>

               <h3 className="h5 fw-semibold mb-2">Handling Rejection</h3>
                <ul className="list-group list-group-flush mb-3">
                 <li className="list-group-item px-0 border-0">Respond graciously and professionally if you don't get the offer.</li>
                 <li className="list-group-item px-0 border-0">Thank them again. You can politely ask for feedback (optional).</li>
                 <li className="list-group-item px-0 border-0">Maintain a positive connection for potential future opportunities.</li>
               </ul>
            </section>

            <hr className="my-5" />

            {/* Section 5: Conclusion */}
            <section className="mb-5 text-center">
              <h2 className="fw-bolder mb-3">Final Thoughts</h2>
              <p className="lead text-muted mb-4">
                Interviews are a critical part of the hiring process in Uganda. Thorough preparation, clear communication, genuine enthusiasm, and professional follow-up make a significant difference. View each interview as a learning opportunity.
              </p>
              <p className="mb-4">
                Practice, stay positive, and use the resources on 8jobspot.com, like our <Link to={cvGuideLink}>CV Guide</Link> and this interview guide, to help you succeed.
              </p>
              <p className="fw-bold fs-5">We wish you the very best in your interviews!</p>
            </section>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InterviewTipsPage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

