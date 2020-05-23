export interface MarketplaceLocation {
  id: number;
  marketplace_id?: number;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: number;
  lat?: number;
  long?: number;
}
