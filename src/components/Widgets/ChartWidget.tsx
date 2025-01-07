import React from 'react';

interface ChartWidgetProps {
  title: string;
  subtitle?: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, subtitle }) => {
  return (
    <div className="widget-container">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className="chart-placeholder">
        Chart Placeholder
      </div>
    </div>
  );
};

export default ChartWidget;
