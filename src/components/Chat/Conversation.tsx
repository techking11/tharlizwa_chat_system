import React from 'react';
import ConversationItem from './ConversationItem';

const Conversation: React.FC = () => {
  const data = [
    {
      name: 'Myo Aung Htet',
      time: new Date('1/12/2025'),
      message: 'နေကောင်းလား',
      active: true,
    },
    {
      name: 'Cherry Ann',
      time: new Date('1/12/2025'),
      message: 'အခု ဘယ်ရောက်နေတာလဲ',
    },
  ];

  return (
    <div className="p-1">
      {data.map((item, index: number) => (
        <ConversationItem
          key={index}
          message={item.message}
          time={item.time}
          name={item.name}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default Conversation;
