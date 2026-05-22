import { useState, useEffect } from 'react';
import { MOCK_DATA } from '../data/mockData';

const STORAGE_KEY = 'diary-data';
const STICKER_KEY = 'diary-stickers';

export function useDiaryStorage() {
  const [entries, setEntries] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load diary data', e);
    }
    return { ...MOCK_DATA };
  });

  const [stickers, setStickers] = useState(() => {
    try {
      const stored = localStorage.getItem(STICKER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load stickers', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Failed to save diary data', e);
    }
  }, [entries]);

  useEffect(() => {
    try {
      localStorage.setItem(STICKER_KEY, JSON.stringify(stickers));
    } catch (e) {
      console.error('Failed to save stickers', e);
    }
  }, [stickers]);

  const saveEntry = (entry) => {
    setEntries((prev) => ({
      ...prev,
      [entry.date]: entry,
    }));
  };

  const deleteEntry = (dateKey) => {
    setEntries((prev) => {
      const next = { ...prev };
      delete next[dateKey];
      return next;
    });
  };

  // 스티커 관리
  const addSticker = (sticker) => {
    setStickers((prev) => [...prev, sticker]);
  };

  const updateSticker = (id, updates) => {
    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const removeSticker = (id) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return {
    entries,
    stickers,
    saveEntry,
    deleteEntry,
    addSticker,
    updateSticker,
    removeSticker,
  };
}
