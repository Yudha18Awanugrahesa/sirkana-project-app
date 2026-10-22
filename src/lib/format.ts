export function formatCurrency(amount: number, currency = 'IDR', locale = 'id-ID'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export type StockStatus = 'out' | 'low' | 'healthy';

export function getStockStatus(quantity: number, minimum: number): StockStatus {
  if (quantity <= 0) return 'out';
  if (quantity <= minimum) return 'low';
  return 'healthy';
}

export function canSellStock(available: number, requested: number): boolean {
  return Number.isFinite(available) && Number.isFinite(requested) && requested > 0 && available >= requested;
}
