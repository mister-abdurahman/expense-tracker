export function formatDate(date?: Date) {
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  if (!date) return null;
  return date.toISOString().slice(0, 10);
}
export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
