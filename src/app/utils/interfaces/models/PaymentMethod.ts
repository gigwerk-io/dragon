export interface PaymentMethod {
  id: string;
  livemode: boolean;
  metadata: object[];
  object: string;
  type: string;
  created: number;
  card: {
    last4: number;
    exp_month: number;
    exp_year: number;
  };
  billing_details: object;
  default: boolean;
}
