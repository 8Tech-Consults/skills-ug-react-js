import React from 'react';
import { ServiceModel } from '../../../models/service/ServiceModel';

interface ServiceCardProps {
  service: ServiceModel;
  onBookmarkClick?: (serviceId: number) => void;
  onViewDetails?: (serviceId: number) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBookmarkClick,
  onViewDetails,
  className = ''
}) => {
  const formatPrice = (price: number, currency: string = 'UGX') => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: currency === 'UGX' ? 'USD' : currency, // Using USD as fallback for UGX
      minimumFractionDigits: 0,
    }).format(price).replace('$', 'UGX ');
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmarkClick?.(service.id);
  };

  const handleViewDetails = () => {
    onViewDetails?.(service.id);
  };

  return (
    <div className={`card service-card h-100 ${className}`} onClick={handleViewDetails}>
      {/* Service Image */}
      <div className="position-relative">
        <img
          src={service.cover_image ? `http://127.0.0.1:8000/storage/${service.cover_image}` : '/media/misc/service-placeholder.jpg'}
          className="card-img-top service-image"
          alt={service.title}
          style={{
            height: '200px',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
        />
        
        {/* Bookmark Icon */}
        <button
          className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle"
          onClick={handleBookmarkClick}
          style={{ width: '35px', height: '35px' }}
        >
          <i className="bi bi-bookmark" style={{ fontSize: '14px' }}></i>
        </button>
        
        {/* Featured Badge */}
        {service.promotional_badge && (
          <span className="badge bg-warning position-absolute top-0 start-0 m-2">
            {service.promotional_badge}
          </span>
        )}
        
        {/* Rating Badge */}
        {service.average_rating > 0 && (
          <div className="position-absolute bottom-0 start-0 m-2">
            <span className="badge bg-dark bg-opacity-75 text-white">
              <i className="bi bi-star-fill text-warning me-1"></i>
              {service.average_rating.toFixed(1)} ({service.review_count})
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        {/* Category */}
        {service.job_category && (
          <div className="mb-2">
            <span className="badge bg-primary bg-opacity-10 text-primary">
              {service.job_category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h5 className="card-title mb-2 service-title" style={{ 
          fontSize: '16px', 
          fontWeight: '600',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {service.title}
        </h5>

        {/* Description */}
        <p className="card-text text-muted small mb-3" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: '1.4'
        }}>
          {service.description}
        </p>

        {/* Provider Info */}
        {service.provider && (
          <div className="d-flex align-items-center mb-3">
            <div className="symbol symbol-30px me-3">
              <img
                src={service.provider.avatar ? `http://127.0.0.1:8000/storage/${service.provider.avatar}` : '/media/avatars/blank.png'}
                alt={service.provider.name}
                className="rounded-circle"
                style={{ width: '30px', height: '30px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="fw-bold small" style={{ fontSize: '13px' }}>
                {service.provider.name}
              </div>
              {service.location && (
                <div className="text-muted" style={{ fontSize: '12px' }}>
                  <i className="bi bi-geo-alt me-1"></i>
                  {service.location}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Service Details */}
        <div className="mb-3">
          {service.delivery_time && (
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-clock me-2 text-muted"></i>
              <span className="small text-muted">
                Delivery: {service.delivery_time}
              </span>
            </div>
          )}
          
          {service.experience_years && (
            <div className="d-flex align-items-center">
              <i className="bi bi-award me-2 text-muted"></i>
              <span className="small text-muted">
                {service.experience_years} experience
              </span>
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="h6 mb-0 text-primary fw-bold">
                {formatPrice(service.price, service.currency || 'UGX')}
              </div>
              {service.price_description && (
                <small className="text-muted">{service.price_description}</small>
              )}
            </div>
            
            <button 
              className="btn btn-primary btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails();
              }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Tags */}
        {service.tags && (
          <div className="mt-3">
            {service.tags.split(',').slice(0, 3).map((tag: string, index: number) => (
              <span 
                key={index} 
                className="badge bg-light text-dark me-1 mb-1" 
                style={{ fontSize: '10px' }}
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
