export interface User {
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
}

export interface Profile {
  user_id?: number;
  image?: string;
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
