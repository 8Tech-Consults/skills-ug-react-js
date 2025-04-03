import { FC } from "react";
import { Link } from "react-router-dom"; // Keep for internal links like the button
import { toAbsoluteUrl } from "../../../../helpers"; // Assuming path is correct
import { useLayout } from "../../../core"; // Assuming path is correct

// Make sure Bootstrap Icons CSS is imported globally in your project for the icons to work
// import 'bootstrap-icons/font/bootstrap-icons.css';

const MegaMenuELearning: FC = () => {
  const { setLayoutType, setToolbarType } = useLayout();
  const coursesUrl = "https://8learning.org/courses"; // Define target URL

  return (
    <div className="row">
      {/* begin:Col */}
      <div className="col-lg-6">
        {/* begin:Row */}
        <div className="row">
          {/* begin:Col */}
          <div className="col-lg-6 mb-3">
            {/* begin:Heading */}
            <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
              Categories
            </h4>
            {/* end:Heading */}
            {/* begin:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center" // Added flex
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Daylong Courses</span>
                {/* Added spacing */}
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
                {/* Added Icon */}
              </a>
              {/* end:Menu link */}
            </div>
            {/* end:Menu item */}
            {/* begin:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Evening Courses</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
              {/* end:Menu link */}
            </div>
            {/* end:Menu item */}
            {/* begin:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Personalized Courses</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
              {/* end:Menu link */}
            </div>
            {/* end:Menu item */}
            {/* begin:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Training Venues</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
              {/* end:Menu link */}
            </div>
            {/* end:Menu item */}
          </div>
          {/* end:Col */}
          {/* begin:Col */}
          <div className="col-lg-6 mb-3">
            {/* begin:Heading */}
            <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
              Top Courses
            </h4>
            {/* end:Heading */}
            {/* begin:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Finance (7)</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
              {/* end:Menu link */}
            </div>
            {/* end:Menu item */}
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Administration (3)</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
            </div>
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">IT (23)</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
            </div>
            <div className="menu-item p-0 m-0">
              {/* begin:Menu link (Updated) */}
              <a
                href={coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link d-flex align-items-center"
              >
                <span className="menu-bullet">
                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
                </span>
                <span className="menu-title me-2">Law (23)</span>
                <i className="bi bi-box-arrow-up-right text-muted small"></i>
              </a>
            </div>
          </div>
          {/* end:Col */}
        </div>
        {/* end:Row */}
        <div className="separator separator-dashed mx-lg-5 mt-2 mb-6"></div>
        {/* begin:Layout Builder */}
        <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mb-5 mb-lg-0 mx-lg-5">
          <div className="d-flex flex-column me-5">
            <div className="fs-6 fw-bold text-gray-800">
              Unlock Your Potential
            </div>
            <div className="fs-7 fw-semibold text-muted">
              Master new skills with our courses
            </div>
          </div>
          {/* This internal link remains unchanged */}
          <Link className="btn btn-sm btn-primary fw-bold" to="/8learning">
            Try 8Learning
          </Link>
        </div>
        {/* end:Layout Builder */}
      </div>
      {/* end:Col */}
      {/* begin:Col */}
      <div className="col-lg-6 mb-3 py-lg-3 pe-lg-8 d-flex align-items-center">
        <img
          src={toAbsoluteUrl("media/stock/900x600/45.jpg")} // Assuming toAbsoluteUrl handles path correctly
          className="rounded mw-100"
          alt="E-Learning Courses" // Added descriptive alt text
        />
      </div>
      {/* end:Col */}
    </div>
  );
};

export { MegaMenuELearning };
