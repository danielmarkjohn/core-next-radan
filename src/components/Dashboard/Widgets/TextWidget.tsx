import React from 'react';

interface TextWidgetProps {
  title: string;
  subtitle?: string;
  data?: {
    content: string;
  };
}

const TextWidget: React.FC<TextWidgetProps> = ({ title, subtitle, data }) => {
  return (
    <div className="p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <h4 className="text-sm text-gray-600 mb-4">{subtitle}</h4>}
      <p className="text-gray-700">
        {data?.content || 'No content available'}
      </p>
    </div>
  );
};

export default TextWidget;
