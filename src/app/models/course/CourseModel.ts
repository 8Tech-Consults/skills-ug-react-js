// Course Category Model for Eight Learning System
export interface CourseCategoryModel {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  status: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  course_count: number;
}

// Course Model for Eight Learning System
export interface CourseModel {
  id: number;
  category_id: number;
  title: string;
  slug: string;
  description: string;
  detailed_description: string;
  instructor_name: string;
  instructor_bio: string;
  instructor_avatar: string;
  cover_image: string;
  preview_video?: string;
  price: string;
  currency: string;
  duration_hours: number;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  requirements: string[];
  learning_outcomes: string[];
  tags?: string[];
  status: string;
  is_featured: boolean;
  enrollment_count: number;
  rating: number;
  rating_count: number;
  created_at: string;
  updated_at: string;
  category?: CourseCategoryModel;
}

// Course Unit Model
export interface CourseUnitModel {
  id: number;
  course_id: number;
  title: string;
  description: string;
  unit_number: number;
  duration_minutes: number;
  is_preview: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  materials_count: number;
  quizzes_count: number;
}

// Course Material Model  
export interface CourseMaterialModel {
  id: number;
  unit_id: number;
  title: string;
  description: string;
  material_type: 'video' | 'document' | 'audio' | 'image' | 'url';
  file_path?: string;
  external_url?: string;
  duration_minutes?: number;
  file_size?: number;
  sort_order: number;
  is_downloadable: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

// Course Subscription Model
export interface CourseSubscriptionModel {
  id: number;
  user_id: number;
  course_id: number;
  subscription_date: string;
  payment_method: string;
  payment_status: 'pending' | 'completed' | 'failed';
  amount_paid: string;
  currency: string;
  progress_percentage: number;
  completion_date?: string;
  certificate_issued: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  course: CourseModel;
}

// Course Progress Model
export interface CourseProgressModel {
  id: number;
  user_id: number;
  course_id: number;
  unit_id?: number;
  material_id?: number;
  progress_type: 'unit_completed' | 'material_viewed' | 'quiz_completed';
  completion_percentage: number;
  time_spent_minutes: number;
  last_accessed: string;
  created_at: string;
  updated_at: string;
}

// Course Quiz Model
export interface CourseQuizModel {
  id: number;
  unit_id: number;
  title: string;
  description: string;
  quiz_type: 'multiple_choice' | 'true_false' | 'essay' | 'fill_blank';
  questions: QuizQuestionModel[];
  pass_percentage: number;
  max_attempts: number;
  time_limit_minutes?: number;
  status: string;
  created_at: string;
  updated_at: string;
}

// Quiz Question Model
export interface QuizQuestionModel {
  id: number;
  quiz_id: number;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false' | 'essay' | 'fill_blank';
  options?: string[];
  correct_answer: string;
  explanation?: string;
  points: number;
  sort_order: number;
}

// Course Review Model
export interface CourseReviewModel {
  id: number;
  user_id: number;
  course_id: number;
  rating: number;
  review_text: string;
  is_verified: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
}

// Course Certificate Model
export interface CourseCertificateModel {
  id: number;
  user_id: number;
  course_id: number;
  certificate_number: string;
  issue_date: string;
  certificate_url: string;
  verification_code: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// API Response Types
export interface CoursesApiResponse {
  code: number;
  message: string;
  data: {
    current_page: number;
    data: CourseModel[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
  };
}

export interface CourseCategoriesApiResponse {
  code: number;
  message: string;
  data: CourseCategoryModel[];
}

export interface CourseApiResponse {
  code: number;
  message: string;
  data: CourseModel;
}

export interface CourseSubscriptionsApiResponse {
  code: number;
  message: string;
  data: CourseSubscriptionModel[];
}

export interface CourseUnitsApiResponse {
  code: number;
  message: string;
  data: CourseUnitModel[];
}

export interface CourseMaterialsApiResponse {
  code: number;
  message: string;
  data: CourseMaterialModel[];
}
