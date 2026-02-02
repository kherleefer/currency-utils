// src/format.ts
import { toNumber, Amount } from './utils';
import { getCurrencyConfig } from './config';

export const formatCurrency = (amount: Amount) => {
  const value = toNumber(amount);
  const { locale, currency } = getCurrencyConfig();

  if (value === null) return `${currency} 0.00`;

  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  });
};

export const formatCompactCurrency = (amount: Amount) => {
  const value = toNumber(amount);
  const { locale, currency } = getCurrencyConfig();

  if (value === null) return `${currency} 0`;

  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    maximumFractionDigits: 2,
  });
};

export const formatCompact = (amount: Amount) => {
  const value = toNumber(amount);
  const { locale } = getCurrencyConfig();

  if (value === null) return '0';

  return value.toLocaleString(locale, {
    notation: 'compact',
    maximumFractionDigits: 2,
  });
};

/**
 * Explicit non-compact number formatter
 * (this is what you were implicitly using before)
 */
export const formatNumber = (amount: Amount) => {
  const value = toNumber(amount);
  const { locale } = getCurrencyConfig();

  if (value === null) return '0';

  return value.toLocaleString(locale);
};

export const formatPercent = (amount: Amount, fractionDigits = 2) => {
  const value = toNumber(amount);
  const { locale } = getCurrencyConfig();

  if (value === null) return '0%';

  return value.toLocaleString(locale, {
    style: 'percent',
    maximumFractionDigits: fractionDigits,
  });
};
