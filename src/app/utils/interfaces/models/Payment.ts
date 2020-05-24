import {User} from './User';
import {MarketplaceJob} from './MarketplaceJob';

export interface Payment {
  id: number;
  marketplace_id?: number;
  user_id?: number;
  amount?: number;
  stripe_token?: number;
  refunded?: number;
  created_at?: string;
  updated_at?: string;
  user: User;
  marketplaceJob: MarketplaceJob;
}
