import React from 'react';

interface ChartWidgetProps {
  title: string;
  subtitle?: string;
  data?: any;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, subtitle }) => {
  return (
    <div className="p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <h4 className="text-sm text-gray-600 mb-4">{subtitle}</h4>}
      <div className="flex items-center justify-center h-[calc(100%-4rem)] bg-gray-50 rounded-lg">
        <span className="text-gray-500">Chart Placeholder</span>
      </div>
    </div>
  );
};

export default ChartWidget;
