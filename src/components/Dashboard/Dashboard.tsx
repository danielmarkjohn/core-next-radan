'use client'
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { mockDashboardConfig } from './dashboardConfig';
import ListWidget from './Widgets/ListWidget';
import ChartWidget from './Widgets/ChartWidget';
import TextWidget from './Widgets/TextWidget';
import CardWidget from './Widgets/CardWidget';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const renderWidget = (widget: any) => {
    const commonProps = {
      key: widget.id,
      title: widget.title,
      subtitle: widget.subtitle,
      data: widget.data // Optional data prop for widget customization
    };

    switch (widget.type) {
      case 'list':
        return <ListWidget {...commonProps} />;
      case 'chart':
        return <ChartWidget {...commonProps} />;
      case 'text':
        return <TextWidget {...commonProps} />;
      case 'card':
        return <CardWidget {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard p-4">
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        margin={[16, 16]}
        containerPadding={[16, 16]}
        isDraggable={true}
        isResizable={true}
      >
        {mockDashboardConfig.map((widget) => (
          <div
            key={widget.id}
            data-grid={{
              x: widget.x,
              y: widget.y,
              w: widget.w,
              h: widget.h,
              minW: 2,
              minH: 2
            }}
            className="bg-white rounded-lg shadow-lg"
          >
            {renderWidget(widget)}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
