export type Amount = number | string;

export const toNumber = (amount: Amount): number | null => {
  const value = Number(amount);
  return Number.isFinite(value) ? value : null;
};
