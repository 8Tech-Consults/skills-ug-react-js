import React, { useState, useEffect } from "react";
import { CvModel, PaginatedResponse } from "../../models/CvModel";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Utils from "../../services/Utils";
import { useParams, useNavigate, Link } from "react-router-dom";
import { JobSkeleton } from "./JobDetailPage";

interface CvBankPageProps {}

interface SearchFilter {
  search: string;
  experienceMin?: number;
  experienceMax?: number;
  educationLevel?: string;
  skills?: string;
}

const defaultSearchValues: SearchFilter = {
  search: "",
  experienceMin: undefined,
  experienceMax: undefined,
  educationLevel: "",
  skills: "",
};

const educationLevels = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
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

const CvBankPage: React.FC<CvBankPageProps> = () => {
  const [cvList, setCvList] = useState<CvModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(defaultSearchValues);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCv, setSelectedCv] = useState<CvModel | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCvList(currentPage, searchFilter);
  }, [currentPage, searchFilter]);

  const fetchCvList = async (page: number, filter: SearchFilter) => {
    try {
      setIsLoading(true);
      const params = {
        search: filter.search,
        experienceMin: filter.experienceMin?.toString() || "",
        experienceMax: filter.experienceMax?.toString() || "",
        educationLevel: filter.educationLevel || "",
        skills: filter.skills || "",
      };

      const result: PaginatedResponse<CvModel> = await CvModel.fetchJobs(
        page,
        params
      );
      setCvList(result.data);
      setCurrentPage(result.current_page);
      setTotalPages(result.last_page);
    } catch (error) {
      toast.error("Failed to load CV bank data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchCvList(1, searchFilter);
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

  const viewCvDetails = (cv: CvModel) => {
    setSelectedCv(cv);
    setShowModal(true);
  };

  if (isLoading) {
    return JobSkeleton();
  }

  return (
    <motion.div
      className="container py-4 px-0 px-md-12"
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="d-flex justify-content-between align-items-center mb-0">
        <ol className="breadcrumb breadcrumb-item text-muted fs-6 fw-bold mb-5 mx-0 mt-2">
          <li className="breadcrumb-item pe-3">
            <Link to="/" className="active text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item px-3 text-muted">CV Bank</li>
        </ol>
        <div className="d-flex gap-2 mb-2">
          <button
            className={`btn  btn-outline-secondary ${
              isGridView ? "active" : ""
            }`}
            onClick={() => setIsGridView(true)}
          >
            <i className="bi bi-grid-fill"></i> Grid
          </button>
          <button
            className={`btn btn-outline-secondary ${
              !isGridView ? "active" : ""
            }`}
            onClick={() => setIsGridView(false)}
          >
            <i className="bi bi-list-task"></i> Table
          </button>
        </div>
      </div>
      <div className="row g-4">
        {/* Filters Sidebar */}
        <div className="col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label className="form-label">Search by Name/Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter keywords..."
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
                  <label className="form-label">Experience Range (years)</label>
                  <div className="row g-2">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Min"
                        min="0"
                        value={searchFilter.experienceMin || ""}
                        onChange={(e) =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            experienceMin: Number(e.target.value),
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
                        value={searchFilter.experienceMax || ""}
                        onChange={(e) =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            experienceMax: Number(e.target.value),
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Education Level</label>
                  <select
                    className="form-select"
                    value={searchFilter.educationLevel}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        educationLevel: e.target.value,
                      }))
                    }
                  >
                    <option value="">All Education Levels</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., JavaScript, React, Python"
                    value={searchFilter.skills}
                    onChange={(e) =>
                      setSearchFilter((prev) => ({
                        ...prev,
                        skills: e.target.value,
                      }))
                    }
                  />
                  <div className="form-text">Separate skills with commas</div>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-funnel me-2"></i>Apply Filters
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Reset
                    Filters
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : cvList.length === 0 ? (
            <div className="alert alert-warning">
              No matching candidates found.
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={isGridView ? "grid" : "table"}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {isGridView ? (
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cvList.map((cv) => (
                      <div key={cv.id} className="col">
                        <div className="card h-100 shadow-sm">
                          <div className="card-body text-center">
                            <div className="d-flex justify-content-center mb-3">
                              {cv.avatar ? (
                                <img
                                  src={Utils.img(cv.avatar)}
                                  alt="Avatar"
                                  className="rounded-circle"
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <div
                                  className="rounded-circle"
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "#dee2e6",
                                  }}
                                />
                              )}
                            </div>
                            <h5 className="card-title mb-2">
                              {cv.name || `${cv.first_name} ${cv.last_name}`}
                            </h5>
                            <div className="text-muted small mb-3">
                              <div>{cv.email}</div>
                              <div>
                                {cv.phone_number_1 || cv.phone_number_2}
                              </div>
                            </div>
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => viewCvDetails(cv)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          <th>Avatar</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cvList.map((cv, index) => (
                          <tr key={cv.id}>
                            <td>{index + 1 + (currentPage - 1) * 10}</td>
                            <td>
                              {cv.avatar ? (
                                <img
                                  src={Utils.img(cv.avatar)}
                                  alt="Avatar"
                                  className="rounded-circle"
                                  style={{ width: "40px", height: "40px" }}
                                />
                              ) : (
                                <div
                                  className="rounded-circle"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "#dee2e6",
                                  }}
                                />
                              )}
                            </td>
                            <td>
                              {cv.name || `${cv.first_name} ${cv.last_name}`}
                            </td>
                            <td>{cv.email}</td>
                            <td>{cv.phone_number_1 || cv.phone_number_2}</td>
                            <td>
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => viewCvDetails(cv)}
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
            </AnimatePresence>
          )}

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <button className="page-link">Previous</button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        page === currentPage ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      <button className="page-link">{page}</button>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedCv && (
          <motion.div
            className="modal fade show d-block"
            tabIndex={-1}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {selectedCv.name ||
                      `${selectedCv.first_name} ${selectedCv.last_name}`}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      {selectedCv.avatar ? (
                        <img
                          src={Utils.img(selectedCv.avatar)}
                          alt="Avatar"
                          className="img-fluid rounded-circle mb-3"
                          style={{ width: "150px", height: "150px" }}
                        />
                      ) : (
                        <div
                          className="rounded-circle bg-secondary mb-3"
                          style={{
                            width: "150px",
                            height: "150px",
                            margin: "0 auto",
                          }}
                        />
                      )}
                      <h5>Contact Information</h5>
                      <ul className="list-unstyled">
                        <li>
                          <strong>Email:</strong> {selectedCv.email}
                        </li>
                        <li>
                          <strong>Phone:</strong>{" "}
                          {selectedCv.phone_number_1 ||
                            selectedCv.phone_number_2}
                        </li>
                        <li>
                          <strong>Location:</strong>{" "}
                          {selectedCv.current_address}
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <h5>Professional Details</h5>
                      <div className="mb-4">
                        <h6>Objective</h6>
                        <p>{selectedCv.objective || "Not specified"}</p>
                      </div>
                      <div className="mb-4">
                        <h6>Career Summary</h6>
                        <p>{selectedCv.career_summary || "Not specified"}</p>
                      </div>
                      <div className="mb-4">
                        <h6>Special Qualifications</h6>
                        <p>
                          {selectedCv.special_qualification || "None provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to={`/cv-bank/${selectedCv.id}`}
                    className="btn btn-primary"
                  >
                    View Complete Cv
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CvBankPage;
