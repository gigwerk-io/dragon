import {User} from './User';
import {MarketplaceProposal} from './MarketplaceProposal';
import {MarketplaceLocation} from './MarketplaceLocation';

export interface MarketplaceJob {
  id?: number;
  business_id?: number;
  category_id?: number;
  price?: number;
  description?: string;
  status_id?: number;
  intensity_id?: number;
  complete_before?: string;
  views?: number;
  image_one?: string;
  image_two?: string;
  image_three?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  status?: string;
  intensity?: string;
  customer: User;
  location: MarketplaceLocation;
  proposals: MarketplaceProposal[];
  client_name?: string;
}
