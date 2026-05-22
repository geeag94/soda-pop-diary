import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, RotateCw, Maximize2, Minimize2 } from 'lucide-react';
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
} from './Y2KEmojiSvgs';

const StickerMap = {
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

const EmojiMap = {
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

const Y2KEmojiMap = {
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

export default function StickerItem({ sticker, onUpdate, onDelete, containerRef }) {
  const [isSelected, setIsSelected] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        setIsSelected(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const isEmoji = sticker.stickerType.startsWith('emoji-');
  const isY2K = sticker.stickerType.startsWith('emoji-') && Y2KEmojiMap[sticker.stickerType];
  const Component = isY2K 
    ? Y2KEmojiMap[sticker.stickerType] 
    : isEmoji 
      ? EmojiMap[sticker.stickerType] 
      : StickerMap[sticker.stickerType];

  if (!Component) return null;

  const handleRotate = () => {
    onUpdate(sticker.id, { rotation: (sticker.rotation || 0) + 45 });
  };

  const handleScale = (delta) => {
    const newScale = Math.max(0.5, Math.min(2.5, (sticker.scale || 1) + delta));
    onUpdate(sticker.id, { scale: newScale });
  };

  return (
    <motion.div
      ref={itemRef}
      drag
      dragMomentum={false}
      dragConstraints={containerRef}
      onDragEnd={(_, info) => {
        onUpdate(sticker.id, {
          x: (sticker.x || 0) + info.offset.x,
          y: (sticker.y || 0) + info.offset.y,
        });
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: sticker.scale || 1,
        opacity: 1,
        x: sticker.x || 0,
        y: sticker.y || 0,
        rotate: sticker.rotation || 0,
      }}
      whileHover={{ scale: (sticker.scale || 1) * 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute cursor-move sticker-shadow"
      style={{ zIndex: isSelected ? 50 : 10 }}
      onClick={(e) => {
        e.stopPropagation();
        setIsSelected(!isSelected);
      }}
    >
      <Component color={sticker.color} pattern={sticker.pattern} />

      {isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1 bg-white rounded-lg shadow-md p-1 border border-gray-100"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleScale(0.2);
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Maximize2 size={14} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleScale(-0.2);
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Minimize2 size={14} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRotate();
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <RotateCw size={14} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(sticker.id);
            }}
            className="p-1 hover:bg-red-50 text-red-500 rounded"
          >
            <Trash2 size={14} />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
