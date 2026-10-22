export interface Product {
  id: string;
  businessId: string;
  sku: string;
  name: string;
  categoryId: string | null;
  unit: string;
  costPrice: number;
  sellingPrice: number;
  minimumStock: number;
  isActive: boolean;
}

export interface InventoryBalance {
  businessId: string;
  locationId: string;
  productId: string;
  quantity: number;
}

export type InventoryMovementType =
  | 'opening'
  | 'purchase_receipt'
  | 'sale'
  | 'sale_return'
  | 'purchase_return'
  | 'adjustment'
  | 'transfer_in'
  | 'transfer_out';
