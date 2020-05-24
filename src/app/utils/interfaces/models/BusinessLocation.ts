export interface BusinessLocation {
  id: number;
  business_id?: number;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: number;
  lat?: number;
  long?: number;
}
