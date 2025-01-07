export interface WidgetConfig {
  id: string;
  type: 'list' | 'chart' | 'text' | 'card';
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const mockDashboardConfig: WidgetConfig[] = [
  {
    id: 'list-widget',
    type: 'list',
    title: 'Sample List',
    subtitle: 'Recent Items',
    x: 0,
    y: 0,
    w: 4,
    h: 3
  },
  {
    id: 'chart-widget',
    type: 'chart',
    title: 'Analytics Chart',
    subtitle: 'Monthly Data',
    x: 4,
    y: 0,
    w: 4,
    h: 3
  },
  {
    id: 'text-widget',
    type: 'text',
    title: 'Announcements',
    x: 8,
    y: 0,
    w: 4,
    h: 2
  },
  {
    id: 'card-widget',
    type: 'card',
    title: 'Summary Card',
    subtitle: 'Key Metrics',
    x: 0,
    y: 3,
    w: 6,
    h: 2
  }
];
