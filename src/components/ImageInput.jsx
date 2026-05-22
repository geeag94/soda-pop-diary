import { useState, useRef } from 'react';
import { Image, X, Upload, Link } from 'lucide-react';

export default function ImageInput({ value, onChange }) {
  const [url, setUrl] = useState(value?.startsWith('http') ? value : '');
  const [mode, setMode] = useState('url');
  const fileInputRef = useRef(null);

  const handleConfirm = () => {
    if (url.trim()) onChange(url.trim());
  };

  const handleClear = () => {
    setUrl('');
    onChange('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('IMAGE ONLY!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      onChange(ev.target.result);
      setUrl('');
    };
    reader.readAsDataURL(file);
  };

  const isBase64 = value && value.startsWith('data:image');

  return (
    <div className="space-y-2">
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => setMode('url')}
          className="pixel-btn px-2 py-1 text-[8px]"
          style={{ backgroundColor: mode === 'url' ? '#B5EAD7' : '#FFB7C5' }}
        >
          <Link size={10} /> URL
        </button>
        <button
          type="button"
          onClick={() => setMode('file')}
          className="pixel-btn px-2 py-1 text-[8px]"
          style={{ backgroundColor: mode === 'file' ? '#B5EAD7' : '#FFB7C5' }}
        >
          <Upload size={10} /> FILE
        </button>
      </div>

      {mode === 'url' ? (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="UNSPLASH URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onBlur={handleConfirm}
            className="pixel-input flex-1 px-2 py-1 text-[8px]"
          />
          {url && (
            <button type="button" onClick={handleClear} className="pixel-btn p-1" style={{ backgroundColor: '#FFB7C5' }}>
              <X size={14} />
            </button>
          )}
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center gap-2 pixel-input py-2 text-[8px] cursor-pointer"
        >
          <Upload size={14} />
          <span>CLICK TO SELECT IMAGE</span>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </div>
      )}

      {value ? (
        <div className="relative aspect-video overflow-hidden" style={{ border: '3px solid #E5E7EB' }}>
          <img
            src={value}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1 right-1 p-1 bg-black/30 text-white"
          >
            <X size={12} />
          </button>
          {isBase64 && (
            <span className="absolute bottom-1 left-1 px-1 py-0.5 bg-black/30 text-white text-[8px]">
              UPLOADED
            </span>
          )}
        </div>
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center text-[#E5E7EB]" style={{ border: '3px dashed #E5E7EB' }}>
          <Image size={24} className="mb-1" />
          <span className="text-[8px]">NO IMAGE</span>
        </div>
      )}
    </div>
  );
}
