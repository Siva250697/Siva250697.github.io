import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlaceholderImage(name: string, size = "800x500") {
  const encoded = encodeURIComponent(name);
  return `https://placehold.co/${size}/111115/39FF14?text=${encoded}`;
}

export function formatPrice(price: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(price));
}
