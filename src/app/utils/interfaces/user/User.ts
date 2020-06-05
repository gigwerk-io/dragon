import { NumberValueAccessor } from "@angular/forms";

export interface GigwerkUser {
  apn_token: string;
  created_at: string;
  deleted_at: string;
  email: string;
  email_verification_at: string;
  fcm_token: string;
  first_name: string;
  id: number;
  isActive: boolean;
  lastSeen: string;
  last_name: string;
  last_seen_at: any;
  marketplace_jobs: MarketplaceJob[];
  marketplace_proposals: MarketplaceProposal[];
  payments: Payment[];
  payouts: Payment[];
  phone: string;
  pivot: Pivot;
  profile: Profile;
  role: string;
  updated_at: string;
  username: string;
}

export interface User {
  marketplace_jobs: any;
  amount: any;
  marketplace_job: any;
  marketplace_proposals: any;
  rank?: number;
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  twilio_phone?: string;
  birthday?: string;
  city_id?: number;
  is_admin?: boolean;
  organization_id?: number;
  is_organization_admin?: boolean;
  credit_amount?: number;
  intercom_id?: string;
  has_chatkit?: boolean;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
  role?: string;
  profile?: Profile;
  earned_amount?: number;
  progress?: number;
  organization?: string;
  completed_registration?: boolean;
  freelancerRating?: number;
  isActive?: boolean;
  last_seen_at?: string;
  payouts?: any;
  pivot: {
    role_id: number
  };
}

export interface MarketplaceJob {
  business_id: number;
  category_id: number;
  complete_before: string;
  created_at: string;
  customer_id: number;
  deleted_at: string;
  description: string;
  id: number;
  image_one: string;
  image_two: string;
  image_three: string;
  intensity: string;
  intensity_id: number;
  job_intesity: {
    id: number;
    name: string;
  };
  job_status: {
    id: number;
    name: string;
  };
  price: number;
  status: string;
  status_id: number;
  updated_at: string;
  views: number;
}

export interface MarketplaceProposal {
  arrived_at: string;
  completed_at: string;
  created_at: string;
  id: number;
  marketplace_id: number;
  marketplace_job: MarketplaceJob;
  proposal_status: { id: number; name: string };
  rating: any;
  review: any;
  status: string;
  status_id: number;
  updated_at: string;
  user_id: number;
}

export interface Payment {
  amount: number;
  created_at: string;
  id: number;
  marketplace_id: number;
  marketplace_job: MarketplaceJob;
  refunded: boolean;
  stripe_token: string;
  updated_at: string;
  user_id: number;
  reversed?: boolean;
}



export interface Pivot {
  apn_token: any;
  business_id: number;
  email_notifications: boolean;
  fcm_token: any;
  push_notifications: boolean;
  role: { id: number; name: string };
  role_id: number;
  sms_notifications: boolean;
  user_id: number;
}


export interface Profile {
  user_id?: number;
  image?: string;
  id: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UsersResponse {
  users?: User[];
}

export interface SingleUserResponse {
  user?: [{
    role?: string;
    id?: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    twilio_phone?: string;
    birthday?: string;
    city_id?: number;
    is_admin?: boolean;
    organization_id?: number;
    is_organization_admin?: boolean;
    credit_amount?: number;
    intercom_id?: string;
    has_chatkit?: boolean;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
    profile?: Profile;
    transfers?: any[]; // TODO?: supply type definition
    payments?: any[];
    stripe?: {
      user_id?: 1;
      customer_id?: string;
      express_id?: number;
      card_id?: string;
      type?: string;
      last4?: number;
      exp_month?: number;
      exp_year?: number;
      created_at?: string;
      updated_at?: string;
    }
    main_marketplace?: any[];
    friend_marketplace?: any[];
    main_proposals?: any[];
    friend_proposals?: any[];
    city: any;
  }];
}

export interface UpdateUserRequest {
  id?: number;
  description?: string;
  email?: string;
  city?: number;
  credit?: number;
  role?: string;
}

export interface PendingInvitationsResponse {
  contacts: Invitation[];
}

export interface Invitation {
  id: number;
  organization_id: number;
  email: number;
  created_at: any;
  updated_at: any;
}

export interface MissingSteps {
  has_workers: boolean;
  has_stripe: boolean;
  has_customers: boolean;
  has_location: boolean;
}
