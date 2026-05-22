import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3x3, GripHorizontal, AlignLeft, Square, NotebookPen } from 'lucide-react';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import DiaryForm from './components/DiaryForm';
import StickerPalette from './components/stickers/StickerPalette';
import StickerItem from './components/stickers/StickerItem';
import { useDiaryStorage } from './hooks/useDiaryStorage';
import { formatDateKey } from './utils/dateUtils';

const PATTERNS = [
  { id: 'blank', label: 'BLANK', className: 'note-pattern-blank' },
  { id: 'line', label: 'LINE', className: 'note-pattern-line' },
  { id: 'dot', label: 'DOT', className: 'note-pattern-dot' },
  { id: 'grid', label: 'GRID', className: 'note-pattern-grid' },
];

const PASTEL_COLORS = [
  { id: 'pink', label: 'PINK', bg: '#FFF0F5', cover: '#E2D5F8' },
  { id: 'peach', label: 'PEACH', bg: '#FFF5EE', cover: '#FFDAC1' },
  { id: 'mint', label: 'MINT', bg: '#F0FFF4', cover: '#B5EAD7' },
  { id: 'lavender', label: 'LAVENDER', bg: '#F5F0FF', cover: '#C7CEEA' },
  { id: 'cream', label: 'CREAM', bg: '#FFFBF0', cover: '#F5E6C8' },
  { id: 'sky', label: 'SKY', bg: '#F0F8FF', cover: '#A8D8EA' },
];

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1));
  const [selectedDate, setSelectedDate] = useState(formatDateKey(new Date(2026, 4, 22)));
  const [pattern, setPattern] = useState('dot');
  const [bgColor, setBgColor] = useState('pink');
  const [showStickers, setShowStickers] = useState(false);
  const leftPageRef = useRef(null);
  const rightPageRef = useRef(null);

  const currentTheme = PASTEL_COLORS.find((c) => c.id === bgColor) || PASTEL_COLORS[0];

  const { entries, stickers, saveEntry, deleteEntry, addSticker, updateSticker, removeSticker } = useDiaryStorage();

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const selectedEntry = entries[selectedDate] || null;

  const handleAddSticker = (stickerType) => {
    addSticker({
      id: `sticker-${Date.now()}`,
      stickerType: stickerType.type,
      color: stickerType.color,
      pattern: stickerType.pattern,
      x: 20, y: 20, scale: 1, rotation: 0,
    });
  };

  const handleAddEmoji = (emojiType) => {
    addSticker({
      id: `emoji-${Date.now()}`,
      stickerType: emojiType.type,
      color: '#FFE4C4',
      x: 20, y: 20, scale: 1, rotation: 0,
    });
  };

  const handleAddY2KEmoji = (emojiType) => {
    addSticker({
      id: `y2k-${Date.now()}`,
      stickerType: emojiType.type,
      color: '#FFE4C4',
      x: 20, y: 20, scale: 1, rotation: 0,
    });
  };

  const patternClass = PATTERNS.find((p) => p.id === pattern)?.className || 'note-pattern-dot';

  useEffect(() => {
    document.body.style.background = currentTheme.bg;
  }, [currentTheme]);

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* 파스텔 헤더 */}
        <header className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <NotebookPen size={32} strokeWidth={2} className="text-[#FFB7C5]" />
            <h1 className="text-2xl font-bold tracking-widest" style={{ color: '#FFDAC1', textShadow: '3px 3px 0px #E5E7EB' }}>
              소다팝
            </h1>
            <NotebookPen size={32} strokeWidth={2} className="text-[#B5EAD7]" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <p className="text-[10px] uppercase tracking-widest" style={{ color: '#C7CEEA' }}>
            [ MY PIXEL DIARY ]
          </p>
        </header>

        {/* 컬러 선택 */}
        <div className="flex justify-center gap-3 mb-4">
          {PASTEL_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setBgColor(c.id)}
              title={c.label}
              className="w-8 h-8 border-2 border-[#E5E7EB]"
              style={{
                backgroundColor: c.cover,
                boxShadow: bgColor === c.id ? '3px 3px 0px #FFB7C5' : '2px 2px 0px rgba(0,0,0,0.1)',
                transform: bgColor === c.id ? 'translate(-1px, -1px)' : 'none',
              }}
            />
          ))}
        </div>

        {/* 패턴 선택 */}
        <div className="flex justify-center gap-2 mb-6">
          {PATTERNS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPattern(p.id)}
              className="pixel-btn px-3 py-2"
              style={{
                backgroundColor: pattern === p.id ? '#FFDAC1' : '#FFB7C5',
              }}
            >
              {p.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowStickers(!showStickers)}
            className="pixel-btn px-3 py-2"
            style={{
              backgroundColor: showStickers ? '#B5EAD7' : '#FFB7C5',
            }}
          >
            {showStickers ? 'CLOSE' : 'ITEMS'}
          </button>
        </div>

        {/* 파스텔 다이어리 본체 */}
        <div className="diary-cover p-3 md:p-4 relative">
          <div className="page-fold" />

          <div className="flex flex-col md:flex-row md:items-stretch relative">
            {/* 왼쪽 페이지 - 달력 */}
            <div className="flex-1 relative">
              <div
                ref={leftPageRef}
                className={`diary-page p-3 md:p-4 h-[600px] relative overflow-y-auto box-border flex flex-col ${patternClass}`}
              >
                <CalendarHeader
                  currentMonth={currentMonth}
                  onPrev={handlePrevMonth}
                  onNext={handleNextMonth}
                />
                <div className="flex-1 min-h-0">
                  <CalendarGrid
                    currentMonth={currentMonth}
                    entries={entries}
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>

                {stickers.filter((s) => s.page === 'left').map((sticker) => (
                  <StickerItem
                    key={sticker.id}
                    sticker={sticker}
                    onUpdate={updateSticker}
                    onDelete={removeSticker}
                    containerRef={leftPageRef}
                  />
                ))}
              </div>
            </div>

            {/* 중앙 링 영역 */}
            <div className="hidden md:flex flex-none w-10 flex-col items-center justify-between self-stretch min-h-0 z-30 py-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="metal-ring" />
              ))}
            </div>

            {/* 오른쪽 페이지 - 입력창 */}
            <div className="flex-1 relative">
              <div
                ref={rightPageRef}
                className={`diary-page p-3 md:p-4 h-[600px] relative overflow-y-auto box-border ${patternClass}`}
              >
                <AnimatePresence mode="wait">
                  <DiaryForm
                    key={selectedDate}
                    dateKey={selectedDate}
                    entry={selectedEntry}
                    onSave={saveEntry}
                    onDelete={deleteEntry}
                  />
                </AnimatePresence>

                {stickers.filter((s) => s.page === 'right').map((sticker) => (
                  <StickerItem
                    key={sticker.id}
                    sticker={sticker}
                    onUpdate={updateSticker}
                    onDelete={removeSticker}
                    containerRef={rightPageRef}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 스티커 팔레트 */}
        <AnimatePresence>
          {showStickers && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-4 right-4 z-50"
            >
              <StickerPalette
                onSelectSticker={handleAddSticker}
                onSelectEmoji={handleAddEmoji}
                onSelectY2KEmoji={handleAddY2KEmoji}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App
