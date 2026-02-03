export type CurrencyConfig = {
    locale?: string;
    currency?: string;
  };
  
  let config: Required<CurrencyConfig> = {
    locale: 'en-US',
    currency: 'USD',
  };
  
  export const setCurrencyConfig = (overrides: CurrencyConfig) => {
    config = { ...config, ...overrides };
  };
  
export const getCurrencyConfig = () => {
  if (config.locale) {
    return config;
  }

  const locale =
    typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().locale
      : 'en-US';

  return {
    locale,
    currency: config.currency,
  };
};

  