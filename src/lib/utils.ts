import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function experienceDuration(startDate: Date) {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  // Если текущий день месяца меньше дня начала, полный месяц еще не прошел
  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  // Нормализуем месяцы
  if (months < 0) {
    years--;
    months += 12;
  }

  const plural = (num: number, one: string, few: string, many: string) => {
    const n = Math.abs(num) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return many;
    if (n1 === 1) return one;
    if (n1 >= 2 && n1 <= 4) return few;
    return many;
  };

  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${plural(years, "год", "года", "лет")}`);
  }

  if (months > 0) {
    parts.push(`${months} ${plural(months, "месяц", "месяца", "месяцев")}`);
  }

  return parts.join(" ") || `0 ${plural(0, "месяц", "месяца", "месяцев")}`;
}