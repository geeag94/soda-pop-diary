const CATEGORIES = [
  { key: '영화', label: 'MOVIE', icon: '🎬' },
  { key: '책', label: 'BOOK', icon: '📚' },
  { key: '여행', label: 'TRIP', icon: '✈️' },
  { key: '일상', label: 'DAILY', icon: '☕' },
];

export default function CategorySelect({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          type="button"
          onClick={() => onChange(cat.key)}
          className="pixel-btn px-3 py-2 text-[8px]"
          style={{
            backgroundColor: value === cat.key ? '#B5EAD7' : '#FFB7C5',
            fontFamily: 'var(--pixel-font)',
          }}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  );
}
