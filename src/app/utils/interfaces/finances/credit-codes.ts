import { User } from "../user/User";
import { MarketplaceJob } from "../favr/MarketplaceJob";

export interface CreditCodes {
  id?: number;
  code?: string;
  amount?: number;
  used?: boolean;
  limit?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreditCodesResponse {
  codes?: CreditCodes[];
}

export interface CreateCodeRequest {
  id?: number;
  code?: string;
  amount?: number;
  limit?: number;
}

export interface Transfer {
  id: number;
  marketplace_id: number;
  freelancer_id: number;
  amount: number;
  stripe_token: number;
  reversed: boolean;
  created_at: any;
  updated_at: any;
  freelancer: User;
  marketplace: MarketplaceJob;
}

export interface AllTransfersResponse {
  transfers: Transfer[];
}

export interface SingleTransferResponse {
  transfer: Transfer;
}

export interface Payment {
  id: number;
  marketplace_id: number;
  customer_id: number;
  amount: number;
  stripe_token: number;
  refunded: number;
  created_at: any;
  updated_at: any;
  customer: User;
  marketplace?: MarketplaceJob;
}
