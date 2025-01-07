import React from 'react';

interface CardWidgetProps {
  title: string;
  subtitle?: string;
  data?: {
    value: string;
    change: string;
  };
}

const CardWidget: React.FC<CardWidgetProps> = ({ title, subtitle, data }) => {
  return (
    <div className="p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <h4 className="text-sm text-gray-600 mb-2">{subtitle}</h4>}
      <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)]">
        <span className="text-3xl font-bold text-blue-600">
          {data?.value || '0'}
        </span>
        <span className={`text-sm mt-2 ${
          data?.change?.startsWith('+') ? 'text-green-500' : 'text-red-500'
        }`}>
          {data?.change || '0%'}
        </span>
      </div>
    </div>
  );
};

export default CardWidget;
