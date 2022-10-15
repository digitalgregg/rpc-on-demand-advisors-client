interface Address {
    city?: any;
    country?: any;
    line1?: any;
    line2?: any;
    postal_code?: any;
    state?: any;
}

interface BillingDetails {
    address: Address;
    email?: any;
    name?: any;
    phone?: any;
}

interface Checks {
    address_line1_check?: any;
    address_postal_code_check?: any;
    cvc_check: string;
}

interface Networks {
    available: string[];
    preferred?: any;
}

interface ThreeDSecureUsage {
    supported: boolean;
}

interface Card {
    brand: string;
    checks: Checks;
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from?: any;
    last4: string;
    networks: Networks;
    three_d_secure_usage: ThreeDSecureUsage;
    wallet?: any;
}

export interface PMDTYPE {
    id: string;
    object: string;
    billing_details: BillingDetails;
    card: Card;
    created: number;
    customer: string;
    livemode: boolean;
    metadata: any;
    type: string;
}
