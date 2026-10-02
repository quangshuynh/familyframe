import type { Dictionary } from '../i18n/types';

export type PlanId = keyof Dictionary['pricing']['plans'];

type Price = { amount: number } | { min: number; max: number };

export type Plan = {
  id: PlanId;
  price: Price;
  /** How the feature list is introduced: "Includes" or "For". */
  featureLabel: 'includesLabel' | 'forLabel';
  /** Visually emphasized without "most popular" style claims. */
  highlight?: boolean;
};

/** Prices are in USD. Names, units and feature lists live in the locale dictionaries. */
export const plans: Plan[] = [
  { id: 'standard', price: { amount: 15 }, featureLabel: 'includesLabel' },
  { id: 'advanced', price: { min: 20, max: 30 }, featureLabel: 'forLabel' },
  { id: 'bundle', price: { amount: 100 }, featureLabel: 'includesLabel', highlight: true },
];

export function formatPrice(price: Price): string {
  return 'amount' in price ? `$${price.amount}` : `$${price.min}–$${price.max}`;
}
