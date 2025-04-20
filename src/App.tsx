import React, { useState } from 'react';
import TopNavBar from './components/TopNavBar/TopNavBar';
import Accordion from './components/Accordion/Accordion';
import Badge from './components/Badge/Badge';
import Tooltip from './components/Tooltip/Tooltip';
import Timeline from './components/Timeline/Timeline';
import Tabs from './components/Tabs/Tabs';
import Pagination from './components/Pagination/Pagination';

const App: React.FC = () => {
  const accordionData = [
    { title: 'Section 1', content: 'This is the content of section 1.' },
    { title: 'Section 2', content: 'Here is section 2’s content.' },
    { title: 'Section 3', content: 'And this is section 3.' },
  ];

  const timelineData = [
    { title: 'Started Project', description: 'Kicked off design system.', date: 'Jan 1, 2025' },
    { title: 'Developed Components', description: 'Accordion, Tooltip, etc.', date: 'Jan 10, 2025' },
    { title: 'Completed UI', description: 'Final design review.', date: 'Feb 1, 2025' },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopNavBar />

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Design System</h1>
          <p className="text-lg text-gray-600">A collection of reusable components for your application</p>
        </header>

     {/* Color System */}
<section className="mb-16">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Color System</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {/* Primary Colors */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Primary</h3>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-primary-50 border border-gray-200"></div>
        <span className="text-sm font-medium">primary-50</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-primary-100 border border-gray-200"></div>
        <span className="text-sm font-medium">primary-100</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-primary-500 border border-gray-200"></div>
        <span className="text-sm font-medium">primary-500</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-primary-900 border border-gray-200"></div>
        <span className="text-sm font-medium">primary-900</span>
      </div>
    </div>
    
    {/* Secondary Colors */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Secondary</h3>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-secondary-50 border border-gray-200"></div>
        <span className="text-sm font-medium">secondary-50</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-secondary-100 border border-gray-200"></div>
        <span className="text-sm font-medium">secondary-100</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-secondary-500 border border-gray-200"></div>
        <span className="text-sm font-medium">secondary-500</span>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-12 rounded mr-3 bg-secondary-900 border border-gray-200"></div>
        <span className="text-sm font-medium">secondary-900</span>
      </div>
    </div>
    
    {/* Semantic Colors */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Semantic</h3>
      {['success-500', 'info-500', 'warning-500', 'error-500'].map((color) => (
        <div key={color} className="flex items-center">
          <div className={`w-16 h-12 rounded mr-3 bg-${color} border border-gray-200`}></div>
          <span className="text-sm font-medium">{color}</span>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Data Display */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Data Display</h2>
          
          {/* Accordion */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Accordion</h3>
            <div className="max-w-2xl mx-auto">
              <Accordion items={accordionData} />
            </div>
          </div>
          
          {/* Badges */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge text="Success" color="success" />
              <Badge text="Error" color="error" />
              <Badge text="Warning" color="warning" />
              <Badge text="Info" color="info" />
              <Badge text="Default" />
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Tooltip</h3>
            <div className="flex justify-center">
              <Tooltip text="This is a tooltip!">
                <button className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors">
                  Hover me
                </button>
              </Tooltip>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Timeline</h3>
            <div className="max-w-2xl mx-auto">
              <Timeline items={timelineData} />
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Navigation</h2>
          
          {/* Tabs */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Tabs</h3>
            <div className="max-w-2xl mx-auto">
              <Tabs tabs={['Overview', 'Details', 'Settings']} />
            </div>
          </div>
          
          {/* Pagination */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Pagination</h3>
            <div className="flex justify-center">
              <Pagination 
                currentPage={currentPage} 
                totalPages={5} 
                onPageChange={setCurrentPage} 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;