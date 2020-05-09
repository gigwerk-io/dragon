export interface Organization {
  id: number;
  organization: {
    id: number;
    unique_id: any;
    name: string;
    phone: any;
    email: string;
    organizer_id: number;
    type_id: number;
    total_goal: number;
    individual_goal: number;
    purpose: string;
    source: string;
    customer_range: any;
    stripe_connect_id: string;
    logo: string;
    created_at: any;
    updated_at: any;
    deleted_at: any;
  };
}
