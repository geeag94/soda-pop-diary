export function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getCalendarDays(currentMonth) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDayOfWeek = firstDay.getDay();
  const mondayStartIndex = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const days = [];

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = mondayStartIndex - 1; i >= 0; i--) {
    const date = prevMonthLastDay - i;
    days.push({
      date,
      isCurrentMonth: false,
      fullDate: new Date(year, month - 1, date),
    });
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
      fullDate: new Date(year, month, i),
    });
  }

  const nextMonthDays = 42 - days.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      fullDate: new Date(year, month + 1, i),
    });
  }

  return days;
}
