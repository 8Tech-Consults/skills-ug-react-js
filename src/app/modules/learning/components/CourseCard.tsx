import React from 'react';
import { Link } from 'react-router-dom';
import { CourseModel } from '../../../models/course/CourseModel';

interface CourseCardProps {
  course: CourseModel;
  showProgress?: boolean;
  progress?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, showProgress = false, progress = 0 }) => {
  // Format price with currency
  const formatPrice = (price: string, currency: string) => {
    if (parseFloat(price) === 0) {
      return 'Free';
    }
    return `${currency} ${new Intl.NumberFormat().format(parseFloat(price))}`;
  };

  // Format duration
  const formatDuration = (hours: number) => {
    if (hours < 1) {
      return `${Math.round(hours * 60)} mins`;
    }
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  };

  // Get difficulty level color
  const getDifficultyColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'primary';
    }
  };

  // Generate star rating display
  const renderStars = (rating: number, count: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-muted"></i>);
      }
    }

    return (
      <div className="d-flex align-items-center">
        <div className="me-1">{stars}</div>
        <small className="text-muted">
          {rating.toFixed(1)} ({count} {count === 1 ? 'review' : 'reviews'})
        </small>
      </div>
    );
  };

  return (
    <div className="card h-100 shadow-sm course-card">
      {/* Course Image */}
      <div className="position-relative">
        <img
          src={course.cover_image ? `http://127.0.0.1:8000/${course.cover_image}` : '/media/stock/600x400/img-1.jpg'}
          alt={course.title}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/media/stock/600x400/img-1.jpg';
          }}
        />
        
        {/* Course Badge */}
        {course.is_featured && (
          <div className="position-absolute top-0 start-0 m-2">
            <span className="badge bg-warning">Featured</span>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge" style={{ backgroundColor: '#114786', color: 'white' }}>
            {formatPrice(course.price, course.currency)}
          </span>
        </div>

        {/* Progress Bar (if showing progress) */}
        {showProgress && (
          <div className="position-absolute bottom-0 start-0 end-0 p-2">
            <div className="progress" style={{ height: '4px' }}>
              <div 
                className="progress-bar" 
                style={{ backgroundColor: '#F33D02', width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="card-body d-flex flex-column">
        {/* Category */}
        {course.category && (
          <div className="mb-2">
            <span className="badge bg-light text-dark">
              <i className={`${course.category.icon || 'bi bi-book'} me-1`}></i>
              {course.category.name}
            </span>
          </div>
        )}

        {/* Course Title */}
        <h6 className="card-title mb-2 fw-bold" style={{ color: '#114786' }}>
          <Link 
            to={`/learning/courses/${course.id}`} 
            className="text-decoration-none" 
            style={{ color: 'inherit' }}
          >
            {course.title}
          </Link>
        </h6>

        {/* Course Description */}
        <p className="card-text text-muted small mb-3" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {course.description}
        </p>

        {/* Course Meta Information */}
        <div className="mb-3">
          {/* Duration and Difficulty */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted d-flex align-items-center">
              <i className="bi bi-clock me-1"></i>
              {formatDuration(course.duration_hours)}
            </small>
            <span className={`badge bg-${getDifficultyColor(course.difficulty_level)}`}>
              {course.difficulty_level || 'Intermediate'}
            </span>
          </div>

          {/* Instructor */}
          <div className="d-flex align-items-center mb-2">
            <div className="me-2">
              <img
                src={course.instructor_avatar ? `http://127.0.0.1:8000/${course.instructor_avatar}` : '/media/avatars/300-1.jpg'}
                alt={course.instructor_name}
                className="rounded-circle"
                style={{ width: '24px', height: '24px', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/media/avatars/300-1.jpg';
                }}
              />
            </div>
            <small className="text-muted">{course.instructor_name}</small>
          </div>

          {/* Language and Enrollment */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted">
              <i className="bi bi-globe me-1"></i>
              {course.language}
            </small>
            <small className="text-muted">
              <i className="bi bi-people me-1"></i>
              {course.enrollment_count} enrolled
            </small>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-3">
          {renderStars(course.rating, course.rating_count)}
        </div>

        {/* Progress (if applicable) */}
        {showProgress && (
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <small className="text-muted">Progress</small>
              <small className="fw-bold">{progress}%</small>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          <Link 
            to={`/learning/courses/${course.id}`}
            className="btn w-100"
            style={{ backgroundColor: '#114786', borderColor: '#114786', color: 'white' }}
          >
            {showProgress ? 'Continue Learning' : 'View Course'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
