export interface BusinessIntegration {
  id: number;
  business_id: number;
  facebook_pixel_id?: string;
  google_analytics_id?: string;
  cloudfront_id?: string;
  s3_bucket_id?: string;
  google_access_token?: string;
  google_refresh_token?: string;
  google_expiration?: number;
  calendar_enabled?: boolean;
}
