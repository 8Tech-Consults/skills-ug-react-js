import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { CvModel, PaginatedResponse } from "../../models/CvModel";
import Utils from "../../services/Utils";
import { http_post } from "../../services/Api"; // for the follow POST

interface EmployersPageProps {}

interface SearchFilter {
  search: string;
  industry?: string;
  employeesMin?: number;
  employeesMax?: number;
  establishedAfter?: number;
  certifications?: string;
}

const defaultSearchValues: SearchFilter = {
  search: "",
  industry: "",
  employeesMin: undefined,
  employeesMax: undefined,
  establishedAfter: undefined,
  certifications: "",
};

// Example industry array
const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Construction",
  "Transportation",
];

// Simple fade animation
const fadeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10 },
};

const EmployersPage: React.FC<EmployersPageProps> = () => {
  const [companies, setCompanies] = useState<CvModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(defaultSearchValues);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isGridView, setIsGridView] = useState(true);

  const navigate = useNavigate();

  // Fetch data on mount or when page/filter changes
  useEffect(() => {
    fetchCompanies(currentPage, searchFilter);
  }, [currentPage, searchFilter]);

  // Fetch Companies
  const fetchCompanies = async (page: number, filter: SearchFilter) => {
    try {
      setIsLoading(true);
      const params = {
        search: filter.search,
        industry: filter.industry || "",
        employeesMin: filter.employeesMin?.toString() || "",
        employeesMax: filter.employeesMax?.toString() || "",
        establishedAfter: filter.establishedAfter?.toString() || "",
        certifications: filter.certifications || "",
        is_company: "Yes",
      };

      const result: PaginatedResponse<CvModel> = await CvModel.fetchJobs(
        page,
        params
      );
      setCompanies(result.data);
      setCurrentPage(result.current_page);
      setTotalPages(result.last_page);
    } catch (error) {
      toast.error("Failed to load company data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search form
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchCompanies(1, searchFilter);
  };

  // Reset filters
  const handleReset = () => {
    setSearchFilter(defaultSearchValues);
    setCurrentPage(1);
  };

  // Pagination
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Navigate to company details page
  const viewCompanyDetails = async (company: CvModel) => {
    try {
      const payload = { type: "COMPANY", item_id: company.id };
      await http_post("/view-record-create", payload);
    } catch (error: any) {
      console.error("Error recording view:", error);
    }
    navigate(`/employers/${company.id}`);
  };

  if (isLoading) {
    return (
      <div className="container py-4">
        <Skeleton count={10} />
      </div>
    );
  }

  return (
    <motion.div
      className="container py-4 px-2 px-md-4"
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row g-4">
        {/* --- Filters Sidebar --- */}
        <div className="col-lg-3">
          <motion.div className="card border-0 shadow-sm h-100" layout>
            <div className="card-body">
              <h4 className="mb-4">Search Employers</h4>
              <form onSubmit={handleSearch}>
                {/* Search Input */}
                <div className="mb-3">
                  <label className="form-label">Company Search</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name or industry..."
                    value={searchFilter.search}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* Industry */}
                <div className="mb-3">
                  <label className="form-label">Industry</label>
                  <select
                    className="form-select"
                    value={searchFilter.industry}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        industry: e.target.value,
                      }))
                    }
                  >
                    <option value="">All Industries</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Employees Range */}
                <div className="mb-3">
                  <label className="form-label">Company Size</label>
                  <div className="row g-2">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Min"
                        min="0"
                        value={searchFilter.employeesMin || ""}
                        onChange={(e) =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            employeesMin: Number(e.target.value),
                          }))
                        }
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Max"
                        min="0"
                        value={searchFilter.employeesMax || ""}
                        onChange={(e) =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            employeesMax: Number(e.target.value),
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Established After */}
                <div className="mb-3">
                  <label className="form-label">Established After</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Year"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={searchFilter.establishedAfter || ""}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        establishedAfter: Number(e.target.value),
                      }))
                    }
                  />
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <label className="form-label">Certifications</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. ISO, OSHA..."
                    value={searchFilter.certifications}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        certifications: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- Main Content --- */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Employers</h3>
            <div className="d-flex gap-2">
              <button
                className={`btn btn-sm ${
                  isGridView ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setIsGridView(true)}
              >
                <i className="bi bi-grid"></i>
              </button>
              <button
                className={`btn btn-sm ${
                  !isGridView ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setIsGridView(false)}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>

          {companies.length === 0 ? (
            <div className="alert alert-secondary">
              No companies found. Try adjusting your filters.
            </div>
          ) : (
            <motion.div
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {isGridView ? (
                // Grid View
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                  {companies.map((company) => (
                    <div key={company.id} className="col">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={Utils.img(company.company_logo)}
                              alt="Company"
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                              className="me-3 border"
                            />
                            <div>
                              <h5 className="mb-0">{company.company_name}</h5>
                              <p className="small mb-0 mt-1 text-muted">
                                <strong>Country:</strong>{" "}
                                {company.company_country}
                              </p>
                              <p className="small mb-2 text-muted">
                                <strong>Employees:</strong>{" "}
                                {company.company_employees_range}
                              </p>
                            </div>
                          </div>

                          <p className="text-truncate-3 small text-muted">
                            {company.company_description}
                          </p>
                        </div>
                        <div className="card-footer bg-white border-0">
                          <button
                            className="btn btn-sm border border-1 border-primary btn-outline-primary w-100"
                            onClick={() => viewCompanyDetails(company)}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List View
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Company</th>
                        <th>Industry</th>
                        <th>Employees</th>
                        <th>Country</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companies.map((company) => (
                        <tr key={company.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={Utils.img(
                                  company.company_logo || "default-company.png"
                                )}
                                alt="Company"
                                style={{
                                  width: "45px",
                                  height: "45px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                                className="me-2 border"
                              />
                              <div>
                                <div className="fw-semibold">
                                  {company.company_name}
                                </div>
                                <small className="text-muted">
                                  {company.company_sub_category_id}
                                </small>
                              </div>
                            </div>
                          </td>
                          <td>{company.company_main_category_id}</td>
                          <td>{company.company_employees_range}</td>
                          <td>{company.company_country}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => viewCompanyDetails(company)}
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    « Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pg) => (
                    <li
                      key={pg}
                      className={`page-item ${
                        currentPage === pg ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pg)}
                      >
                        {pg}
                      </button>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next »
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EmployersPage;
