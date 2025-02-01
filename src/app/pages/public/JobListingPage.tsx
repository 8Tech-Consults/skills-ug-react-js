// src/app/pages/public/JobListingPage.tsx

import React, { useState, useEffect } from "react";
import { JobModel, PaginatedResponse } from "../../models/JobModel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Utils from "../../services/Utils";

const JobListingPage: React.FC = () => {
  // -----------------------
  // State for filters, etc.
  // -----------------------
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [industry, setIndustry] = useState("");
  const [district, setDistrict] = useState("");
  const [deadline, setDeadline] = useState("");
  const [company, setCompany] = useState("");
  const [salaryScale, setSalaryScale] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);

  // -----------
  // Dummy data
  // -----------
  const dummyCategories = [
    "Accounting",
    "IT & Software",
    "Marketing",
    "Engineering",
  ];
  const dummyIndustries = [
    "Manufacturing",
    "Banking",
    "Telecom",
    "NGO/Development",
  ];
  const dummyDistricts = [
    "Kampala",
    "Jinja",
    "Gulu",
    "Mbarara",
    "Lira",
    "Mbale",
  ];
  const dummyCompanies = [
    "Company A",
    "Company B",
    "Company C",
    "Skills.ug",
    "Organization X",
  ];
  const dummySalaryRanges = [
    { label: "Below 1,000,000 UGX", value: "1000000" },
    { label: "1,000,000 - 2,000,000 UGX", value: "2000000" },
    { label: "2,000,000 - 5,000,000 UGX", value: "5000000" },
    { label: "Above 5,000,000 UGX", value: "99999999" },
  ];
  const dummySortOptions = ["Newest", "Oldest", "High Salary", "Low Salary"];

  // Fetch jobs
  const fetchJobsList = async (pageNumber: number) => {
    setLoading(true);
    setError("");
    try {
      const params: Record<string, string | number> = {};
      if (keyword) params.search = keyword;
      if (category) params.category = category;
      if (industry) params.industry = industry;
      if (district) params.district = district;
      if (deadline) params.deadline = deadline;
      if (company) params.company = company;
      if (salaryScale) params.salary = salaryScale;
      if (sortBy) params.sort = sortBy; // e.g. "Newest", "Oldest", etc.

      const response: PaginatedResponse<JobModel> = await JobModel.fetchJobs(
        pageNumber,
        params
      );
      setJobs(response.data);
      setCurrentPage(response.current_page);
      setLastPage(response.last_page);
      setTotalJobs(response.total);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initial & page changes
  useEffect(() => {
    fetchJobsList(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Handle filter changes
  const handleFilterChange = () => {
    setCurrentPage(1);
    fetchJobsList(1);
  };

  // Pagination
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > lastPage) return;
    setCurrentPage(newPage);
  };

  // Reset all filters
  const clearFilters = () => {
    setKeyword("");
    setCategory("");
    setIndustry("");
    setDistrict("");
    setDeadline("");
    setCompany("");
    setSalaryScale("");
    setCurrentPage(1);
    fetchJobsList(1);
  };

  // ---------------
  // Page Rendering
  // ---------------
  return (
    <div className="container py-4 px-2 px-lg-10">
      <div className="row gx-3">
        {/* LEFT FILTER COLUMN */}
        <motion.div
          className="col-12 col-md-3 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="fw-bold mb-3 d-flex align-items-center">
              <i className="bi bi-funnel-fill me-2 text-primary"></i>Refine Your
              Search
            </h6>

            {/* Keyword */}
            <div className="mb-2">
              <label className="form-label mb-1">Keyword</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="e.g. Engineer"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="mb-2">
              <label className="form-label mb-1">Category</label>
              <select
                className="form-select form-select-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                {dummyCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry */}
            <div className="mb-2">
              <label className="form-label mb-1">Industry</label>
              <select
                className="form-select form-select-sm"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">All</option>
                {dummyIndustries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="mb-2">
              <label className="form-label mb-1">District</label>
              <select
                className="form-select form-select-sm"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">All</option>
                {dummyDistricts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            {/* Deadline */}
            <div className="mb-2">
              <label className="form-label mb-1">Deadline</label>
              <input
                type="date"
                className="form-control form-control-sm"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            {/* Company */}
            <div className="mb-2">
              <label className="form-label mb-1">Company</label>
              <select
                className="form-select form-select-sm"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">All</option>
                {dummyCompanies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Salary */}
            <div className="mb-3">
              <label className="form-label mb-1">Salary</label>
              <select
                className="form-select form-select-sm"
                value={salaryScale}
                onChange={(e) => setSalaryScale(e.target.value)}
              >
                <option value="">Any</option>
                {dummySalaryRanges.map((sr) => (
                  <option key={sr.value} value={sr.value}>
                    {sr.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-primary flex-grow-1"
                onClick={handleFilterChange}
              >
                <i className="bi bi-search me-1"></i>Apply
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={clearFilters}
              >
                Clear
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT MAIN COLUMN */}
        <div className="col-12 col-md-9">
          {/* Topbar for Quick Search + Sort */}
          <motion.div
            className="bg-white shadow-sm rounded p-3 d-flex align-items-center justify-content-between mb-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="d-flex w-100 me-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search quickly..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                className="btn btn-info text-white"
                onClick={() => {
                  setCurrentPage(1);
                  fetchJobsList(1);
                }}
              >
                <i className="bi bi-search me-1"></i>Search
              </button>
            </div>
            {/* Sort By */}
            <div className="ms-auto">
              <label className="me-2 text-muted">Sort By:</label>
              <select
                className="form-select form-select-sm d-inline-block w-auto"
                style={{ minWidth: "120px" }}
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                  fetchJobsList(1);
                }}
              >
                {dummySortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="py-4 text-center">
              <div className="spinner-border text-primary" role="status" />
              <p className="mt-2">Loading jobs...</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* No Jobs */}
          {!loading && !error && jobs.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">
                No jobs found for the selected criteria.
              </p>
            </div>
          )}

          {/* JOB LISTINGS */}
          {!loading && !error && jobs.length > 0 && (
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {jobs.map((job) => (
                <div className="col" key={job.id}>
                  <motion.div
                    className="card h-100 border-0 shadow-sm rounded-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h5 className="card-title mb-0 fw-semibold">
                            {job.title}
                          </h5>
                          {job.job_icon && (
                            <img
                              src={Utils.img(job.job_icon)}
                              alt={job.title}
                              style={{ width: "40px", height: "40px" }}
                              className="ms-3"
                            />
                          )}
                        </div>
                        {/* Location */}
                        <div className="mb-2">
                          <small className="text-muted d-block">
                            <i className="bi bi-geo-alt-fill me-1" />
                            <strong>Location:</strong>{" "}
                            {job.district_id || "N/A"}
                          </small>
                        </div>
                        {/* Deadline */}
                        <div className="mb-2">
                          <small className="text-muted d-block">
                            <i className="bi bi-alarm me-1" />
                            <strong>Deadline:</strong> {job.deadline || "N/A"}
                          </small>
                        </div>
                        {/* Salary */}
                        <div className="mb-2">
                          <small className="text-muted d-block">
                            <i className="bi bi-cash-stack me-1" />
                            <strong>Salary:</strong>{" "}
                            {job.show_salary === "Yes" ? (
                              <>
                                UGX{" "}
                                {new Intl.NumberFormat().format(
                                  job.minimum_salary
                                )}{" "}
                                –{" "}
                                {new Intl.NumberFormat().format(
                                  job.maximum_salary
                                )}
                              </>
                            ) : (
                              "Hidden"
                            )}
                          </small>
                        </div>
                        {/* Employment & Workplace */}
                        <div>
                          <small className="text-muted d-block">
                            <strong>Employment:</strong> {job.employment_status}{" "}
                            | <strong>Workplace:</strong> {job.workplace}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {!loading && !error && totalJobs > 0 && (
            <div className="d-flex justify-content-between align-items-center mt-4">
              <small className="text-muted">
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{lastPage}</strong> | Total:{" "}
                <strong>{totalJobs}</strong>
              </small>
              <div>
                <button
                  className="btn btn-outline-secondary btn-sm me-1"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                >
                  <i className="bi bi-chevron-left"></i> Prev
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= lastPage}
                >
                  Next <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
