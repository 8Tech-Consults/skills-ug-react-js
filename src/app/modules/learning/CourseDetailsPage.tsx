import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseApiService from '../../services/course/CourseApiService';
import { CourseModel, CourseSubscriptionModel } from '../../models/course/CourseModel';
import { toast } from 'react-toastify';

const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<CourseModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (courseId) {
      loadCourse();
      checkSubscriptionStatus();
    }
  }, [courseId]);

  const loadCourse = async () => {
    try {
      setLoading(true);
      const courseData = await CourseApiService.getCourse(parseInt(courseId!));
      setCourse(courseData);
      setError(null);
    } catch (err) {
      setError('Failed to load course details. Please try again.');
      console.error('Error loading course:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkSubscriptionStatus = async () => {
    try {
      const subscriptions = await CourseApiService.getMyCourseSubscriptions();
      const subscription = subscriptions.find(sub => sub.course_id === parseInt(courseId!));
      setIsSubscribed(!!subscription);
    } catch (err) {
      console.error('Error checking subscription status:', err);
    }
  };

  const handleSubscribe = async () => {
    if (!courseId) return;

    try {
      setSubscribing(true);
      await CourseApiService.subscribeToCourse(parseInt(courseId));
      setIsSubscribed(true);
      toast.success('Successfully enrolled in course!');
    } catch (err: any) {
      toast.error(err.message || 'Failed to enroll in course');
      console.error('Error subscribing to course:', err);
    } finally {
      setSubscribing(false);
    }
  };

  const handleStartLearning = () => {
    navigate(`/learning/courses/${courseId}/learn`);
  };

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
      return `${Math.round(hours * 60)} minutes`;
    }
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
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
        <div className="me-2">{stars}</div>
        <span className="text-muted">
          {rating.toFixed(1)} ({count} {count === 1 ? 'review' : 'reviews'})
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center">
          <div className="spinner-border" style={{ color: '#114786' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="container-fluid px-4">
        <div className="text-center py-5">
          <i className="bi bi-exclamation-triangle display-1 text-danger mb-3"></i>
          <h4 className="text-danger">Course Not Found</h4>
          <p className="text-muted">{error || 'The course you are looking for does not exist.'}</p>
          <button className="btn btn-primary" onClick={() => navigate('/learning/courses')}>
            Browse All Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/learning/courses" className="text-decoration-none">Courses</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {course.title}
          </li>
        </ol>
      </nav>

      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Course Header */}
          <div className="card shadow-sm mb-4">
            <div className="position-relative">
              <img
                src={course.cover_image ? `http://127.0.0.1:8000/${course.cover_image}` : '/media/stock/900x400/img-1.jpg'}
                alt={course.title}
                className="card-img-top"
                style={{ height: '300px', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/media/stock/900x400/img-1.jpg';
                }}
              />
              
              {/* Play Button Overlay */}
              {course.preview_video && (
                <div className="position-absolute top-50 start-50 translate-middle">
                  <button 
                    className="btn btn-light btn-lg rounded-circle"
                    style={{ width: '80px', height: '80px' }}
                    onClick={() => window.open(course.preview_video, '_blank')}
                  >
                    <i className="bi bi-play-fill" style={{ fontSize: '2rem', color: '#114786' }}></i>
                  </button>
                </div>
              )}

              {/* Course Badges */}
              <div className="position-absolute top-0 start-0 m-3">
                {course.category && (
                  <span className="badge bg-primary me-2">
                    {course.category.name}
                  </span>
                )}
                {course.is_featured && (
                  <span className="badge bg-warning">Featured</span>
                )}
              </div>
            </div>

            <div className="card-body">
              <h1 className="h3 mb-3" style={{ color: '#114786' }}>
                {course.title}
              </h1>
              
              <p className="text-muted mb-3">{course.description}</p>

              {/* Course Meta */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  {renderStars(course.rating, course.rating_count)}
                </div>
                <div className="col-md-6 text-md-end">
                  <span className="text-muted">
                    <i className="bi bi-people me-1"></i>
                    {course.enrollment_count} students enrolled
                  </span>
                </div>
              </div>

              {/* Course Stats */}
              <div className="row g-3 text-center">
                <div className="col-6 col-md-3">
                  <div className="border-end">
                    <i className="bi bi-clock display-6 text-primary mb-2"></i>
                    <h6 className="mb-0">{formatDuration(course.duration_hours)}</h6>
                    <small className="text-muted">Duration</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="border-end">
                    <i className="bi bi-bar-chart display-6 text-success mb-2"></i>
                    <h6 className="mb-0 text-capitalize">{course.difficulty_level}</h6>
                    <small className="text-muted">Level</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="border-end">
                    <i className="bi bi-globe display-6 text-info mb-2"></i>
                    <h6 className="mb-0">{course.language}</h6>
                    <small className="text-muted">Language</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <i className="bi bi-trophy display-6 text-warning mb-2"></i>
                  <h6 className="mb-0">Certificate</h6>
                  <small className="text-muted">Included</small>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="card shadow-sm mb-4">
            <div className="card-header">
              <h5 className="mb-0">
                <i className="bi bi-info-circle me-2"></i>
                About This Course
              </h5>
            </div>
            <div className="card-body">
              <div 
                className="course-content"
                dangerouslySetInnerHTML={{ __html: course.detailed_description }}
              />
            </div>
          </div>

          {/* Learning Outcomes */}
          {course.learning_outcomes && course.learning_outcomes.length > 0 && (
            <div className="card shadow-sm mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-check-circle me-2"></i>
                  What You'll Learn
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {course.learning_outcomes.map((outcome, index) => (
                    <div key={index} className="col-md-6 mb-2">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>{outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <div className="card shadow-sm mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-list-check me-2"></i>
                  Requirements
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-arrow-right me-2 text-muted"></i>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Instructor Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-header">
              <h6 className="mb-0">
                <i className="bi bi-person-circle me-2"></i>
                Instructor
              </h6>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img
                  src={course.instructor_avatar ? `http://127.0.0.1:8000/${course.instructor_avatar}` : '/media/avatars/300-1.jpg'}
                  alt={course.instructor_name}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/media/avatars/300-1.jpg';
                  }}
                />
                <div>
                  <h6 className="mb-1">{course.instructor_name}</h6>
                  <p className="text-muted small mb-0">{course.instructor_bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enrollment Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <div className="mb-3">
                <span className="h3" style={{ color: '#F33D02' }}>
                  {formatPrice(course.price, course.currency)}
                </span>
              </div>

              {isSubscribed ? (
                <div>
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    You are enrolled in this course
                  </div>
                  <button
                    className="btn w-100 mb-2"
                    style={{ backgroundColor: '#114786', borderColor: '#114786', color: 'white' }}
                    onClick={handleStartLearning}
                  >
                    <i className="bi bi-play-circle me-2"></i>
                    Start Learning
                  </button>
                </div>
              ) : (
                <button
                  className="btn w-100 mb-2"
                  style={{ backgroundColor: '#F33D02', borderColor: '#F33D02', color: 'white' }}
                  onClick={handleSubscribe}
                  disabled={subscribing}
                >
                  {subscribing ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Enrolling...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-plus-circle me-2"></i>
                      Enroll Now
                    </>
                  )}
                </button>
              )}

              <small className="text-muted">
                30-day money-back guarantee
              </small>
            </div>
          </div>

          {/* Course Tags */}
          {course.tags && course.tags.length > 0 && (
            <div className="card shadow-sm">
              <div className="card-header">
                <h6 className="mb-0">
                  <i className="bi bi-tags me-2"></i>
                  Tags
                </h6>
              </div>
              <div className="card-body">
                {course.tags.map((tag, index) => (
                  <span key={index} className="badge bg-light text-dark me-1 mb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
