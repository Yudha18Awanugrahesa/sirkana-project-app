import { describe, expect, it } from 'vitest';
import { canSellStock, formatCurrency, getStockStatus } from './format';

describe('formatCurrency', () => {
  it('formats IDR without fractional digits', () => {
    expect(formatCurrency(120000)).toContain('120.000');
  });
});

describe('getStockStatus', () => {
  it('returns out for zero or negative stock', () => {
    expect(getStockStatus(0, 5)).toBe('out');
    expect(getStockStatus(-1, 5)).toBe('out');
  });
  it('returns low at or below the minimum', () => {
    expect(getStockStatus(5, 5)).toBe('low');
  });
  it('returns healthy above the minimum', () => {
    expect(getStockStatus(6, 5)).toBe('healthy');
  });
});

describe('canSellStock', () => {
  it('rejects selling more than available', () => {
    expect(canSellStock(2, 3)).toBe(false);
  });
  it('accepts a valid quantity within available stock', () => {
    expect(canSellStock(5, 3)).toBe(true);
  });
});
