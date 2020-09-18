export interface CreateJobRequest {
  description: string;
  complete_before: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  client_name: string;
  price: string;
  image_one?: string;
  image_two?: string;
  image_three?: string;
  category_id: number;
  intensity_id: number;
}