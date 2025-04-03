// src/app/pages/employer/DisabilityInclusionPage.tsx (Example file path)

import React from "react";
import { Link } from "react-router-dom";

/**
 * DisabilityInclusionPage Component
 * Provides guidance for employers on disability inclusion in the workplace.
 */
const DisabilityInclusionPage: React.FC = () => {
  // Placeholders for external links - Replace # with actual URLs
  const nudipuUrl = "#"; // Placeholder for NUDIPU website
  const mglsdUrl = "#"; // Placeholder for MGLSD website
  const pwdActUrl = "#"; // Placeholder for link to PWD Act, 2020 text

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
                {/* Assuming an employer section exists */}
                <Link to="/employer/dashboard">For Employers</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Disability Inclusion
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bolder mb-2">Embracing Diversity</h1>
            <p className="lead text-muted">
              A Guide to Disability Inclusion in the Ugandan Workplace
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
              At 8jobspot.com, we believe that a diverse workforce is a strong
              workforce. Creating an inclusive environment where everyone,
              including Persons with Disabilities (PWDs), can thrive is not just
              an ethical imperative but also a strategic advantage for
              businesses in Uganda. This guide explores the importance of
              disability inclusion and provides practical steps for employers
              using our platform.
            </p>
            {/* Section: What is Disability Inclusion? */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">What is Disability Inclusion?</h2>
              <p>
                Disability inclusion means creating workplaces where people with
                disabilities feel welcomed, respected, valued, and have equal
                opportunities to succeed. It goes beyond simply hiring PWDs; it
                involves intentionally designing policies, practices, and
                environments that are accessible and supportive for everyone.
              </p>
            </section>
            {/* Section: Why Prioritize? */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                Why Prioritize Disability Inclusion in Uganda?
              </h2>
              <p>Embracing disability inclusion offers significant benefits:</p>
              <ol className="list-group list-group-numbered mb-3">
                <li className="list-group-item border-0 px-0">
                  <strong>Untapped Talent Pool:</strong> Uganda has a
                  significant population of talented individuals with
                  disabilities whose skills are often overlooked. Inclusive
                  hiring practices give you access to this wider pool of
                  potential employees.
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Innovation and Problem-Solving:</strong> Diverse
                  teams, including those with varied abilities and perspectives,
                  bring unique insights that foster creativity and lead to more
                  innovative solutions.
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Enhanced Company Reputation:</strong> Demonstrating a
                  commitment to inclusion boosts your brand image, attracting
                  not only diverse talent but also socially conscious customers
                  and partners.
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Improved Workplace Culture:</strong> Inclusive
                  environments tend to have higher employee morale, better
                  teamwork, and increased loyalty across the entire workforce.
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Legal Compliance:</strong> Uganda's{" "}
                  <strong>Persons with Disabilities Act, 2020</strong> mandates
                  non-discrimination and promotes equal opportunities in
                  employment for PWDs. Inclusive practices ensure you meet these
                  legal obligations.
                </li>
              </ol>
            </section>
            {/* Section: Understanding Disability */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Understanding Disability</h2>
              <p>
                Disabilities can be diverse, including physical, sensory
                (visual, hearing), intellectual, or psychosocial disabilities.
                Importantly, many disabilities are not immediately visible.
                Focus should always be on a person's skills, qualifications, and
                potential, rather than assumptions based on a disability.
              </p>
            </section>
            {/* Section: Inclusive Recruitment Process */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                Creating an Inclusive Recruitment Process on 8jobspot.com
              </h2>
              <p>
                Your recruitment process is the first step towards building an
                inclusive team. Here’s how to make it welcoming for PWDs:
              </p>

              <h3 className="h5 fw-semibold mt-4 mb-2">
                1. Inclusive Job Descriptions:
              </h3>
              <ul className="list-unstyled ps-3 mb-3">
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Clearly define the <strong>essential functions</strong> of the
                  role.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Use
                  clear, simple language and avoid jargon.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Include an <strong>Equal Opportunity Employer (EOE)</strong>{" "}
                  statement.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Explicitly state your willingness to provide{" "}
                  <strong>reasonable accommodations</strong> during the
                  application/interview process and for the job itself.{" "}
                  <em>Highlight this in your 8jobspot.com company profile!</em>
                </li>
              </ul>

              <h3 className="h5 fw-semibold mt-4 mb-2">
                2. Accessible Application Process:
              </h3>
              <ul className="list-unstyled ps-3 mb-3">
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Ensure
                  your application methods are accessible. Using the
                  8jobspot.com platform helps, as we strive to meet
                  accessibility standards (See our{" "}
                  <Link to="/accessibility">Accessibility Statement</Link>).
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Be
                  prepared to offer alternative application formats (e.g.,
                  email, phone) if requested.
                </li>
              </ul>

              <h3 className="h5 fw-semibold mt-4 mb-2">
                3. Inclusive Interviewing:
              </h3>
              <ul className="list-unstyled ps-3 mb-3">
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Focus
                  questions on skills, experience, and the ability to perform
                  essential job functions.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Ask
                  all candidates the same core questions, avoiding inquiries
                  about disability unless related to a request for
                  accommodation.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>If an
                  accommodation is requested for the interview (e.g., sign
                  language interpreter, accessible venue), make reasonable
                  efforts to provide it.
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Train
                  your interview panel on disability awareness and inclusive
                  interviewing techniques.
                </li>
              </ul>
            </section>
            {/* Section: Leveraging 8jobspot Features */}
            <section className="mb-5 p-4 bg-light rounded border">
              <h3 className="fw-bolder mb-3 text-primary">
                <i className="bi bi-tools me-2"></i>Leveraging 8jobspot.com
                Features
              </h3>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="bi bi-building-check me-2"></i>
                  <strong>Company Profile:</strong> Clearly state your
                  commitment to disability inclusion and mention if you have a
                  disability inclusion policy in your 8jobspot.com company
                  profile.
                </li>
                <li>
                  <i className="bi bi-file-earmark-text me-2"></i>
                  <strong>Job Postings:</strong> Use the job description field
                  to welcome applications from PWDs and state your willingness
                  to provide accommodations.
                </li>
              </ul>
            </section>
            {/* Section: Reasonable Accommodations */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                Reasonable Accommodations: What Does it Mean?
              </h2>
              <p>
                Reasonable accommodation refers to necessary and appropriate
                modifications or adjustments that enable a person with a
                disability to apply for a job, perform essential job functions,
                and enjoy equal employment opportunities. The process should be
                interactive:
              </p>
              <ul className="lh-lg">
                <li>Discuss the individual's needs openly.</li>
                <li>Identify potential accommodations.</li>
                <li>
                  Implement the agreed-upon accommodation unless it causes undue
                  hardship to the organization (a high threshold under the law).
                </li>
              </ul>
              <p>
                Examples include: Modified work schedules, assistive technology
                (screen readers, magnifiers), accessible software, ergonomic
                workstations, sign language interpreters, or adjustments to
                communication methods.
              </p>
            </section>
            {/* Section: Building Inclusive Culture */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">
                Building an Inclusive Workplace Culture
              </h2>
              <p>Inclusion extends beyond recruitment:</p>
              <ul className="lh-lg">
                <li>
                  <strong>Leadership Buy-in:</strong> Commitment from senior
                  management is crucial.
                </li>
                <li>
                  <strong>Awareness Training:</strong> Educate all employees
                  about disability etiquette and unconscious bias.
                </li>
                <li>
                  <strong>Accessibility:</strong> Ensure your physical office
                  (ramps, restrooms) and digital tools (internal software,
                  website) are accessible.
                </li>
                <li>
                  <strong>Open Communication:</strong> Foster an environment
                  where employees feel comfortable discussing needs or
                  requesting accommodations.
                </li>
              </ul>
            </section>
            {/* Section: Resources in Uganda */}
            <section className="mb-5 p-4 bg-light rounded border">
              <h2 className="fw-bolder mb-3 text-primary">
                <i className="bi bi-life-preserver me-2"></i>Resources & Support
                in Uganda
              </h2>
              <p>
                Several organizations in Uganda advocate for and support PWDs
                and inclusive employment:
              </p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="bi bi-link-45deg me-2"></i>
                  <strong>
                    National Union of Disabled Persons of Uganda (NUDIPU):
                  </strong>{" "}
                  A key umbrella organization.{" "}
                  <a href={nudipuUrl} target="_blank" rel="noopener noreferrer">
                    (Visit Website - *Update Link*)
                  </a>
                </li>
                <li>
                  <i className="bi bi-link-45deg me-2"></i>
                  <strong>
                    Ministry of Gender, Labour and Social Development (MGLSD):
                  </strong>{" "}
                  Oversees disability affairs and employment law.{" "}
                  <a href={mglsdUrl} target="_blank" rel="noopener noreferrer">
                    (Visit Website - *Update Link*)
                  </a>
                </li>
                <li>
                  <i className="bi bi-link-45deg me-2"></i>
                  <strong>Persons with Disabilities Act, 2020:</strong>{" "}
                  Familiarize yourself with the legal framework.{" "}
                  <a href={pwdActUrl} target="_blank" rel="noopener noreferrer">
                    (Read the Act - *Update Link*)
                  </a>
                </li>
              </ul>
            </section>
            {/* Section: Conclusion */}
            <section className="mb-5">
              <h2 className="fw-bolder mb-3">Conclusion</h2>
              <p>
                Disability inclusion is fundamental to building a fair,
                equitable, and successful organization in Uganda. By adopting
                inclusive practices, employers can access a broader talent pool,
                enhance innovation, strengthen their reputation, and comply with
                the law.
              </p>
              <p>
                8jobspot.com is committed to facilitating these connections. We
                encourage all employers on our platform to embrace disability
                inclusion and discover the immense value that PWDs bring to the
                workplace.
              </p>
              <div className="text-center mt-4">
                <Link to="/admin/job-create" className="btn btn-primary btn-lg">
                  Post Your Job & Signal Inclusion{" "}
                  <i className="bi bi-arrow-right-short ms-1"></i>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisabilityInclusionPage;
