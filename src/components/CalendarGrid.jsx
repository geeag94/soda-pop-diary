import CalendarDay from './CalendarDay';
import { getCalendarDays } from '../utils/dateUtils';

export default function CalendarGrid({ currentMonth, entries, selectedDate, onSelect }) {
  const days = getCalendarDays(currentMonth);

  return (
    <div className="grid grid-cols-7 grid-rows-7 gap-2 h-full">
      {[0, 1, 2, 3, 4, 5, 6].map((d) => (
        <CalendarDay key={`header-${d}`} day={d} isHeader />
      ))}
      {days.map((day, idx) => (
        <CalendarDay
          key={`${day.fullDate.toISOString()}-${idx}`}
          day={day}
          entries={entries}
          selectedDate={selectedDate}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
