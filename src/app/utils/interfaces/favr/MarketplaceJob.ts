import { User } from '../user/User';

export interface MarketplaceJob {
  id?: number;
  customer_id?: number;
  freelancer_accepted?: number;
  freelancer_count?: number;
  category_id?: number;
  price?: number;
  description?: string;
  status?: string;
  intensity?: string;
  complete_before?: string;
  image_one?: string;
  image_two?: string;
  image_three?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  isoFormat?: string;
  postedFormat?: string;
  customer?: User;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: number;
  locations?: [
    {
      marketplace_id?: number;
      street_address?: string;
      city?: string;
      state?: string;
      zip?: number;
      lat?: number;
      long?: number;
    }
  ];
  category?: Category;
  proposals?: Proposal[];
}

export interface Proposal {
  marketplace_id: number;
  user_id: number;
  user: User;
  approved?: boolean | number;
  rating?: number;
  review?: string;
  arrived_at?: string;
  complete_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  id?: number;
  name?: string;
  icon_image?: string;
  active?: boolean;
}

export interface City {
  id?: number;
  city?: string;
  state?: string;
  lat?: number;
  long?: number;
  description?: string;
  image?: string;
}

export interface CategoriesResponse {
  categories?: Category[];
}

export interface CitiesResponse {
  cities?: City[];
}

export interface UpdateJobRequest {
  id?: number;
  description?: string;
  category_id?: number;
  intensity?: string;
  complete_before?: string;
  location?: Location;
}

export interface JobsResponse {
  jobs?: MarketplaceJob[];
}

export interface SingleJobResponse {
  job?: MarketplaceJob;
}

export interface Location {
  street_address?: string;
  city?: string;
  city_id?: number;
  state?: string;
  zip?: number;
}
