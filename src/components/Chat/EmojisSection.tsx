import React from 'react';

const EmojisSection: React.FC = () => {
  const reactions = [
    { src: '/assets/icons/heart.png', alt: 'Heart' },
    { src: '/assets/icons/haha.png', alt: 'Haha' },
    { src: '/assets/icons/wow.png', alt: 'Wow' },
    { src: '/assets/icons/sad.png', alt: 'Sad' },
    { src: '/assets/icons/angry.png', alt: 'Angry' },
    { src: '/assets/icons/like.png', alt: 'Like' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center text-base text-gray-500 mt-3">
        <p>Your Reactions</p>
        <p className="text-gray-400 text-base rounded-md px-2 cursor-pointer hover:bg-gray-600 active:bg-gray-700">
          Customize
        </p>
      </div>
      <div className="py-3 flex flex-wrap justify-center items-center gap-4 cursor-pointer">
        {reactions.map((reaction, index) => (
          <img
            key={index}
            src={reaction.src}
            alt={reaction.alt}
            className="size-10 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
          />
        ))}
      </div>
    </div>
  );
};

export default EmojisSection;
