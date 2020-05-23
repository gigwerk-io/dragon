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
  business_profile?: object;
  business_location?: object;
}
