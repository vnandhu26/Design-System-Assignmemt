// src/components/Tabs/Tabs.tsx
import React, { useState } from 'react';

interface TabsProps {
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium focus:outline-none ${
              activeTab === index
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        <p className="text-gray-600">Content for {tabs[activeTab]}</p>
      </div>
    </div>
  );
};

export default Tabs;