import React from 'react';

interface ListWidgetProps {
  title: string;
  subtitle?: string;
}

const ListWidget: React.FC<ListWidgetProps> = ({ title, subtitle }) => {
  return (
    <div className="widget-container">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
};

export default ListWidget;
