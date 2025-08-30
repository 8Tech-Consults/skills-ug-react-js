import React, { useState, useEffect } from 'react';
import { ServiceModel, ServiceFilterModel, ServiceCategoryModel } from '../../models/service/ServiceModel';
import { serviceApiService } from '../../services/service/ServiceApiService';
import ServiceCard from './components/ServiceCard';
import { toast } from 'react-toastify';

const ServicesPage: React.FC = () => {
  // State management
  const [services, setServices] = useState<ServiceModel[]>([]);
  const [categories, setCategories] = useState<ServiceCategoryModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<ServiceFilterModel>({
    page: 1,
    limit: 12,
    sort_by: 'latest'
  });
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0
  });

  // Load services
  const loadServices = async (newFilters?: ServiceFilterModel) => {
    setLoading(true);
    try {
      const filtersToUse = newFilters || filters;
      const response = await serviceApiService.getServices(filtersToUse);
      
      if (response.success && response.data) {
        setServices(response.data.services);
        setPagination(response.data.pagination);
      } else {
        toast.error(response.error || 'Failed to load services');
        setServices([]);
      }
    } catch (error) {
      toast.error('Failed to load services');
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  // Load categories
  const loadCategories = async () => {
    try {
      const response = await serviceApiService.getServiceCategories();
      if (response.success && response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  // Initial load
  useEffect(() => {
    loadServices();
    loadCategories();
  }, []);

  // Handle filter changes
  const handleFilterChange = (newFilters: Partial<ServiceFilterModel>) => {
    const updatedFilters = { ...filters, ...newFilters, page: 1 };
    setFilters(updatedFilters);
    loadServices(updatedFilters);
  };

  // Handle search
  const handleSearch = (searchQuery: string) => {
    handleFilterChange({ search: searchQuery });
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    const updatedFilters = { ...filters, page };
    setFilters(updatedFilters);
    loadServices(updatedFilters);
  };

  // Handle bookmark toggle
  const handleBookmarkToggle = async (serviceId: number) => {
    try {
      const response = await serviceApiService.toggleBookmark(serviceId);
      if (response.success) {
        toast.success('Bookmark updated successfully');
      } else {
        toast.error(response.error || 'Failed to update bookmark');
      }
    } catch (error) {
      toast.error('Failed to update bookmark');
    }
  };

  // Handle view service details
  const handleViewDetails = (serviceId: number) => {
    // Navigate to service details page - implement with React Router
    window.location.href = `/services/${serviceId}`;
  };

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-0 text-gray-800">Service Marketplace</h1>
          <p className="text-muted">Discover professional services from skilled providers</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row g-3">
                {/* Search */}
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="form-label small fw-bold text-dark">Search Services</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title, description, or tags..."
                        value={filters.search || ''}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-label small fw-bold text-dark">Category</label>
                    <select
                      className="form-select"
                      value={filters.category_id || ''}
                      onChange={(e) => handleFilterChange({ 
                        category_id: e.target.value ? parseInt(e.target.value) : undefined 
                      })}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort Filter */}
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="form-label small fw-bold text-dark">Sort By</label>
                    <select
                      className="form-select"
                      value={filters.sort_by || 'latest'}
                      onChange={(e) => handleFilterChange({ 
                        sort_by: e.target.value as any 
                      })}
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                    </select>
                  </div>
                </div>

                {/* Price Range */}
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-label small fw-bold text-dark">Price Range (UGX)</label>
                    <div className="d-flex gap-2">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Min"
                        value={filters.min_price || ''}
                        onChange={(e) => handleFilterChange({ 
                          min_price: e.target.value ? parseInt(e.target.value) : undefined 
                        })}
                      />
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Max"
                        value={filters.max_price || ''}
                        onChange={(e) => handleFilterChange({ 
                          max_price: e.target.value ? parseInt(e.target.value) : undefined 
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 text-muted">
              {loading ? 'Loading...' : `${pagination.total} services found`}
            </h6>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleFilterChange({ is_featured: true })}
                disabled={loading}
              >
                <i className="bi bi-star me-1"></i>
                Featured Only
              </button>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={() => {
                  setFilters({ page: 1, limit: 12, sort_by: 'latest' });
                  loadServices({ page: 1, limit: 12, sort_by: 'latest' });
                }}
                disabled={loading}
              >
                <i className="bi bi-arrow-clockwise me-1"></i>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      {loading ? (
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted mt-3">Loading services...</p>
          </div>
        </div>
      ) : services.length === 0 ? (
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="mb-4">
              <i className="bi bi-search display-1 text-muted"></i>
            </div>
            <h5 className="text-muted">No services found</h5>
            <p className="text-muted">Try adjusting your search criteria</p>
          </div>
        </div>
      ) : (
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <ServiceCard
                service={service}
                onBookmarkClick={handleBookmarkToggle}
                onViewDetails={handleViewDetails}
                className="h-100"
              />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.last_page > 1 && (
        <div className="row mt-4">
          <div className="col-12">
            <nav aria-label="Services pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${pagination.current_page <= 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pagination.current_page - 1)}
                    disabled={pagination.current_page <= 1}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>

                {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <li key={page} className={`page-item ${pagination.current_page === page ? 'active' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}

                <li className={`page-item ${pagination.current_page >= pagination.last_page ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pagination.current_page + 1)}
                    disabled={pagination.current_page >= pagination.last_page}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
