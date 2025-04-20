// src/components/Timeline/Timeline.tsx
import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative pl-12">
          {/* Timeline dot */}
          <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white">
            {index + 1}
          </div>
          
          <div className="space-y-1">
            <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;