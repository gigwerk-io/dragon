import {Business} from './Business';

export interface Subscription {
  id: number;
  business_id: number;
  created_at: string;
  ends_at?: number;
  items: object[];
  name: string;
  quantity: number;
  stripeSubscription: object;
  stripe_id: string;
  stripe_plan?: string;
  trial_ends_at?: string;
  updated_at: string;
  owner?: Business;
}
