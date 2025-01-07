import React from 'react';

interface TextWidgetProps {
  title: string;
  subtitle?: string;
}

const TextWidget: React.FC<TextWidgetProps> = ({ title, subtitle }) => {
  return (
    <div className="widget-container">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>
        This is a sample text widget. You can add any text content here.
      </p>
    </div>
  );
};

export default TextWidget;
