export type BusinessRole = 'owner' | 'manager' | 'cashier' | 'inventory_staff';

export interface BusinessSummary {
  id: string;
  name: string;
  slug: string;
  currency: string;
}

export interface LocationSummary {
  id: string;
  businessId: string;
  name: string;
}
