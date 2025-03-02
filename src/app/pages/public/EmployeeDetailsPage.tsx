import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

import { CvModel } from "../../models/CvModel";
import Utils from "../../services/Utils";
import { http_get, http_post } from "../../services/Api";
import { JobModel, PaginatedResponse } from "../../models/JobModel";
import { useAuth } from "../../modules/auth";
import { JobSeekerManifest } from "../../models/JobSeekerManifest";

// Motion variant for fade animations
const fadeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10 },
};

const EmployerDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser, jobseekerManifest } = useAuth();

  const [employer, setEmployer] = useState<CvModel | null>(null);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [hasFollowed, setHasFollowed] = useState(false);

  const checkApplicationStatus = async () => {
    await JobSeekerManifest.getItems();
    if (jobseekerManifest && currentUser) {
      for (const application of jobseekerManifest.company_follows) {
        if (application.company_id + "" == id + "") {
          setHasFollowed(true);
          break;
        }
      }
    }
  };

  // Fetch employer (company) details
  useEffect(() => {
    if (!id) return;
    const fetchEmployerDetails = async () => {
      try {
        setLoading(true);
        const res = await http_get(`/cvs/${id}`);
        if (res.code !== 1) {
          throw new Error(res.message || "Failed to fetch employer details.");
        }
        const details = CvModel.fromJson(res.data);
        setEmployer(details);
        checkApplicationStatus();
      } catch (err: any) {
        setError("Failed to load employer details.");
        toast.error("Failed to load employer details.");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployerDetails();
  }, [id]);

  // Fetch jobs posted by the employer
  useEffect(() => {
    if (!id) return;
    const fetchEmployerJobs = async () => {
      try {
        setJobsLoading(true);
        const res = await http_get(`/jobs?posted_by_id=${id}`);
        if (res.code !== 1) {
          throw new Error(res.message || "Failed to fetch employer jobs.");
        }
        // Alternatively, use the model's fetchJobs method with extra params
        const response: PaginatedResponse<JobModel> = await JobModel.fetchJobs(
          1,
          {
            posted_by_id: id,
            per_page: 50,
          }
        );
        setJobs(response.data);
      } catch (err: any) {
        toast.error("Failed to load jobs for this employer.");
      } finally {
        setJobsLoading(false);
      }
    };
    fetchEmployerJobs();
  }, [id]);

  // Follow employer functionality
  const handleFollowEmployer = async () => {
    if (!employer) return;
    setIsFollowing(true);
    try {
      const payload = { company_id: employer.id };
      await http_post("/company-follow", payload);
      await checkApplicationStatus();
      setHasFollowed(true);
      toast.success("You are now following this company.");
    } catch (error: any) {
      toast.error("Failed to follow the company: " + error);
    } finally {
      setIsFollowing(false);
    }
  };

  // Helper to safely parse JSON strings (for operating hours or certifications)
  const parseJson = (str?: string) => {
    if (!str) return null;
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  };

  if (loading) {
    return (
      <div className="container py-4">
        <Skeleton count={10} />
      </div>
    );
  }

  if (error || !employer) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">
          Error: {error || "Employer not found."}
        </div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  // Parse JSON data for operating hours and certifications if available
  const operatingHours = parseJson(employer.company_operating_hours);
  const certifications = parseJson(employer.company_certifications);

  return (
    <motion.div
      className="container py-4"
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Back Button */}
      <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>
        &laquo; Back to Employers
      </button>

      {/* Employer Header */}
      <div className="d-flex align-items-center border-bottom pb-3 mb-3">
        <img
          src={Utils.img(employer.company_logo || "default-company.png")}
          alt={employer.company_name}
          className="me-3"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <div>
          <h2 className="mb-1">{employer.company_name}</h2>
          <p className="mb-0">
            <strong>Established:</strong>{" "}
            {employer.company_year_of_establishment || "N/A"}
          </p>
          <p className="mb-0">
            <strong>Employees:</strong>{" "}
            {employer.company_employees_range || "N/A"}
          </p>
          <p className="mb-0">
            <strong>Country:</strong> {employer.company_country || "N/A"}
          </p>
        </div>
        <div className="ms-auto">
          {hasFollowed ? (
            <>
              <Link
                to="/admin/my-company-follows"
                className="btn btn-success me-2"
              >
                Browse Followed Companies
              </Link>
              <Link to="/employers" className="btn btn-secondary">
                Browse More Companies
              </Link>
            </>
          ) : (
            <button
              className="btn btn-primary"
              disabled={isFollowing}
              onClick={handleFollowEmployer}
            >
              {isFollowing ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  />
                  Following...
                </>
              ) : (
                "Follow Company"
              )}
            </button>
          )}
        </div>
      </div>

      {/* Detailed Company Information */}
      <div className="row mb-4">
        {/* Company Overview */}
        <div className="col-lg-6 mb-3">
          <h5 className="mb-2">Company Overview</h5>
          <p>{employer.company_description || "No description available."}</p>
          <hr className="my-2" />
        </div>

        {/* Contact & Online Presence */}
        <div className="col-lg-6 mb-3">
          <h5 className="mb-2">Contact & Online Presence</h5>
          <dl className="row mb-0">
            <dt className="col-sm-5">Address:</dt>
            <dd className="col-sm-7">{employer.company_address || "N/A"}</dd>
            <dt className="col-sm-5">Website:</dt>
            <dd className="col-sm-7">
              {employer.company_website_url ? (
                <a
                  href={employer.company_website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {employer.company_website_url}
                </a>
              ) : (
                "N/A"
              )}
            </dd>
            <dt className="col-sm-5">Facebook:</dt>
            <dd className="col-sm-7">
              {employer.company_facebook_url ? (
                <a
                  href={employer.company_facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Page
                </a>
              ) : (
                "N/A"
              )}
            </dd>
            <dt className="col-sm-5">LinkedIn:</dt>
            <dd className="col-sm-7">
              {employer.company_linkedin_url ? (
                <a
                  href={employer.company_linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              ) : (
                "N/A"
              )}
            </dd>
          </dl>
        </div>
      </div>

      {/* Operating Hours & Certifications */}
      <div className="row mb-4">
        {operatingHours && (
          <div className="col-lg-6 mb-3">
            <h5 className="mb-2">Operating Hours</h5>
            <ul className="list-unstyled mb-0">
              {Object.entries(operatingHours).map(([day, hours]) => (
                <li key={day}>
                  <strong>{day}:</strong> {hours as string}
                </li>
              ))}
            </ul>
          </div>
        )}
        {certifications && (
          <div className="col-lg-6 mb-3">
            <h5 className="mb-2">Certifications</h5>
            <ul className="list-unstyled mb-0">
              {certifications.map((cert: string, index: number) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Jobs Posted by the Employer */}
      <div className="mb-4">
        <h5 className="mb-3">Jobs Posted by {employer.company_name}</h5>
        {jobsLoading ? (
          <Skeleton count={5} />
        ) : jobs.length > 0 ? (
          <div className="list-group">
            {jobs.map((job) => (
              <Link
                to={`/jobs/${job.id}`}
                key={job.id}
                className="list-group-item list-group-item-action py-2"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">{job.title}</h6>
                  <small className="text-muted">
                    Posted: {Utils.formatDate(job.created_at)}
                  </small>
                </div>
                <div className="mt-1">
                  <small className="text-muted">
                    Deadline: {new Date(job.deadline).toLocaleDateString()} |{" "}
                    {job.employment_status} | {job.workplace}
                  </small>
                </div>
                {job.show_salary === "Yes" && (
                  <div className="mt-1">
                    <small className="text-muted">
                      Salary: UGX{" "}
                      {new Intl.NumberFormat().format(job.minimum_salary)} – UGX{" "}
                      {new Intl.NumberFormat().format(job.maximum_salary)}
                    </small>
                  </div>
                )}
                <div className="mt-1">
                  <small className="text-muted">
                    Location: {job.district_text || job.address}
                  </small>
                </div>
                {job.experience_period && (
                  <div className="mt-1">
                    <small className="text-muted">
                      Experience: {job.experience_period}
                    </small>
                  </div>
                )}
                {job.minimum_academic_qualification && (
                  <div className="mt-1">
                    <small className="text-muted">
                      Qualification: {job.minimum_academic_qualification}
                    </small>
                  </div>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p>No jobs posted by this employer.</p>
        )}
      </div>
    </motion.div>
  );
};

export default EmployerDetailsPage;
