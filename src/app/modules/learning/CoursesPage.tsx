import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './components/CourseCard';
import CourseApiService from '../../services/course/CourseApiService';
import { CourseModel, CourseCategoryModel } from '../../models/course/CourseModel';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [categories, setCategories] = useState<CourseCategoryModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    loadCourses();
    loadCategories();
  }, [currentPage, selectedCategory, selectedDifficulty, searchQuery, priceRange]);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        per_page: 12,
        ...(selectedCategory && { category_id: selectedCategory }),
        ...(selectedDifficulty && { difficulty_level: selectedDifficulty }),
        ...(searchQuery && { search: searchQuery }),
        ...(priceRange && { price_range: priceRange }),
      };

      const response = await CourseApiService.getCourses(params);
      setCourses(response.data);
      setTotalPages(response.last_page);
      setTotalCourses(response.total);
      setError(null);
    } catch (err) {
      setError('Failed to load courses. Please try again.');
      console.error('Error loading courses:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const categoriesData = await CourseApiService.getCourseCategories();
      setCategories(categoriesData);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    loadCourses();
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedDifficulty('');
    setSearchQuery('');
    setPriceRange('');
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage > 1) {
      pages.push(
        <li key="prev" className="page-item">
          <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <li key="next" className="page-item">
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </li>
      );
    }

    return pages;
  };

  if (loading && courses.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center">
          <div className="spinner-border" style={{ color: '#114786' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4">
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <div>
          <h1 className="h3 mb-0" style={{ color: '#114786' }}>
            <i className="bi bi-mortarboard me-2"></i>
            Eight Learning Courses
          </h1>
          <p className="text-muted mb-0">
            Discover {totalCourses} professional courses to advance your career
          </p>
        </div>
        <div>
          <Link 
            to="/learning/dashboard" 
            className="btn btn-outline-primary me-2"
          >
            <i className="bi bi-speedometer2 me-1"></i>
            My Dashboard
          </Link>
          <Link 
            to="/learning/my-courses" 
            className="btn"
            style={{ backgroundColor: '#114786', borderColor: '#114786', color: 'white' }}
          >
            <i className="bi bi-book me-1"></i>
            My Courses
          </Link>
        </div>
      </div>

      {/* Filters Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSearch}>
                <div className="row g-3 align-items-end">
                  {/* Search Input */}
                  <div className="col-md-4">
                    <label className="form-label">Search Courses</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter course title or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="btn btn-outline-secondary" type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="col-md-2">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      value={selectedCategory || ''}
                      onChange={(e) => setSelectedCategory(e.target.value ? parseInt(e.target.value) : null)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.course_count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div className="col-md-2">
                    <label className="form-label">Difficulty</label>
                    <select
                      className="form-select"
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                      <option value="">All Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div className="col-md-2">
                    <label className="form-label">Price Range</label>
                    <select
                      className="form-select"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">All Prices</option>
                      <option value="free">Free</option>
                      <option value="0-100000">Under 100,000 UGX</option>
                      <option value="100000-500000">100,000 - 500,000 UGX</option>
                      <option value="500000+">Above 500,000 UGX</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary w-100"
                      onClick={clearFilters}
                    >
                      <i className="bi bi-x-circle me-1"></i>
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </div>
      )}

      {/* Courses Grid */}
      <div className="row g-4 mb-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="col-xl-3 col-lg-4 col-md-6">
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          !loading && (
            <div className="col-12">
              <div className="text-center py-5">
                <i className="bi bi-search display-1 text-muted mb-3"></i>
                <h4 className="text-muted">No courses found</h4>
                <p className="text-muted">Try adjusting your search criteria or browse all courses</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  View All Courses
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Loading More */}
      {loading && courses.length > 0 && (
        <div className="text-center py-3">
          <div className="spinner-border spinner-border-sm me-2" style={{ color: '#114786' }}></div>
          Loading more courses...
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Courses pagination">
            <ul className="pagination">
              {renderPagination()}
            </ul>
          </nav>
        </div>
      )}

      {/* Results Info */}
      {courses.length > 0 && (
        <div className="text-center text-muted mt-3 mb-4">
          Showing {((currentPage - 1) * 12) + 1}-{Math.min(currentPage * 12, totalCourses)} of {totalCourses} courses
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
