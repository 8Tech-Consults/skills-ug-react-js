import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { JobModel } from "../../models/JobModel";
import Utils from "../../services/Utils";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAuth } from "../../modules/auth";
import { toast } from "react-toastify";
// Import react-share components
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export const JobSkeleton: React.FC = () => (
  <div className="container py-4 px-2 px-lg-10">
    <div className="row mb-4 g-3">
      <div className="col-12 col-lg-8">
        <div className="d-flex align-items-start">
          <Skeleton circle width={80} height={80} className="me-3" />
          <div style={{ width: "100%" }}>
            <Skeleton height={32} width="60%" />
            <Skeleton height={20} width="40%" />
            <Skeleton height={20} width="30%" />
            <Skeleton height={20} width="30%" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <Skeleton height={38} width="100%" />
      </div>
    </div>

    <div className="row gy-4">
      <div className="col-12 col-lg-8">
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <Skeleton height={24} width="30%" className="mb-3" />
          <Skeleton count={10} />
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <Skeleton height={24} width="40%" className="mb-3" />
          <Skeleton count={8} />
        </div>
      </div>
    </div>
  </div>
);

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser, jobseekerManifest } = useAuth();

  const [job, setJob] = useState<JobModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasAppliedForThisJob, setHasAppliedForThisJob] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // New state for showing the share modal
  const [showShareModal, setShowShareModal] = useState(false);

  const checkApplicationStatus = () => {
    if (jobseekerManifest) {
      for (const application of jobseekerManifest.job_applications_list) {
        if (application.job_id + "" === id + "") {
          setHasAppliedForThisJob(true);
          break;
        }
      }
    }
  };

  useEffect(() => {
    if (!id) return;
    const fetchJob = async () => {
      setLoading(true);
      setError("");
      try {
        const fetchedJob = await JobModel.fetchJobById(id);
        setJob(fetchedJob);
      } catch (err: any) {
        setError(err.message || "Failed to fetch job details.");
      } finally {
        setLoading(false);
      }
      checkApplicationStatus();
    };
    fetchJob();
  }, [id]);

  const handleApplyNow = () => {
    if (!currentUser) {
      toast.info(
        <div style={{ textAlign: "center" }}>
          <p>Please login to apply for this job</p>
          <div className="d-grid gap-2 d-md-block">
            <button
              className="btn btn-primary me-2"
              onClick={() => {
                toast.dismiss();
                navigate("/auth/login");
              }}
            >
              Login
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => toast.dismiss()}
            >
              Cancel
            </button>
          </div>
        </div>,
        { autoClose: false }
      );
      return;
    }
    navigate(`/jobs/${id}/apply`);
  };

  const handleShareJob = () => {
    // Open the share modal
    setShowShareModal(true);
  };

  if (loading) {
    return <JobSkeleton />;
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!job) {
    return null;
  }

  // Compute share details
  const shareUrl = window.location.href;
  const shareTitle = job.title;
  // Remove HTML tags from responsibilities and get a snippet for the description
  const shareDescription = job.responsibilities
    ? job.responsibilities.replace(/<[^>]+>/g, "").substring(0, 150)
    : "Check out this job opportunity!";

  // Inline styles for modal
  const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  };

  return (
    <>
      {showShareModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h4>Share this Job</h4>
            <p>{shareTitle}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={48} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <TwitterIcon size={48} round />
              </TwitterShareButton>
              <LinkedinShareButton
                url={shareUrl}
                title={shareTitle}
                summary={shareDescription}
                source="JobSite"
              >
                <LinkedinIcon size={48} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={shareTitle}>
                <WhatsappIcon size={48} round />
              </WhatsappShareButton>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              style={{ marginTop: "1rem" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <motion.div
        className="container py-4 px-2 px-lg-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ol className="breadcrumb breadcrumb-item text-muted fs-6 fw-bold mb-5 mx-3">
          <li className="breadcrumb-item pe-3">
            <Link to="/" className="active text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item pe-3 ">
            <Link to="/jobs" className="active text-decoration-none">
              Jobs
            </Link>
          </li>
          <li className="breadcrumb-item px-3 text-muted ">{job.title}</li>
        </ol>

        <div className="row gy-4 mx-0">
          <div className="col-12 col-lg-8">
            <motion.div
              className="bg-white p-4 rounded shadow-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="row mb-4 g-3">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    {job.job_icon && (
                      <img
                        src={Utils.img(job.job_icon)}
                        alt={job.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                        className="rounded me-3"
                      />
                    )}
                    <div>
                      <h2 className="fw-bold mb-1">{job.title}</h2>
                      <p className="mb-2 text-muted">
                        <i className="bi bi-geo-alt-fill me-1" />
                        {job.district_text || "Location N/A"}
                      </p>
                      <p className="mb-2 text-danger">
                        <i className="bi bi-alarm me-1" />
                        Application Deadline:{" "}
                        <strong>
                          {Utils.formatDate(job.deadline) || "Not specified"}
                        </strong>
                      </p>
                      <span
                        className={`badge ${
                          job.status === "Open"
                            ? "bg-success"
                            : job.status === "Closed"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <h5 className="fw-bold mb-3 mt-5">Job Description</h5>
              <div>
                {job.responsibilities
                  ? parse(job.responsibilities)
                  : "No description provided."}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded shadow-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h5 className="fw-bold mb-3">Benefits & Other Info</h5>
              <div>
                {job.benefits
                  ? parse(job.benefits)
                  : "No benefits details provided."}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded shadow-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h5 className="fw-bold mb-3">Application Method</h5>
              {job.application_method ? (
                <div>
                  <strong>Method:</strong> {job.application_method}
                  <br />
                  <strong>Details:</strong>{" "}
                  {job.application_method_details || "N/A"}
                </div>
              ) : (
                <div>No application instructions provided.</div>
              )}
            </motion.div>
          </div>

          <div className="col-12 col-lg-4">
            <motion.div
              className="bg-white p-4 rounded shadow-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h6 className="fw-bold mb-3">Job Details</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-building me-2 text-muted" />
                  <strong>Category: </strong>
                  {job.category_text || "N/A"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-briefcase me-2 text-muted" />
                  <strong>Employment Type: </strong>
                  {job.employment_status || "N/A"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-laptop me-2 text-muted" />
                  <strong>Workplace: </strong>
                  {job.workplace || "N/A"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-cash-stack me-2 text-muted" />
                  <strong>Salary: </strong>
                  {job.show_salary === "Yes" ? (
                    <>
                      UGX {new Intl.NumberFormat().format(job.minimum_salary)} -{" "}
                      {new Intl.NumberFormat().format(job.maximum_salary)}
                    </>
                  ) : (
                    "Hidden"
                  )}
                </li>
                <li className="mb-2">
                  <i className="bi bi-bar-chart-line me-2 text-muted" />
                  <strong>Experience: </strong>
                  {job.experience_period || "Not specified"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-mortarboard-fill me-2 text-muted" />
                  <strong>Min. Qualification: </strong>
                  {job.minimum_academic_qualification || "N/A"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-person-fill me-2 text-muted" />
                  <strong>Gender: </strong>
                  {job.gender || "N/A"}
                </li>
                <li className="mb-2">
                  <i className="bi bi-people-fill me-2 text-muted" />
                  <strong>Vacancies: </strong>
                  {job.vacancies_count || 1}
                </li>
                <li className="mb-2">
                  <i className="bi bi-card-list me-2 text-muted" />
                  <strong>Status: </strong>
                  {job.status}
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h6 className="fw-bold mb-3">Actions</h6>
              <div className="d-grid gap-2">
                {hasAppliedForThisJob ? (
                  <>
                    <button
                      className="btn btn-success mb-2"
                      onClick={() => navigate("/admin/my-job-applications")}
                    >
                      <i className="bi bi-file-earmark-text-fill me-1" />
                      My Job Applications
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => navigate("/jobs")}
                    >
                      <i className="bi bi-briefcase-fill me-1" />
                      Browse More Jobs
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary" onClick={handleApplyNow}>
                    <i className="bi bi-send-fill me-1" />
                    Apply Now
                  </button>
                )}
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleShareJob}
                >
                  <i className="bi bi-share-fill me-1" />
                  Share This Job
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-5">
          <Link to="/jobs" className="text-decoration-none">
            <i className="bi bi-arrow-left me-1" />
            Back to Job Listings
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default JobDetailPage;



export const PageSkeleton: React.FC = () => ( 
  <div className="container py-4 px-2 px-lg-10">
    <div className="row mb-4 g-3">
      <div className="col-12">
        <Skeleton height={32} width="60%" />
        <Skeleton height={20} width="40%" />
      </div>
    </div>

    <div className="row gy-4">
      <div className="col-12">
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <Skeleton height={24} width="30%" className="mb-3" />
          <Skeleton count={10} />
        </div>
      </div>
    </div>
  </div>
);