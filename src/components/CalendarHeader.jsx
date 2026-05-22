import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CalendarHeader({ currentMonth, onPrev, onNext }) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth() + 1;

  return (
    <div className="flex items-center justify-between mb-3 px-1">
      <button
        type="button"
        onClick={onPrev}
        className="pixel-btn p-2"
        style={{ backgroundColor: '#FFB7C5' }}
      >
        <ChevronLeft size={16} />
      </button>

      <motion.h2
        key={`${year}-${month}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm font-bold tracking-widest"
        style={{ color: '#6B7280', fontFamily: 'var(--pixel-font)' }}
      >
        {year}-{String(month).padStart(2, '0')}
      </motion.h2>

      <button
        type="button"
        onClick={onNext}
        className="pixel-btn p-2"
        style={{ backgroundColor: '#FFB7C5' }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
