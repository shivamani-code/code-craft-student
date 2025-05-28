
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SubSectionItem {
  id: string;
  title: string;
  description: string;
}

interface SubSectionLayoutProps {
  sectionTitle: string;
  items: SubSectionItem[];
  onBack: () => void;
  onItemClick: (itemId: string) => void;
}

const SubSectionLayout: React.FC<SubSectionLayoutProps> = ({ 
  sectionTitle, 
  items, 
  onBack, 
  onItemClick 
}) => {
  return (
    <>
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
        <p className="text-xl text-gray-600">
          Select a category to explore learning materials
        </p>
      </div>

      {/* Sub-sections as vertical cards */}
      <div className="max-w-2xl mx-auto space-y-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onItemClick(item.id)}
          >
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubSectionLayout;
