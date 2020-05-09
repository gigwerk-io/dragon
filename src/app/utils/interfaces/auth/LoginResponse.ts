import {User} from '../user/User';

export interface LoginResponse {
  id?: number;
  profile?: {
    created_at?: number;
    description?: string;
    image?: string;
    updated_at?: number;
    user?: User;
    user_id?: number
  };
  token?: string;
  response?: boolean;
}
