// src/app/pages/public/AboutUsPage.tsx  (Example file path)

import React from "react";
import { Link } from "react-router-dom";

/**
 * AboutUsPage Component
 * Displays information about the 8jobspot.com platform.
 * V3: Added breadcrumb, refined spacing, section styling, and overall look and feel.
 */
const AboutUsPage: React.FC = () => {
  return (
    <React.Fragment>
      {/* --- Hero Section --- */}
      <div className="bg-body-secondary py-5 border-bottom mb-5">
        {" "}
        {/* Added border-bottom */}
        <div className="container px-4 px-lg-10">
          {/* --- Breadcrumb --- */}
          <nav aria-label="breadcrumb" className="mb-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link> {/* Link to Homepage */}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="display-4 fw-bolder mb-3">About 8jobspot.com</h1>
            <p className="lead fw-normal text-body-secondary mb-4">
              Connecting Talent and Opportunity in Uganda
            </p>
            <p className="text-dark mx-auto" style={{ maxWidth: "800px" }}>
              Welcome to 8jobspot.com! We are Uganda's dedicated platform
              designed to seamlessly connect talented individuals with
              meaningful work opportunities, and employers with the skilled
              workforce they need to thrive. Whether you're searching for your
              next career move, a temporary gig, or the perfect candidate,
              8jobspot.com is here to empower your journey in Uganda's dynamic
              employment landscape.
            </p>
            {/* Placeholder for a relevant banner image/graphic if desired */}
            {/* <img src="/path/to/your/hero-image.jpg" alt="Ugandan Job Market" className="img-fluid rounded mt-4" /> */}
          </div>
        </div>
      </div>
      {/* --- Main Content Container --- */}
      <div className="container px-4 px-lg-5">
        {/* --- Mission & Vision Section --- */}
        <section className="py-5">
          {" "}
          {/* Use section tag and consistent padding */}
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-lg-6">
              {/* Placeholder for an image related to mission/vision */}
              {/* <img className="img-fluid rounded mb-4 mb-lg-0" src="/path/to/mission-image.jpg" alt="Our Mission" /> */}
              <div className="p-4 p-md-5 bg-light rounded border shadow-sm border-primary">
                <h2 className="fw-bolder mb-3">Our Mission</h2>
                <p className="lead mb-0">
                  To bridge the gap between job seekers and employers across
                  Uganda by providing an accessible, innovative, and
                  comprehensive platform that caters to both formal employment
                  and the growing gig economy. We aim to foster economic growth
                  and individual prosperity by making opportunity visible and
                  attainable for everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 border border-primary rounded shadow-sm">
              <div className="p-4">
                <h2 className="fw-bolder mb-3">Our Vision</h2>
                <p className="lead mb-0">
                  To be the leading catalyst for employment connections in
                  Uganda, driving a future where every individual can easily
                  find work that matches their skills and aspirations, and every
                  employer can efficiently build the team they need to succeed.
                  We envision a vibrant Ugandan job market powered by technology
                  and inclusivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- What is 8jobspot.com Section --- */}
        <section className="py-5 my-5 bg-light rounded border border-primary shadow-sm">
          {" "}
          {/* Use section tag */}
          <div className="container px-4 px-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="fw-bolder mb-3">What is 8jobspot.com?</h2>
                <p className="lead text-primary mb-0">
                  More than just a job board; it's a complete ecosystem built
                  specifically for the Ugandan context. We understand the unique
                  needs of both job seekers and employers in our communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- For Job Seekers / Employers Section --- */}
        <section className="py-5">
          {" "}
          {/* Use section tag */}
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-6 mb-5">
              {/* Removed colored border, kept shadow */}
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold text-primary mb-3">
                    <i className="bi bi-person-workspace me-2"></i>For Job
                    Seekers
                  </h3>
                  {/* Added check icons */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Create Your Profile:</strong> Build a
                      comprehensive professional profile.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Build Your Resume:</strong> Utilize our tools to
                      craft a standout CV.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Explore Opportunities:</strong> Search jobs, gigs,
                      and freelance projects.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Apply with Ease:</strong> Submit applications
                      directly.
                    </li> 
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Track Applications:</strong> Keep tabs on your
                      applications.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Career Resources:</strong> Access tips, guides,
                      and advice.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              {/* Removed colored border, kept shadow */}
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold text-success mb-3">
                    <i className="bi bi-buildings-fill me-2"></i>For Employers
                  </h3>
                  {/* Added check icons */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Showcase Your Brand:</strong> Create detailed
                      company profiles.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Post Jobs & Gigs:</strong> Advertise vacancies
                      easily.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Find Candidates:</strong> Search our extensive
                      talent database.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Manage Applicants:</strong> Utilize intuitive
                      hiring tools.
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Promote Inclusivity:</strong> Highlight your
                      commitment to diversity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Our Story Section --- */}
        <section className="py-5 my-5 bg-light p-4 p-md-5 rounded border">
          {" "}
          {/* Use section tag */}
          <div className="row gx-4 gx-lg-5 justify-content-center">
            {" "}
            {/* Center content */}
            <div className="col-lg-10 text-center">
              {" "}
              {/* Limit width and center text */}
              <h2 className="fw-bolder mb-3">Our Story</h2>
              <p className="lead">
                Born out of a passion for leveraging technology for social and
                economic development in Uganda, 8jobspot.com was proudly
                developed by{" "}
                <a
                  href="https://8technologies.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  8Technologies.net
                </a>
                , a leading Ugandan ICT services and management consultancy
                firm.
              </p>
              <p className="text-muted">
                We recognized the need for a localized platform that truly
                understands the nuances of the Ugandan job market, including the
                vital role of the informal and gig economies alongside formal
                employment. Built on experience and a commitment to innovation,
                8jobspot.com aims to be the go-to resource for employment
                connections in the country.
              </p>
            </div>
          </div>
        </section>
 

        {/* --- Call to Action Section --- */}
        <section className="py-5">
          {" "}
          {/* Use section tag */}
          {/* Lighter background, more padding */}
          <div className="card text-center shadow-lg bg-primary-subtle text-primary-emphasis">
            <div className="card-body p-4 p-lg-5">
              <h2 className="fw-bolder mb-4">Ready to Get Started?</h2>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-6 mb-4 mb-md-0 text-md-end">
                  <h4 className="fw-semibold mb-3">Job Seekers</h4>
                  <p>
                    Your next opportunity awaits! Build your profile, showcase
                    your skills, and start applying today.
                  </p>
                  {/* Link to Job Seeker Registration */}
                  <Link
                    to="/auth/registration"
                    className="btn btn-primary btn-lg px-4 fw-bold"
                  >
                    {" "}
                    {/* Solid primary button */}
                    Sign Up Now <i className="bi bi-arrow-right-short ms-1"></i>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-6 text-md-start">
                  <h4 className="fw-semibold mb-3">Employers</h4>
                  <p>
                    Find the perfect fit for your team, whether it's for a
                    long-term role or a short-term gig.
                  </p>
                  {/* Link to Employer Registration or Job Posting */}
                  <Link
                    to="/employer/post-job"
                    className="btn btn-success btn-lg px-4 fw-bold"
                  >
                    {" "}
                    {/* Solid success button */}
                    Post a Job/Gig{" "}
                    <i className="bi bi-arrow-right-short ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      {/* End of Main Content Container */}
    </React.Fragment>
  );
};

export default AboutUsPage;