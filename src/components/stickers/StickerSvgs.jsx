export function HeartSticker({ color = "#ff9a9e" }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 42L21.18 39.36C10.8 30.04 4 24.08 4 16.8C4 10.84 8.68 6 14.4 6C17.88 6 21.24 7.72 24 10.44C26.76 7.72 30.12 6 33.6 6C39.32 6 44 10.84 44 16.8C44 24.08 37.2 30.04 26.82 39.36L24 42Z"
        fill={color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function StarSticker({ color = "#ffd700" }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4L28.88 17.36L44 18.48L32.48 27.56L36.24 42L24 34.56L11.76 42L15.52 27.56L4 18.48L19.12 17.36L24 4Z"
        fill={color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CloudSticker({ color = "#a8d8ea" }) {
  return (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
      <path
        d="M44 28C48.418 28 52 24.418 52 20C52 16.16 49.24 12.96 45.52 12.16C44.68 7.6 40.64 4 35.8 4C32.84 4 30.16 5.28 28.28 7.4C26.92 5.32 24.4 4 21.6 4C16.84 4 12.96 7.48 12.12 12C5.44 12.52 4 18.16 4 22C4 28.56 7.92 28 16 28H44Z"
        fill={color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CoffeeSticker({ color = "#d4a373" }) {
  return (
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none">
      <rect x="6" y="14" width="28" height="34" rx="4" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <path d="M34 20C38.418 20 42 23.582 42 28C42 32.418 38.418 36 34 36" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />
      <path d="M12 8C12 8 16 2 20 8C20 8 24 2 28 8" stroke="#999" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="18" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

export function BookSticker({ color = "#c9b1ff" }) {
  return (
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none">
      <rect x="4" y="4" width="36" height="40" rx="2" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <line x1="22" y1="8" x2="22" y2="40" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
      <line x1="8" y1="14" x2="18" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="20" x2="18" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="14" x2="36" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlowerSticker({ color = "#ffb7c5" }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" fill={color} />
      <circle cx="24" cy="32" r="8" fill={color} />
      <circle cx="16" cy="24" r="8" fill={color} />
      <circle cx="32" cy="24" r="8" fill={color} />
      <circle cx="24" cy="24" r="6" fill="#ffe066" />
      <path d="M24 30V44" stroke="#4a7c59" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function CameraSticker({ color = "#b5ead7" }) {
  return (
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
      <rect x="4" y="10" width="44" height="30" rx="6" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <circle cx="26" cy="26" r="10" fill="rgba(255,255,255,0.5)" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
      <circle cx="26" cy="26" r="6" fill="rgba(0,0,0,0.1)" />
      <rect x="20" y="4" width="12" height="6" rx="2" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <circle cx="42" cy="18" r="3" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

export function MusicSticker({ color = "#ffdac1" }) {
  return (
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none">
      <ellipse cx="16" cy="36" rx="10" ry="8" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <rect x="22" y="8" width="4" height="28" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <path d="M24 8L40 4V12L26 14" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <ellipse cx="36" cy="32" rx="8" ry="6" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
    </svg>
  );
}

export function HighlightMarker({ color = "#ffd700" }) {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
      <rect x="0" y="4" width="60" height="16" rx="4" fill={color} opacity="0.5" />
      <rect x="2" y="6" width="56" height="12" rx="3" fill={color} opacity="0.3" />
    </svg>
  );
}

export function TapeSticker({ color = "#e8f4f8", pattern = "dots" }) {
  return (
    <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
      <rect x="0" y="4" width="80" height="16" rx="2" fill={color} opacity="0.7" />
      {pattern === "dots" && (
        <>
          <circle cx="10" cy="12" r="2" fill="rgba(0,0,0,0.1)" />
          <circle cx="30" cy="12" r="2" fill="rgba(0,0,0,0.1)" />
          <circle cx="50" cy="12" r="2" fill="rgba(0,0,0,0.1)" />
          <circle cx="70" cy="12" r="2" fill="rgba(0,0,0,0.1)" />
        </>
      )}
      {pattern === "stripes" && (
        <>
          <line x1="10" y1="4" x2="10" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
          <line x1="30" y1="4" x2="30" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
          <line x1="50" y1="4" x2="50" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
          <line x1="70" y1="4" x2="70" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

export const STICKER_TYPES = [
  { id: 'heart-pink', type: 'heart', color: '#ff9a9e', label: '하트' },
  { id: 'heart-red', type: 'heart', color: '#ff6b6b', label: '하트(빨강)' },
  { id: 'star-yellow', type: 'star', color: '#ffd700', label: '별' },
  { id: 'star-blue', type: 'star', color: '#74c0fc', label: '별(파랑)' },
  { id: 'cloud', type: 'cloud', color: '#a8d8ea', label: '구름' },
  { id: 'coffee', type: 'coffee', color: '#d4a373', label: '커피' },
  { id: 'book', type: 'book', color: '#c9b1ff', label: '책' },
  { id: 'flower', type: 'flower', color: '#ffb7c5', label: '꽃' },
  { id: 'camera', type: 'camera', color: '#b5ead7', label: '카메라' },
  { id: 'music', type: 'music', color: '#ffdac1', label: '음악' },
  { id: 'highlight', type: 'highlight', color: '#ffd700', label: '형광펜' },
  { id: 'tape-dots', type: 'tape', color: '#e8f4f8', pattern: 'dots', label: '테이프(도트)' },
  { id: 'tape-stripes', type: 'tape', color: '#fff0e6', pattern: 'stripes', label: '테이프(줄)' },
];
