import { User } from './User';

export interface Application {
  id?: number;
  user_id?: number;
  status?: { id: number, name: string };
  business_id?: number;
  status_id?: number;
  created_at?: string;
  updated_at?: string;
  user?: User;
  averageRating?: number;
}
