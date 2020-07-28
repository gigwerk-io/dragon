import { UserProfile } from './UserProfile';
import { Business } from './Business';
import { Status } from './Status';

export interface User {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  apn_token: string;
  fcm_token: string;
  email_verified_at?: string;
  last_seen_at?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  isActive?: boolean;
  profile?: UserProfile;
  payouts?: object;
  payments?: object;
  rating?: number;
  amount?: number;
  role?: string;
  marketplace_proposals?: object;
  marketplace_jobs?: object;
  pivot?: object;
  businesses?: Business[];
  status?: Status;
  proposed?: boolean;
}
