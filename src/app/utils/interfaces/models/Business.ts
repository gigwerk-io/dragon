import {BusinessProfile} from './BusinessProfile';

export interface Business {
  id?: number;
  owner_id?: number;
  unique_id?: string;
  name?: string;
  subdomain_prefix?: string;
  stripe_connect_id?: string;
  created_at?: string;
  updated_at?: string;
  pivot?: object;
  business_profile?: BusinessProfile;
  business_location?: object;
}
