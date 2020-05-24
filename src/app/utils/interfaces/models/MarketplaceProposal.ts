import {User} from './User';

export interface MarketplaceProposal {
  id: 2;
  marketplace_id: 3;
  user_id: 2;
  status_id: 2;
  rating: number;
  review: string;
  arrived_at: string;
  completed_at: string;
  created_at: string;
  updated_at: string;
  status: string;
  user: User;
  proposal_status: {
    id: number;
    name: string;
  };
}
