import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartSticker,
  StarSticker,
  CloudSticker,
  CoffeeSticker,
  BookSticker,
  FlowerSticker,
  CameraSticker,
  MusicSticker,
  HighlightMarker,
  TapeSticker,
  STICKER_TYPES,
} from './StickerSvgs';
import {
  EmojiHeartEyes,
  EmojiHappy,
  EmojiKiss,
  EmojiCry,
  EmojiLaugh,
  EmojiLove,
  EmojiWink,
  EmojiSurprised,
  EmojiAngry,
  EmojiStar,
  EmojiSleep,
  EmojiParty,
  EmojiFire,
  EmojiThumbsUp,
  EmojiHandHeart,
  EMOJI_TYPES,
} from './EmojiSvgs';
import {
  EmojiSparkleHappy,
  EmojiBlush,
  EmojiShyCover,
  EmojiBigEyes,
  EmojiTearDrop,
  EmojiRebel,
  EmojiRage,
  EmojiPout,
  EmojiDance,
  EmojiQuestion,
  EmojiSweatDrop,
  EmojiLookingDown,
  EmojiSpeechless,
  EmojiDeadTired,
  EmojiCuteSmile,
  EmojiFlowerFrame,
  EmojiHuff,
  EmojiMoneyEyes,
  EmojiSparkle,
  EmojiShocked,
  Y2K_EMOJI_TYPES,
} from './Y2KEmojiSvgs';

const StickerPreviewMap = {
  heart: HeartSticker,
  star: StarSticker,
  cloud: CloudSticker,
  coffee: CoffeeSticker,
  book: BookSticker,
  flower: FlowerSticker,
  camera: CameraSticker,
  music: MusicSticker,
  highlight: HighlightMarker,
  tape: TapeSticker,
};

const EmojiPreviewMap = {
  'emoji-heart-eyes': EmojiHeartEyes,
  'emoji-happy': EmojiHappy,
  'emoji-kiss': EmojiKiss,
  'emoji-cry': EmojiCry,
  'emoji-laugh': EmojiLaugh,
  'emoji-love': EmojiLove,
  'emoji-wink': EmojiWink,
  'emoji-surprised': EmojiSurprised,
  'emoji-angry': EmojiAngry,
  'emoji-star': EmojiStar,
  'emoji-sleep': EmojiSleep,
  'emoji-party': EmojiParty,
  'emoji-fire': EmojiFire,
  'emoji-thumbs-up': EmojiThumbsUp,
  'emoji-hand-heart': EmojiHandHeart,
};

const Y2KEmojiPreviewMap = {
  'emoji-sparkle-happy': EmojiSparkleHappy,
  'emoji-blush': EmojiBlush,
  'emoji-shy-cover': EmojiShyCover,
  'emoji-big-eyes': EmojiBigEyes,
  'emoji-tear-drop': EmojiTearDrop,
  'emoji-rebel': EmojiRebel,
  'emoji-rage': EmojiRage,
  'emoji-pout': EmojiPout,
  'emoji-dance': EmojiDance,
  'emoji-question': EmojiQuestion,
  'emoji-sweat-drop': EmojiSweatDrop,
  'emoji-looking-down': EmojiLookingDown,
  'emoji-speechless': EmojiSpeechless,
  'emoji-dead-tired': EmojiDeadTired,
  'emoji-cute-smile': EmojiCuteSmile,
  'emoji-flower-frame': EmojiFlowerFrame,
  'emoji-huff': EmojiHuff,
  'emoji-money-eyes': EmojiMoneyEyes,
  'emoji-sparkle': EmojiSparkle,
  'emoji-shocked': EmojiShocked,
};

export default function StickerPalette({ onSelectSticker, onSelectEmoji, onSelectY2KEmoji }) {
  const [activeTab, setActiveTab] = useState('sticker');

  const tabs = [
    { id: 'sticker', label: 'STICKER' },
    { id: 'emoji', label: 'EMOJI' },
    { id: 'y2k', label: 'Y2K' },
  ];

  return (
    <div className="pixel-card p-3 w-80 max-h-[500px] overflow-y-auto">
      {/* 탭 전환 */}
      <div className="flex mb-3 p-1 sticky top-0" style={{ background: '#f4f1de', border: '2px solid #3d405b' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-1 text-[8px] font-bold transition-all"
            style={{
              backgroundColor: activeTab === tab.id ? '#f2cc8f' : 'transparent',
              color: activeTab === tab.id ? '#3d405b' : '#81b29a',
              fontFamily: 'var(--pixel-font)',
              border: activeTab === tab.id ? '2px solid #3d405b' : '2px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'sticker' && (
        <div className="grid grid-cols-3 gap-2">
          {STICKER_TYPES.map((sticker) => {
            const Component = StickerPreviewMap[sticker.type];
            return (
              <motion.button
                key={sticker.id}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onSelectSticker(sticker)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Component color={sticker.color} pattern={sticker.pattern} />
                </div>
                <span className="text-[8px] font-bold text-gray-500" style={{ fontFamily: 'var(--pixel-font)' }}>{sticker.label}</span>
              </motion.button>
            );
          })}
        </div>
      )}

      {activeTab === 'emoji' && (
        <div className="grid grid-cols-3 gap-2">
          {EMOJI_TYPES.map((emoji) => {
            const Component = EmojiPreviewMap[emoji.type];
            return (
              <motion.button
                key={emoji.id}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onSelectEmoji(emoji)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Component />
                </div>
                <span className="text-[8px] font-bold text-gray-500" style={{ fontFamily: 'var(--pixel-font)' }}>{emoji.label}</span>
              </motion.button>
            );
          })}
        </div>
      )}

      {activeTab === 'y2k' && (
        <div className="grid grid-cols-2 gap-2">
          {Y2K_EMOJI_TYPES.map((emoji) => (
            <motion.button
              key={emoji.id}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectY2KEmoji(emoji)}
              className="flex items-center justify-center p-2 hover:bg-gray-50 transition-colors min-h-[48px]"
              style={{ border: '2px solid #d4cfc7' }}
            >
              <span 
                className="text-[10px] font-bold text-gray-700 whitespace-nowrap"
                style={{ fontFamily: 'monospace' }}
              >
                {emoji.label}
              </span>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
