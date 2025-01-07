import React from 'react';

interface CardWidgetProps {
  title: string;
  subtitle?: string;
}

const CardWidget: React.FC<CardWidgetProps> = ({ title, subtitle }) => {
  return (
    <div className="widget-container">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className="card-content">
        <div className="metric">
          <span className="value">42</span>
          <span className="label">Total</span>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
