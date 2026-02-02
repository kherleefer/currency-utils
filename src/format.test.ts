// src/format.test.ts
import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  formatCompact,
  formatCompactCurrency,
  formatNumber,
  formatPercent,
} from './format';
import { setCurrencyConfig } from './config';

describe('currency utils', () => {
  it('formats currency', () => {
    setCurrencyConfig({ currency: 'USD', locale: 'en-US' });
    expect(formatCurrency(1200)).toBe('$1,200.00');
  });

  it('formats compact numbers', () => {
    expect(formatCompact(1200000)).toContain('1.2');
  });

  it('formats compact currency', () => {
    expect(formatCompactCurrency(1200)).toContain('$');
  });

  it('formats plain numbers', () => {
    expect(formatNumber(1000000)).toBe('1,000,000');
  });

  it('formats percent', () => {
    expect(formatPercent(0.25)).toBe('25%');
  });
});
