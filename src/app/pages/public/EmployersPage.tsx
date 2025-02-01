import React, { useState, useEffect } from "react";
import { CvModel, PaginatedResponse } from "../../models/CvModel";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Utils from "../../services/Utils";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { JobSkeleton } from "./JobDetailPage";

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

const fadeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
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
  const [selectedCompany, setSelectedCompany] = useState<CvModel | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCompanies(currentPage, searchFilter);
  }, [currentPage, searchFilter]);

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
        is_company: "true",
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchCompanies(1, searchFilter);
  };

  const handleReset = () => {
    setSearchFilter(defaultSearchValues);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const viewCompanyDetails = (company: CvModel) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  if (isLoading) {
    return JobSkeleton();
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-3">Loading job details...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="container py-4 px-0 px-md-3 px-lg-10"
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row g-4">
        {/* Advanced Filters Sidebar */}
        <div className="col-lg-3">
          <div className="card shadow-lg h-100 border-0">
            <div className="card-body">
              <h3 className="mb-4 text-primary">🔍 Find Employers</h3>
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Search Companies</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Company name or industry..."
                    value={searchFilter.search}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Industry Sector</label>
                  <select
                    className="form-select rounded-pill"
                    value={searchFilter.industry}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        industry: e.target.value,
                      }))
                    }
                  >
                    <option value="">All Industries</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Company Size</label>
                  <div className="row g-2">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-pill"
                        placeholder="Min employees"
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
                        className="form-control rounded-pill"
                        placeholder="Max employees"
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

                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Established After
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-pill"
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

                <div className="mb-4">
                  <label className="form-label fw-bold">Certifications</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="ISO, OSHA, etc."
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
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill"
                  >
                    🚀 Apply Filters
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger rounded-pill"
                    onClick={handleReset}
                  >
                    🔄 Reset Filters
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="display-6 text-dark mb-0">Featured Employers</h1>
            <div className="d-flex gap-2">
              <button
                className={`btn btn-lg ${
                  isGridView ? "btn-primary" : "btn-outline-primary"
                } rounded-pill`}
                onClick={() => setIsGridView(true)}
              >
                <i className="bi bi-grid-3x3"></i> Grid
              </button>
              <button
                className={`btn btn-lg ${
                  !isGridView ? "btn-primary" : "btn-outline-primary"
                } rounded-pill`}
                onClick={() => setIsGridView(false)}
              >
                <i className="bi bi-list-ul"></i> List
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-5">
              <div
                className="spinner-border text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : companies.length === 0 ? (
            <div className="alert alert-info rounded-3">
              <h4 className="alert-heading">No Companies Found</h4>
              <p>Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={isGridView ? "grid" : "list"}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {isGridView ? (
                  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    {companies.map((company) => (
                      <div key={company.id} className="col">
                        <div className="card h-100 shadow-lg border-0 hover-scale">
                          <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src={Utils.img(
                                  company.company_logo || "default-company.png"
                                )}
                                alt="Company logo"
                                className="rounded-circle"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <h3 className="h5 mb-0">
                                  {company.company_name}
                                </h3>
                                <div className="text-muted small">
                                  {company.company_main_category_id}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="d-flex gap-2 flex-wrap mb-3">
                              <span className="badge bg-primary rounded-pill">
                                📅 Est. {company.company_year_of_establishment}
                              </span>
                              <span className="badge bg-success rounded-pill">
                                👥 {company.company_employees_range}
                              </span>
                              <span className="badge bg-info rounded-pill">
                                📍 {company.company_country}
                              </span>
                            </div>
                            <p className="text-truncate-3">
                              {company.company_description}
                            </p>
                          </div>
                          <div className="card-footer bg-transparent">
                            <button
                              className="btn btn-outline-primary w-100 rounded-pill"
                              onClick={() => viewCompanyDetails(company)}
                            >
                              View Company Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="table-responsive rounded-3 shadow-sm">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Company</th>
                          <th>Industry</th>
                          <th>Employees</th>
                          <th>Location</th>
                          <th>Established</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((company) => (
                          <tr key={company.id} className="cursor-pointer">
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <img
                                  src={Utils.img(
                                    company.company_logo ||
                                      "default-company.png"
                                  )}
                                  alt="Company logo"
                                  className="rounded-circle"
                                  style={{ width: "45px", height: "45px" }}
                                />
                                <div>
                                  <div className="fw-bold">
                                    {company.company_name}
                                  </div>
                                  <div className="text-muted small">
                                    {company.company_sub_category_id}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{company.company_main_category_id}</td>
                            <td>{company.company_employees_range}</td>
                            <td>{company.company_country}</td>
                            <td>{company.company_year_of_establishment}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary rounded-pill"
                                onClick={() => viewCompanyDetails(company)}
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <nav className="mt-5">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link rounded-pill mx-1"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    « Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link rounded-circle mx-1"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link rounded-pill mx-1"
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

      {/* Company Detail Modal */}
      <AnimatePresence>
        {showModal && selectedCompany && (
          <motion.div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content rounded-3">
                <div className="modal-header bg-primary text-white">
                  <h2 className="modal-title">
                    {selectedCompany.company_name}
                  </h2>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-4 border-end">
                      <div className="text-center mb-4">
                        <img
                          src={Utils.img(
                            selectedCompany.company_logo ||
                              "default-company.png"
                          )}
                          alt="Company logo"
                          className="img-fluid rounded-3"
                          style={{ maxWidth: "200px" }}
                        />
                      </div>
                      <div className="mb-4">
                        <h4 className="h5">📌 Quick Facts</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <strong>Industry:</strong>{" "}
                            {selectedCompany.company_main_category_id}
                          </li>
                          <li className="mb-2">
                            <strong>Founded:</strong>{" "}
                            {selectedCompany.company_year_of_establishment}
                          </li>
                          <li className="mb-2">
                            <strong>Employees:</strong>{" "}
                            {selectedCompany.company_employees_range}
                          </li>
                          <li className="mb-2">
                            <strong>Location:</strong>{" "}
                            {selectedCompany.company_address}
                          </li>
                          <li className="mb-2">
                            <strong>Certifications:</strong>{" "}
                            {selectedCompany.company_certifications || "N/A"}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h3 className="h4 mb-3">🏢 About Us</h3>
                      <p className="lead">
                        {selectedCompany.company_description}
                      </p>

                      <div className="row g-3 mt-4">
                        <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">🌐 Online Presence</h5>
                              <div className="list-group list-group-flush">
                                {selectedCompany.company_website_url && (
                                  <a
                                    href={selectedCompany.company_website_url}
                                    className="list-group-item list-group-item-action"
                                  >
                                    <i className="bi bi-globe me-2"></i>Website
                                  </a>
                                )}
                                {selectedCompany.company_facebook_url && (
                                  <a
                                    href={selectedCompany.company_facebook_url}
                                    className="list-group-item list-group-item-action"
                                  >
                                    <i className="bi bi-facebook me-2"></i>
                                    Facebook
                                  </a>
                                )}
                                {selectedCompany.company_linkedin_url && (
                                  <a
                                    href={selectedCompany.company_linkedin_url}
                                    className="list-group-item list-group-item-action"
                                  >
                                    <i className="bi bi-linkedin me-2"></i>
                                    LinkedIn
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                📜 Business Details
                              </h5>
                              <ul className="list-unstyled">
                                <li className="mb-2">
                                  <strong>License:</strong>{" "}
                                  {selectedCompany.company_trade_license_no}
                                </li>
                                <li className="mb-2">
                                  <strong>Tax ID:</strong>{" "}
                                  {selectedCompany.company_tax_id}
                                </li>
                                <li className="mb-2">
                                  <strong>Ownership:</strong>{" "}
                                  {selectedCompany.company_ownership_type}
                                </li>
                                <li className="mb-2">
                                  <strong>Operating Hours:</strong>{" "}
                                  {selectedCompany.company_operating_hours}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-outline-secondary rounded-pill"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Link
                    to={`/companies/${selectedCompany.id}`}
                    className="btn btn-primary rounded-pill"
                  >
                    View Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EmployersPage;
