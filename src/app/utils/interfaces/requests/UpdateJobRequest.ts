export interface UpdateJobRequest {
  description?: string;
  complete_before?: string;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
  client_name?: string;
  price?: string;
  category_id?: number;
  intensity_id?: number;
}