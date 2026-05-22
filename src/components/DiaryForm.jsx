import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2 } from 'lucide-react';
import ImageInput from './ImageInput';
import CategorySelect from './CategorySelect';
import StarRating from './StarRating';

const emptyEntry = {
  imageUrl: '',
  category: '',
  title: '',
  review: '',
  rating: 0,
};

export default function DiaryForm({ dateKey, entry, onSave, onDelete }) {
  const [form, setForm] = useState(emptyEntry);

  useEffect(() => {
    if (entry) {
      setForm(entry);
    } else {
      setForm(emptyEntry);
    }
  }, [dateKey, entry]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    onSave({ ...form, date: dateKey, id: dateKey });
  };

  const isExisting = !!entry;

  return (
    <motion.div
      key={dateKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold tracking-widest" style={{ color: '#6B7280', fontFamily: 'var(--pixel-font)' }}>
          {dateKey}
        </h2>
        {isExisting && (
          <button
            type="button"
            onClick={() => onDelete(dateKey)}
            className="pixel-btn p-1"
            style={{ backgroundColor: '#FFB7C5' }}
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>

      <ImageInput value={form.imageUrl} onChange={(v) => handleChange('imageUrl', v)} />

      <div>
        <label className="block text-[8px] font-bold uppercase tracking-widest mb-1" style={{ color: '#FFB7C5' }}>
          CATEGORY
        </label>
        <CategorySelect value={form.category} onChange={(v) => handleChange('category', v)} />
      </div>

      <div>
        <label className="block text-[8px] font-bold uppercase tracking-widest mb-1" style={{ color: '#FFB7C5' }}>
          TITLE
        </label>
        <input
          type="text"
          placeholder="ENTER TITLE..."
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="pixel-input w-full px-3 py-2 text-[10px]"
        />
      </div>

      <div>
        <label className="block text-[8px] font-bold uppercase tracking-widest mb-1" style={{ color: '#FFB7C5' }}>
          REVIEW
        </label>
        <textarea
          placeholder="WRITE REVIEW..."
          value={form.review}
          onChange={(e) => handleChange('review', e.target.value)}
          rows={4}
          className="pixel-input w-full px-3 py-2 text-[10px] resize-none"
        />
      </div>

      <div>
        <label className="block text-[8px] font-bold uppercase tracking-widest mb-1" style={{ color: '#FFB7C5' }}>
          RATING
        </label>
        <StarRating rating={form.rating} onChange={(v) => handleChange('rating', v)} />
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={!form.title.trim()}
        className="pixel-btn w-full flex items-center justify-center gap-2 py-3 text-[10px]"
        style={{ backgroundColor: '#B5EAD7' }}
      >
        <Save size={14} />
        SAVE DATA
      </button>
    </motion.div>
  );
}
