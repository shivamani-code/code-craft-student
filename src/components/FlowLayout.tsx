
import React, { useState } from 'react';
import { ArrowLeft, ArrowDown } from 'lucide-react';

interface FlowItem {
  id: string;
  title: string;
  description?: string;
}

interface FlowLayoutProps {
  sectionTitle: string;
  items: FlowItem[];
  onBack: () => void;
}

interface ContentViewProps {
  title: string;
  onBack: () => void;
}

const ContentView: React.FC<ContentViewProps> = ({ title, onBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Flow</span>
        </button>
      </div>
      
      <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 min-h-[600px]">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h1>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-xl min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Content Coming Soon!</p>
            <p className="text-gray-500">
              This lesson content is under development. Check back soon for comprehensive learning materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlowLayout: React.FC<FlowLayoutProps> = ({ sectionTitle, items, onBack }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  if (selectedItem) {
    const item = items.find(i => i.id === selectedItem);
    return (
      <ContentView
        title={item?.title || ''}
        onBack={() => setSelectedItem(null)}
      />
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
        <p className="text-xl text-gray-600">Follow the learning path step by step</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {items.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Flow Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 mb-6">{item.description}</p>
                )}
                
                <button
                  onClick={() => setSelectedItem(item.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View
                </button>
              </div>
            </div>

            {/* Connecting Arrow (except for last item) */}
            {index < items.length - 1 && (
              <div className="flex justify-center mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-blue-500"></div>
                  <ArrowDown className="w-6 h-6 text-blue-500" />
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowLayout;
