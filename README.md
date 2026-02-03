
# @glister/currency-utils

Lightweight, zero-dependency currency and number formatting utilities built on
the native `Intl` API.

- Auto locale detection  
- Configurable default currency per project  
- Tree-shakable (ESM)  
- TypeScript-first  
- Works in browser, Node.js, and Next.js (SSR-safe)

---

## Installation

```bash
npm install @glister/currency-utils
# or
pnpm add @glister/currency-utils
# or
yarn add @glister/currency-utils
````

---

## Quick Start

```ts
import {
  formatCurrency,
  formatCompact,
  formatCompactCurrency,
  formatNumber,
  formatPercent,
} from '@glister/currency-utils';

formatCurrency(1500);          // $1,500.00
formatCompact(1500000);        // 1.5M
formatCompactCurrency(1500);   // $1.5K
formatNumber(1234567);         // 1,234,567
formatPercent(0.075);          // 7.5%
```

---

## Project-level Configuration

You can configure the default currency and locale **once per project**.

```ts
import { setCurrencyConfig } from '@glister/currency-utils';

setCurrencyConfig({
  currency: 'NGN',
  locale: 'en-NG',
});
```

After this, **all formatters automatically respect the config**.

```ts
formatCurrency(1000); // ₦1,000.00
```

---

## Auto Locale Detection

If no locale is provided, the library automatically detects the user’s locale
using the `Intl` API.

* Browser → user locale
* Node.js / SSR → safe fallback

---

## API Reference

### `formatCurrency(amount)`

Formats a number as currency.

```ts
formatCurrency(1200);
// $1,200.00
```

---

### `formatCompactCurrency(amount)`

Formats a currency value using compact notation.

```ts
formatCompactCurrency(1200);
// $1.2K
```

---

### `formatCompact(amount)`

Formats a number using compact notation.

```ts
formatCompact(1500000);
// 1.5M
```

---

### `formatNumber(amount)`

Formats a number with locale separators.

```ts
formatNumber(1000000);
// 1,000,000
```

---

### `formatPercent(amount, fractionDigits?)`

Formats a number as a percentage.

```ts
formatPercent(0.25);
// 25%
```

---

## TypeScript Support

This package is written in TypeScript and ships with full type definitions.

---

## Zero Dependencies

This library has **no external dependencies** and relies entirely on the
native `Intl` API.

---

## License

MIT

````
