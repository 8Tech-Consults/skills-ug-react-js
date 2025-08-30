import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceModel } from '../../models/service/ServiceModel';
import { serviceApiService } from '../../services/service/ServiceApiService';
import { toast } from 'react-toastify';

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      loadServiceDetails(parseInt(id));
    }
  }, [id]);

  const loadServiceDetails = async (serviceId: number) => {
    setLoading(true);
    try {
      const response = await serviceApiService.getService(serviceId);
      if (response.success && response.data) {
        setService(response.data);
      } else {
        toast.error(response.error || 'Failed to load service details');
        navigate('/services');
      }
    } catch (error) {
      toast.error('Failed to load service details');
      navigate('/services');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number, currency: string = 'UGX') => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: currency === 'UGX' ? 'USD' : currency,
      minimumFractionDigits: 0,
    }).format(price).replace('$', 'UGX ');
  };

  const handleBookService = () => {
    if (service) {
      toast.info('Booking feature coming soon!');
      // TODO: Implement booking modal/page
    }
  };

  const handleContactProvider = () => {
    if (service?.provider) {
      toast.info('Contact feature coming soon!');
      // TODO: Implement contact/chat functionality
    }
  };

  if (loading) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted mt-3">Loading service details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 text-center py-5">
            <h5 className="text-muted">Service not found</h5>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/services')}>
              Back to Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      {/* Back Button */}
      <div className="row mb-4">
        <div className="col-12">
          <button 
            className="btn btn-light btn-sm"
            onClick={() => navigate('/services')}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Services
          </button>
        </div>
      </div>

      <div className="row">
        {/* Service Image & Gallery */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body p-0">
              <img
                src={service.cover_image ? `http://127.0.0.1:8000/storage/${service.cover_image}` : '/media/misc/service-placeholder.jpg'}
                className="card-img-top"
                alt={service.title}
                style={{
                  height: '400px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              
              {/* Service Badges */}
              <div className="position-absolute top-0 start-0 m-3">
                {service.promotional_badge && (
                  <span className="badge bg-warning mb-2 d-block">
                    {service.promotional_badge}
                  </span>
                )}
                {service.job_category && (
                  <span className="badge bg-primary">
                    {service.job_category.name}
                  </span>
                )}
              </div>

              {/* Rating */}
              {service.average_rating > 0 && (
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-dark bg-opacity-75 text-white">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    {service.average_rating.toFixed(1)} ({service.review_count} reviews)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="h3 mb-3">{service.title}</h1>
              
              <div className="mb-4">
                <p className="text-muted mb-0">{service.description}</p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <h3 className="text-primary mb-0 me-3">
                    {formatPrice(service.price, service.currency || 'UGX')}
                  </h3>
                  {service.price_description && (
                    <span className="text-muted">{service.price_description}</span>
                  )}
                </div>
              </div>

              {/* Service Info */}
              <div className="row mb-4">
                {service.delivery_time && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-clock text-primary me-2"></i>
                      <div>
                        <small className="text-muted d-block">Delivery Time</small>
                        <span>{service.delivery_time}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {service.experience_years && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-award text-primary me-2"></i>
                      <div>
                        <small className="text-muted d-block">Experience</small>
                        <span>{service.experience_years}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {service.location && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt text-primary me-2"></i>
                      <div>
                        <small className="text-muted d-block">Location</small>
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>
                )}

                {service.languages_spoken && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-translate text-primary me-2"></i>
                      <div>
                        <small className="text-muted d-block">Languages</small>
                        <span>{service.languages_spoken}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 mb-4">
                <button 
                  className="btn btn-primary flex-fill"
                  onClick={handleBookService}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Now
                </button>
                <button 
                  className="btn btn-outline-primary"
                  onClick={handleContactProvider}
                >
                  <i className="bi bi-chat-dots"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => toast.info('Bookmark feature coming soon!')}
                >
                  <i className="bi bi-bookmark"></i>
                </button>
              </div>

              {/* Provider Info */}
              {service.provider && (
                <div className="border-top pt-4">
                  <h6 className="mb-3">Service Provider</h6>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-50px me-3">
                      <img
                        src={service.provider.avatar ? `http://127.0.0.1:8000/storage/${service.provider.avatar}` : '/media/avatars/blank.png'}
                        alt={service.provider.name}
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-1">{service.provider.name}</h6>
                      <p className="text-muted small mb-0">
                        Member since {new Date(service.provider.created_at).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      {(service.details || service.client_requirements || service.process_description) && (
        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Additional Information</h5>
                
                {service.details && (
                  <div className="mb-4">
                    <h6>Service Details</h6>
                    <div style={{ whiteSpace: 'pre-line' }}>{service.details}</div>
                  </div>
                )}
                
                {service.client_requirements && (
                  <div className="mb-4">
                    <h6>Client Requirements</h6>
                    <div style={{ whiteSpace: 'pre-line' }}>{service.client_requirements}</div>
                  </div>
                )}
                
                {service.process_description && (
                  <div className="mb-4">
                    <h6>Process Description</h6>
                    <div style={{ whiteSpace: 'pre-line' }}>{service.process_description}</div>
                  </div>
                )}

                {/* Tags */}
                {service.tags && (
                  <div>
                    <h6>Tags</h6>
                    <div>
                      {service.tags.split(',').map((tag: string, index: number) => (
                        <span 
                          key={index} 
                          className="badge bg-light text-dark me-2 mb-2"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailsPage;
