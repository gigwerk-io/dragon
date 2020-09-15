export interface Invoice {
    account_country?: string;
    account_name?: string;
    amount_due?: number;
    amount_paid?: number;
    amount_remainding?: number;
    application_fee_amount?: any;
    attempt_count?: number;
    attempted?: boolean;
    auto_advance?: boolean;
    billing_reason?: string;
    charge?: string;
    collection_method?: string;
    created?: number;
    currency?: string;
    custom_fields?: any;
    customer?: string;
    customer_address?: any;
    customer_email?: any;
    customer_name?: string;
    customer_phone?: any;
    customer_shipping?: any;
    customer_tax_exempt?: string;
    customer_tax_ids?: any;
    default_payment_method?: any;
    default_source?: any;
    default_tax_rates?: any;
    description?: any;
    discount?: any;
    due_date?: any;
    ending_balance?: number;
    footer?: any;
    hosted_invoice_url?: string;
    id?: string;
    invoice_pdf?: string;
    lines?: InvoiceLines;
    livemode?: boolean;
    metadata?: any;
    next_payment_attempt?: any;
    number?: string;
    object?: string;
    paid?: boolean;
    payment_intent?: string;
    period_end?: number;
    period_start?: number;
    post_payment_credit_notes_amount?: number;
    pre_payment_credit_notes_amount?: number;
    receipt_number?: string;
    starting_balance?: number;
    statement_descriptor?: any;
    status?: string;
    status_transitions?: { finalized_at?: number; marked_uncollectible_at?: any; paid_at?: number; voided_at?: any; };
    subscription?: string;
    subtotal?: number;
    tax?: any;
    tax_percent?: any;
    total?: number;
    total_tax_amounts?: any;
    transfer_data?: any;
    webhooks_delivered_at?: number;
}

export interface InvoiceLines {
    id?: string;
    object?: string;
    amount?: number;
    currency?: string;
    description?: string;
    discountable?: boolean;
    livemode?: boolean;
    metadata?: any;
    data: any;
}

export interface InvoiceData {
    description: string;
}
