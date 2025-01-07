export interface WidgetConfig {
  id: string;
  type: 'list' | 'chart' | 'text' | 'card';
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  data?: any;
}

export const mockDashboardConfig: WidgetConfig[] = [
  {
    id: 'list-widget-1',
    type: 'list',
    title: 'Tasks List',
    subtitle: 'Pending Tasks',
    x: 0,
    y: 0,
    w: 3,
    h: 3,
    data: {
      items: ['Task 1', 'Task 2', 'Task 3']
    }
  },
  {
    id: 'list-widget-2',
    type: 'list',
    title: 'Notifications',
    subtitle: 'Recent Updates',
    x: 3,
    y: 0,
    w: 3,
    h: 3,
    data: {
      items: ['New message', 'System update', 'Meeting reminder']
    }
  },
  {
    id: 'chart-widget-1',
    type: 'chart',
    title: 'Sales Analytics',
    subtitle: 'Monthly Data',
    x: 6,
    y: 0,
    w: 6,
    h: 3
  },
  {
    id: 'text-widget-1',
    type: 'text',
    title: 'Announcements',
    x: 0,
    y: 3,
    w: 4,
    h: 2,
    data: {
      content: 'Important company updates will be shown here.'
    }
  },
  {
    id: 'card-widget-1',
    type: 'card',
    title: 'Revenue',
    subtitle: 'Monthly',
    x: 4,
    y: 3,
    w: 4,
    h: 2,
    data: {
      value: '$50,000',
      change: '+15%'
    }
  },
  {
    id: 'card-widget-2',
    type: 'card',
    title: 'Users',
    subtitle: 'Total Active',
    x: 8,
    y: 3,
    w: 4,
    h: 2,
    data: {
      value: '1,234',
      change: '+5%'
    }
  }
];
