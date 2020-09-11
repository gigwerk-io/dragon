export interface PaymentMethod {
  id: string;
  livemode: boolean;
  metadata: object[];
  object: string;
  type: string;
  created: number;
  card: object;
  billing_details: object;
}
