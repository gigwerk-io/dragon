import {PusherNotification} from './PusherNotification';

export interface Notification {
  id: string;
  type: string;
  notifiable_type: string;
  data?: PusherNotification;
  notifiable_id: number;
  read_at: string;
  created_at: string;
  updated_at: string;
}
