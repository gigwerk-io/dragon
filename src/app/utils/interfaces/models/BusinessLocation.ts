export interface BusinessLocation {
  id: number;
  business_id?: number;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
  lat?: number;
  long?: number;
}
