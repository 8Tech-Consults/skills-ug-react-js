// Service Marketplace Models - Based on Mobile App Structure and API Response
export interface ServiceModel {
  id: number;
  title: string;
  slug?: string;
  job_category_id?: number;
  provider_id?: number;
  status: string;
  tags?: string;
  description: string;
  details?: string;
  price: number;
  price_description?: string;
  delivery_time?: string;
  delivery_time_description?: string;
  client_requirements?: string;
  process_description?: string;
  cover_image?: string;
  gallery?: string;
  intro_video_url?: string;
  provider_name?: string;
  provider_logo?: string;
  location?: string;
  languages_spoken?: string;
  experience_years?: string;
  certifications?: string;
  refund_policy?: string;
  promotional_badge?: string;
  average_rating: number;
  review_count: number;
  currency?: string;
  created_at: string;
  updated_at: string;
  
  // Relationships from API
  job_category?: ServiceCategoryModel;
  provider?: ServiceProviderModel;
}

export interface ServiceProviderModel {
  id: number;
  name: string;
  username?: string;
  email?: string;
  phone_number_1?: string;
  avatar?: string;
  company_name?: string;
  location?: string;
  is_verified?: boolean;
  created_at: string;
}

export interface ServiceCategoryModel {
  id: number;
  name: string;
  description?: string;
  type?: string;
  icon?: string;
  slug?: string;
  status?: number;
  jobs_count?: number;
  tags?: string;
  category_type?: string;
  created_at: string;
  updated_at: string;
  
  // For subcategories
  subcategories?: ServiceCategoryModel[];
}

export interface ServiceReviewModel {
  id: number;
  service_id: number;
  user_id: number;
  rating: number;
  title?: string;
  comment: string;
  images?: string[];
  is_anonymous: boolean;
  created_at: string;
  updated_at: string;
  
  // Relationships
  user?: {
    id: number;
    name: string;
    avatar?: string;
  };
}

export interface ServiceBookingModel {
  id: number;
  service_id: number;
  customer_id: number;
  provider_id: number;
  booking_date: string;
  booking_time?: string;
  duration?: number;
  total_amount: number;
  currency: string;
  location?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'rejected';
  payment_status: 'pending' | 'paid' | 'refunded' | 'failed';
  payment_method?: string;
  payment_reference?: string;
  created_at: string;
  updated_at: string;
  
  // Relationships
  service?: ServiceModel;
  customer?: ServiceProviderModel;
  provider?: ServiceProviderModel;
}

export interface ServiceFilterModel {
  search?: string;
  category_id?: number;
  subcategory_id?: number;
  location?: string;
  min_price?: number;
  max_price?: number;
  price_type?: 'fixed' | 'hourly' | 'daily' | 'negotiable';
  rating?: number;
  availability?: 'available' | 'busy' | 'unavailable';
  is_featured?: boolean;
  sort_by?: 'latest' | 'popular' | 'rating' | 'price_low' | 'price_high' | 'nearest';
  page?: number;
  limit?: number;
}

export interface ServiceStatsModel {
  total_services: number;
  active_services: number;
  total_bookings: number;
  total_revenue: number;
  average_rating: number;
  categories_count: number;
  providers_count: number;
  recent_services: ServiceModel[];
  popular_categories: ServiceCategoryModel[];
}

// API Response interfaces
export interface ServiceResponse {
  success: boolean;
  message: string;
  data?: ServiceModel;
  error?: string;
}

export interface ServicesResponse {
  success: boolean;
  message: string;
  data?: {
    services: ServiceModel[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      from: number;
      to: number;
    };
  };
  error?: string;
}

export interface ServiceCategoriesResponse {
  success: boolean;
  message: string;
  data?: ServiceCategoryModel[];
  error?: string;
}

// Form interfaces for creating/updating services
export interface ServiceCreateRequest {
  title: string;
  description: string;
  category_id: number;
  subcategory_id?: number;
  price: number;
  currency: string;
  price_type: 'fixed' | 'hourly' | 'daily' | 'negotiable';
  location: string;
  latitude?: number;
  longitude?: number;
  tags: string[];
  images?: File[];
}

export interface ServiceUpdateRequest extends Partial<ServiceCreateRequest> {
  id: number;
}

export interface ServiceBookingRequest {
  service_id: number;
  booking_date: string;
  booking_time?: string;
  duration?: number;
  location?: string;
  notes?: string;
}
