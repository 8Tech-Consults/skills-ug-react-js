import axios from 'axios';
import { 
  CourseModel, 
  CourseCategoryModel, 
  CourseSubscriptionModel,
  CourseUnitModel,
  CourseMaterialModel,
  CourseQuizModel,
  CourseReviewModel,
  CoursesApiResponse,
  CourseCategoriesApiResponse,
  CourseApiResponse,
  CourseSubscriptionsApiResponse,
  CourseUnitsApiResponse,
  CourseMaterialsApiResponse
} from '../../models/course/CourseModel';
import { API_URL } from '../../../Constants';

// Create axios instance with base configuration
const courseApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add auth token interceptor
courseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for consistent error handling
courseApi.interceptors.response.use(
  (response) => {
    // Check if response has the expected structure
    if (response.data && response.data.code !== undefined) {
      if (response.data.code === 1) {
        return response.data;
      } else {
        throw new Error(response.data.message || 'API request failed');
      }
    }
    return response.data;
  },
  (error) => {
    console.error('Course API Error:', error);
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || 'Network error occurred');
  }
);

export class CourseApiService {
  
  // Get all course categories
  static async getCourseCategories(): Promise<CourseCategoryModel[]> {
    try {
      const response: CourseCategoriesApiResponse = await courseApi.get('/course-categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching course categories:', error);
      throw error;
    }
  }

  // Get all courses with pagination and filtering
  static async getCourses(params?: {
    page?: number;
    per_page?: number;
    category_id?: number;
    search?: string;
    difficulty_level?: string;
    price_range?: string;
    featured?: boolean;
  }): Promise<CoursesApiResponse['data']> {
    try {
      const response: CoursesApiResponse = await courseApi.get('/courses', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  // Get single course by ID
  static async getCourse(courseId: number): Promise<CourseModel> {
    try {
      const response: CourseApiResponse = await courseApi.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course:', error);
      throw error;
    }
  }

  // Subscribe to a course
  static async subscribeToCourse(courseId: number, paymentMethod?: string): Promise<any> {
    try {
      const response = await courseApi.post('/course-subscribe', {
        course_id: courseId,
        payment_method: paymentMethod || 'free'
      });
      return response.data;
    } catch (error) {
      console.error('Error subscribing to course:', error);
      throw error;
    }
  }

  // Get user's course subscriptions
  static async getMyCourseSubscriptions(): Promise<CourseSubscriptionModel[]> {
    try {
      const response: CourseSubscriptionsApiResponse = await courseApi.get('/my-course-subscriptions');
      return response.data;
    } catch (error) {
      console.error('Error fetching course subscriptions:', error);
      throw error;
    }
  }

  // Get course units for learning
  static async getCourseUnits(courseId: number): Promise<CourseUnitModel[]> {
    try {
      const response: CourseUnitsApiResponse = await courseApi.get(`/learning/course-units/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course units:', error);
      throw error;
    }
  }

  // Get course materials for a unit
  static async getCourseMaterials(unitId: number): Promise<CourseMaterialModel[]> {
    try {
      const response: CourseMaterialsApiResponse = await courseApi.get(`/learning/course-materials/${unitId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course materials:', error);
      throw error;
    }
  }

  // Get course quizzes for a unit
  static async getCourseQuizzes(unitId: number): Promise<CourseQuizModel[]> {
    try {
      const response = await courseApi.get(`/learning/course-quizzes/${unitId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course quizzes:', error);
      throw error;
    }
  }

  // Update course progress
  static async updateProgress(data: {
    course_id: number;
    unit_id?: number;
    material_id?: number;
    progress_type: string;
    completion_percentage: number;
    time_spent_minutes: number;
  }): Promise<any> {
    try {
      const response = await courseApi.post('/learning/progress', data);
      return response.data;
    } catch (error) {
      console.error('Error updating course progress:', error);
      throw error;
    }
  }

  // Submit quiz answer
  static async submitQuizAnswer(data: {
    quiz_id: number;
    question_id: number;
    answer: string;
  }): Promise<any> {
    try {
      const response = await courseApi.post('/learning/quiz-answer', data);
      return response.data;
    } catch (error) {
      console.error('Error submitting quiz answer:', error);
      throw error;
    }
  }

  // Get course for learning (with progress)
  static async getCourseForLearning(courseId: number): Promise<CourseModel> {
    try {
      const response: CourseApiResponse = await courseApi.get(`/learning/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course for learning:', error);
      throw error;
    }
  }

  // Submit course review
  static async submitCourseReview(data: {
    course_id: number;
    rating: number;
    review_text: string;
  }): Promise<CourseReviewModel> {
    try {
      const response = await courseApi.post('/learning/course-review', data);
      return response.data;
    } catch (error) {
      console.error('Error submitting course review:', error);
      throw error;
    }
  }

  // Get course reviews
  static async getCourseReviews(courseId: number): Promise<CourseReviewModel[]> {
    try {
      const response = await courseApi.get(`/learning/course-reviews/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course reviews:', error);
      throw error;
    }
  }

  // Search courses
  static async searchCourses(query: string, filters?: {
    category_id?: number;
    difficulty_level?: string;
    price_range?: string;
  }): Promise<CourseModel[]> {
    try {
      const params = { search: query, ...filters };
      const response: CoursesApiResponse = await courseApi.get('/courses', { params });
      return response.data.data;
    } catch (error) {
      console.error('Error searching courses:', error);
      throw error;
    }
  }

  // Get featured courses
  static async getFeaturedCourses(): Promise<CourseModel[]> {
    try {
      const response: CoursesApiResponse = await courseApi.get('/courses', { params: { featured: true } });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching featured courses:', error);
      throw error;
    }
  }

  // Get courses by category
  static async getCoursesByCategory(categoryId: number): Promise<CourseModel[]> {
    try {
      const response: CoursesApiResponse = await courseApi.get('/courses', { 
        params: { category_id: categoryId } 
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching courses by category:', error);
      throw error;
    }
  }

  // Mark material as viewed
  static async markMaterialAsViewed(materialId: number): Promise<any> {
    try {
      const response = await courseApi.post('/learning/material-viewed', {
        material_id: materialId
      });
      return response.data;
    } catch (error) {
      console.error('Error marking material as viewed:', error);
      throw error;
    }
  }

  // Get learning statistics
  static async getLearningStats(): Promise<any> {
    try {
      const response = await courseApi.get('/learning/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching learning stats:', error);
      throw error;
    }
  }

  // Get course certificate
  static async getCourseCertificate(courseId: number): Promise<any> {
    try {
      const response = await courseApi.get(`/learning/certificate/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course certificate:', error);
      throw error;
    }
  }
}

export default CourseApiService;
