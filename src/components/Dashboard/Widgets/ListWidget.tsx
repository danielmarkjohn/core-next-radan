import React from 'react';

interface ListWidgetProps {
  title: string;
  subtitle?: string;
  data?: {
    items: string[];
  };
}

const ListWidget: React.FC<ListWidgetProps> = ({ title, subtitle, data }) => {
  const items = data?.items || ['No items to display'];

  return (
    <div className="p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <h4 className="text-sm text-gray-600 mb-4">{subtitle}</h4>}
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListWidget;
