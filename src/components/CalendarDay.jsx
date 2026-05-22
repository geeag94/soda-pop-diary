import { motion } from 'framer-motion';
import { formatDateKey } from '../utils/dateUtils';

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default function CalendarDay({ day, entries, selectedDate, onSelect, isHeader }) {
  if (isHeader) {
    return (
      <div className="text-center py-1 text-[8px] font-bold tracking-wider" style={{ color: '#FFB7C5' }}>
        {WEEKDAYS[day]}
      </div>
    );
  }

  const dateKey = formatDateKey(day.fullDate);
  const entry = entries[dateKey];
  const isSelected = selectedDate === dateKey;
  const isToday = dateKey === formatDateKey(new Date());
  const isCurrentMonth = day.isCurrentMonth;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(dateKey)}
      className="relative w-full h-full overflow-hidden transition-all flex flex-col"
      style={{
        border: isSelected ? '3px solid #FFB7C5' : '2px solid transparent',
        background: isSelected
          ? '#FFDAC1'
          : isToday
          ? '#B5EAD7'
          : 'rgba(255,255,255,0.8)',
        opacity: isCurrentMonth ? 1 : 0.3,
      }}
    >
      {/* 상단: 날짜 + 이미지 */}
      <div className="relative flex-1 flex flex-col items-center justify-center">
        {entry?.imageUrl && (
          <div className="absolute inset-0">
            <img
              src={entry.imageUrl}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {isSelected && (
              <div className="absolute inset-0" style={{ background: 'rgba(255, 183, 197, 0.4)' }} />
            )}
          </div>
        )}

        <span
          className="relative z-10 text-xs font-bold"
          style={{
            color: entry?.imageUrl ? '#fff' : '#6B7280',
            textShadow: entry?.imageUrl ? '1px 1px 0px rgba(0,0,0,0.3)' : 'none',
            fontFamily: 'var(--pixel-font)',
          }}
        >
          {day.date}
        </span>
      </div>

      {/* 하단: 제목 (이미지 아래) */}
      {entry && (
        <div className="relative z-10 bg-white/90 px-1 py-0.5 text-center" style={{ borderTop: '1px solid #E5E7EB' }}>
          <span className="text-[8px] text-[#6B7280] truncate max-w-[60px] block font-bold leading-tight" style={{ fontFamily: 'var(--pixel-font)' }}>
            {entry.title}
          </span>
        </div>
      )}
    </motion.button>
  );
}
