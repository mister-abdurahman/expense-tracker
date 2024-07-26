export function formatDate(date?: Date | string) {
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  if (!date) return null;
  const xDate = new Date(date);
  return xDate?.toISOString().slice(0, 10);
}
export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
