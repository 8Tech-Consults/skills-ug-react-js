// src/app/pages/public/CareerGuidancePage.tsx (Example file path)

import React from "react";
import { Link } from "react-router-dom";

/**
 * CareerGuidancePage Component
 * Provides detailed career guidance and advice for job seekers in Uganda.
 */
const CareerGuidancePage: React.FC = () => {
  // Placeholder links - replace with actual internal routes or external URLs
  const careerResourcesLink = "/career-resources";
  const cvArticleLink = "/resources/articles/crafting-winning-cv"; // Example path
  const interviewArticleLink = "/resources/articles/interview-questions-uganda"; // Example path
  const jobsLink = "/jobs";

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
              {/* Optional: Link to main resources page if it exists */}
              {/* <li className="breadcrumb-item"><Link to={careerResourcesLink}>Career Resources</Link></li> */}
              <li className="breadcrumb-item active" aria-current="page">
                Career Guidance
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">
              Navigating Your Career Path in Uganda
            </h1>
            <p className="lead text-muted">
              Guidance and Strategies for 8jobspot.com Users
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            {" "}
            {/* Adjusted width for readability */}
            <p className="lead mb-4">
              Finding a job is an important step, but building a fulfilling
              career is a lifelong journey. It involves understanding yourself,
              exploring possibilities, setting goals, developing skills, and
              navigating the unique opportunities and challenges of the Ugandan
              job market. This guide offers practical advice to help you manage
              your career path proactively, using resources like 8jobspot.com
              along the way.
            </p>
            <hr className="my-5" />
            {/* Section 1: Self-Assessment */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">1.</span> Start with
                Self-Assessment: Know Yourself
              </h2>
              <p>
                Before you can decide where you want to go, you need to
                understand where you are and what drives you. Effective career
                planning starts with honest self-reflection. Consider:
              </p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Interests:</strong> What topics genuinely fascinate
                  you? What activities do you enjoy?
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Values:</strong> What is most important in a job?
                  (e.g., helping others, security, creativity, work-life
                  balance).
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Skills:</strong> Identify both your technical (Hard
                  Skills like software, tools) and interpersonal (Soft Skills
                  like communication, teamwork).
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Personality:</strong> Do you prefer teamwork or solo
                  work? Structure or flexibility?
                </li>
              </ul>
              <p className="text-muted fst-italic small">
                How to Assess: Reflect on past experiences, ask trusted friends
                or mentors for feedback, or explore free online career
                assessments (use results as a guide, not a definitive answer).
                Knowing yourself helps identify suitable roles and environments.
              </p>
            </section>
            {/* Section 2: Exploring Options */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">2.</span> Explore Career
                Options in Uganda
              </h2>
              <p>
                With self-awareness, explore the possibilities within Uganda's
                diverse economy:
              </p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Research Industries:</strong> Learn about growing
                  sectors (ICT, Tourism, Energy, Agriculture, Services, etc.)
                  and understand their trends.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Understand Roles:</strong> Use 8jobspot.com job
                  descriptions to learn about the day-to-day tasks and required
                  skills for different positions.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Formal vs. Informal vs. Gig:</strong> Consider your
                  preference for structured employment, entrepreneurship, or
                  flexible project-based work. 8jobspot.com lists various
                  opportunity types.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Informational Interviews:</strong> Connect with
                  professionals in fields that interest you (LinkedIn, contacts)
                  to gain insights.
                </li>
              </ul>
            </section>
            {/* Section 3: Setting Goals */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">3.</span> Set SMART Career
                Goals
              </h2>
              <p>
                Define clear short-term (6-12 months) and long-term (3-5+ years)
                goals. Make them SMART:
              </p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <strong>S</strong>pecific: What exactly do you want to
                  achieve?
                </li>
                <li className="list-group-item px-0 border-0">
                  <strong>M</strong>easurable: How will you track progress?
                </li>
                <li className="list-group-item px-0 border-0">
                  <strong>A</strong>chievable: Is it realistic?
                </li>
                <li className="list-group-item px-0 border-0">
                  <strong>R</strong>elevant: Does it align with your values and
                  vision?
                </li>
                <li className="list-group-item px-0 border-0">
                  <strong>T</strong>ime-bound: By when will you achieve it?
                </li>
              </ul>
              <p>
                Write down your goals and review them periodically to stay
                focused and adapt as needed.
              </p>
            </section>
            {/* Section 4: Developing Skills */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">4.</span> Develop Essential
                Skills Continuously
              </h2>
              <p>The job market demands continuous learning:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Identify Gaps:</strong> Compare your skills to those
                  required in target job descriptions on 8jobspot.com.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Acquire Hard Skills:</strong> Pursue relevant
                  training, certifications, or courses demanded in Uganda.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Develop Soft Skills:</strong> Practice communication,
                  teamwork, problem-solving, and adaptability. Digital literacy
                  is crucial.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Use Resources:</strong> Explore online platforms and
                  local Ugandan options (TVETs, workshops). Check our{" "}
                  <Link to={careerResourcesLink}>Career Resources</Link> section
                  for ideas.
                </li>
              </ul>
            </section>
            {/* Section 5: Gaining Experience */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">5.</span> Gain Relevant
                Experience
              </h2>
              <p>Practical experience is highly valued:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Internships:</strong> Gain hands-on experience and
                  network.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Volunteer Work:</strong> Demonstrate initiative and
                  build skills.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Personal Projects:</strong> Showcase your abilities
                  (e.g., portfolio, blog, community project).
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Freelance/Gig Work:</strong> Use 8jobspot.com's gig
                  listings for short-term projects.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <strong>Leverage Entry-Level Roles:</strong> Treat first jobs
                  as learning opportunities; seek feedback and extra
                  responsibilities.
                </li>
              </ul>
            </section>
            {/* Section 6: Networking */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">6.</span> Network
                Effectively and Respectfully
              </h2>
              <p>Building professional relationships is vital in Uganda:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Build
                  connections online (LinkedIn) and offline (events,
                  associations).
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Seek
                  mentors for guidance.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Maintain genuine, mutually beneficial relationships over time.
                </li>
              </ul>
            </section>
            {/* Section 7: Job Search Navigation */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">7.</span> Navigate the Job
                Search Strategically
              </h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Prepare your tools: Use our{" "}
                  <Link to={cvArticleLink}>CV/Resume Guide</Link> and{" "}
                  <Link to={interviewArticleLink}>Interview Prep</Link>{" "}
                  resources.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Be
                  persistent and resilient; learn from rejections.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Use
                  8jobspot.com tools smartly: optimize your profile, set job
                  alerts, apply thoughtfully.
                </li>
              </ul>
            </section>
            {/* Section 8: Career Growth */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                <span className="text-primary me-2">8.</span> Focus on Career
                Growth and Advancement
              </h2>
              <p>Once employed, continue managing your career proactively:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Seek
                  regular feedback on your performance.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>Take
                  initiative, learn new skills, and seek challenges.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Consider further education or professional development.
                </li>
                <li className="list-group-item px-0 border-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Periodically re-evaluate your goals and job satisfaction.
                </li>
              </ul>
            </section>
            <hr className="my-5" />
            {/* Section 9: Conclusion */}
            <section className="mb-5 text-center">
              <h2 className="fw-bolder mb-3">Your Career Journey</h2>
              <p className="lead text-muted mb-4">
                Building a successful career in Uganda is an ongoing process. By
                understanding yourself, exploring options, setting goals,
                developing skills, gaining experience, and networking
                effectively, you take control of your professional future.
              </p>
              <p className="mb-4">
                Utilize the tools and resources available on 8jobspot.com to
                support you at every stage. We are here to help you connect with
                opportunities and build the career you desire.
              </p>
              <Link
                to={jobsLink}
                className="btn btn-primary btn-lg px-4 fw-bold"
              >
                Start Exploring Opportunities Now
              </Link>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerGuidancePage;

// Ensure you have react-router-dom, bootstrap, and bootstrap-icons installed
// npm install react-router-dom bootstrap bootstrap-icons
// or
// yarn add react-router-dom bootstrap bootstrap-icons

// Import Bootstrap CSS/Icons globally (e.g., in index.tsx or App.tsx):
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
