import axios, { AxiosResponse } from 'axios';
import {
  ServiceModel,
  ServiceCategoryModel,
  ServiceReviewModel,
  ServiceBookingModel,
  ServiceFilterModel,
  ServiceStatsModel,
  ServiceResponse,
  ServicesResponse,
  ServiceCategoriesResponse,
  ServiceCreateRequest,
  ServiceUpdateRequest,
  ServiceBookingRequest,
} from '../../models/service/ServiceModel';

// Base API configuration - using Laravel backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

class ServiceApiService {
  private baseURL = API_BASE_URL;
  
  // Set authorization header
  private getAuthHeaders() {
    const token = localStorage.getItem('auth_token');
    return {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  // Handle API errors
  private handleError(error: any): string {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    if (error.response?.data?.error) {
      return error.response.data.error;
    }
    if (error.message) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }

  // ===== SERVICE MANAGEMENT =====
  
  // Get all services with filtering
  async getServices(filters: ServiceFilterModel = {}): Promise<ServicesResponse> {
    try {
      const queryParams = new URLSearchParams();
      
      // Add filters to query params
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value.toString());
        }
      });
      
      const response: AxiosResponse<ServicesResponse> = await axios.get(
        `${this.baseURL}/services?${queryParams.toString()}`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Get single service by ID
  async getService(serviceId: number): Promise<ServiceResponse> {
    try {
      const response: AxiosResponse<ServiceResponse> = await axios.get(
        `${this.baseURL}/services/${serviceId}`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Create new service
  async createService(serviceData: ServiceCreateRequest): Promise<ServiceResponse> {
    try {
      // Handle file uploads using FormData
      const formData = new FormData();
      
      // Add text fields
      Object.entries(serviceData).forEach(([key, value]) => {
        if (key === 'images') return; // Handle images separately
        if (key === 'tags' && Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      
      // Add image files
      if (serviceData.images && serviceData.images.length > 0) {
        serviceData.images.forEach((file, index) => {
          formData.append(`images[${index}]`, file);
        });
      }

      const response: AxiosResponse<ServiceResponse> = await axios.post(
        `${this.baseURL}/service-create`,
        formData,
        {
          headers: {
            ...this.getAuthHeaders(),
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Update existing service
  async updateService(serviceData: ServiceUpdateRequest): Promise<ServiceResponse> {
    try {
      const formData = new FormData();
      formData.append('_method', 'PUT');
      
      Object.entries(serviceData).forEach(([key, value]) => {
        if (key === 'images') return;
        if (key === 'tags' && Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      
      if (serviceData.images && serviceData.images.length > 0) {
        serviceData.images.forEach((file, index) => {
          formData.append(`images[${index}]`, file);
        });
      }

      const response: AxiosResponse<ServiceResponse> = await axios.post(
        `${this.baseURL}/services/${serviceData.id}`,
        formData,
        {
          headers: {
            ...this.getAuthHeaders(),
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Delete service
  async deleteService(serviceId: number): Promise<ServiceResponse> {
    try {
      const response: AxiosResponse<ServiceResponse> = await axios.delete(
        `${this.baseURL}/services/${serviceId}`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // ===== SERVICE CATEGORIES =====
  
  // Get all service categories
  async getServiceCategories(): Promise<ServiceCategoriesResponse> {
    try {
      const response: AxiosResponse<ServiceCategoriesResponse> = await axios.get(
        `${this.baseURL}/service-categories`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // ===== SERVICE BOOKMARKS =====
  
  // Check if service is bookmarked
  async checkBookmark(serviceId: number): Promise<{ bookmarked: boolean }> {
    try {
      const response = await axios.get(
        `${this.baseURL}/services/${serviceId}/bookmark/check`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return { bookmarked: false };
    }
  }

  // Toggle service bookmark
  async toggleBookmark(serviceId: number): Promise<ServiceResponse> {
    try {
      const response: AxiosResponse<ServiceResponse> = await axios.post(
        `${this.baseURL}/services/${serviceId}/bookmark/toggle`,
        {},
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Get bookmarked services
  async getBookmarkedServices(): Promise<ServicesResponse> {
    try {
      const response: AxiosResponse<ServicesResponse> = await axios.get(
        `${this.baseURL}/bookmarks`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // ===== SERVICE REVIEWS =====
  
  // Get service reviews
  async getServiceReviews(serviceId: number): Promise<{ success: boolean; data?: ServiceReviewModel[]; error?: string }> {
    try {
      const response = await axios.get(
        `${this.baseURL}/services/${serviceId}/reviews`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        error: this.handleError(error),
      };
    }
  }

  // Add service review
  async addServiceReview(serviceId: number, reviewData: {
    rating: number;
    title?: string;
    comment: string;
    images?: File[];
    is_anonymous?: boolean;
  }): Promise<ServiceResponse> {
    try {
      const formData = new FormData();
      
      Object.entries(reviewData).forEach(([key, value]) => {
        if (key === 'images') return;
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      
      if (reviewData.images && reviewData.images.length > 0) {
        reviewData.images.forEach((file, index) => {
          formData.append(`images[${index}]`, file);
        });
      }

      const response: AxiosResponse<ServiceResponse> = await axios.post(
        `${this.baseURL}/services/${serviceId}/reviews`,
        formData,
        {
          headers: {
            ...this.getAuthHeaders(),
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // ===== SERVICE BOOKINGS =====
  
  // Create service booking
  async createServiceBooking(bookingData: ServiceBookingRequest): Promise<ServiceResponse> {
    try {
      const response: AxiosResponse<ServiceResponse> = await axios.post(
        `${this.baseURL}/service-bookings`,
        bookingData,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Get user's service bookings
  async getUserServiceBookings(): Promise<{ success: boolean; data?: ServiceBookingModel[]; error?: string }> {
    try {
      const response = await axios.get(
        `${this.baseURL}/my-service-bookings`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        error: this.handleError(error),
      };
    }
  }

  // Get service statistics (for providers)
  async getServiceStats(): Promise<{ success: boolean; data?: ServiceStatsModel; error?: string }> {
    try {
      const response = await axios.get(
        `${this.baseURL}/service-stats`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        error: this.handleError(error),
      };
    }
  }

  // Get featured services
  async getFeaturedServices(limit = 10): Promise<ServicesResponse> {
    try {
      const response: AxiosResponse<ServicesResponse> = await axios.get(
        `${this.baseURL}/services?is_featured=1&limit=${limit}`,
        { headers: this.getAuthHeaders() }
      );
      
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: this.handleError(error),
        error: this.handleError(error),
      };
    }
  }

  // Search services by query
  async searchServices(query: string, filters: ServiceFilterModel = {}): Promise<ServicesResponse> {
    return this.getServices({ ...filters, search: query });
  }
}

// Export singleton instance
export const serviceApiService = new ServiceApiService();
export default ServiceApiService;
