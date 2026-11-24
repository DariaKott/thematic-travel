import { ru } from "@/i18n/ru";

const plural = new Intl.PluralRules("ru");
const numberFormat = new Intl.NumberFormat("ru");
const copy = ru.venueDetails;

export function venueCount(value: number, forms: Record<string, string>) {
  return `${numberFormat.format(value)} ${forms[plural.select(value)]}`;
}

export function minimumGroupLabel(value: number) {
  return `${copy.from} ${venueCount(value, copy.participants)}`;
}

export function restaurantLabel(value: number) {
  return `${copy.restaurant} ${venueCount(value, copy.guests)}`;
}

export function venueAreaLabel(value: number) {
  return `${numberFormat.format(value)} ${copy.hectares}`;
}
