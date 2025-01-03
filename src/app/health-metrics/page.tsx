'use client'

import { useState, useEffect } from 'react'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  TimeScale  // Add this import
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export default function Home() {
  const [processedData, setProcessedData] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>(null);
  const [chartData2, setChartData2] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProcessedData() {
      try {
        const response = await fetch('/api/get-processed-data');
        
        if (!response.ok) {
          throw new Error('Failed to fetch processed data');
        }
        
        const data = await response.json();
        setProcessedData(data);
        console.log("setProcessedData", data)

        // Process chart data
        if (data.length > 0 && data[0].data.metrics) {
          // Assuming the first metric is the one we want to chart
          const heartRateMetric = data[0].data.metrics[0].data;

          if (heartRateMetric) {
            // Limit to 20 data points
            const metric = data[0].data.metrics;

            const chartDataPoints = heartRateMetric.slice(0, 20).map((item: any, index: number) => ({
              x: new Date(data[0].createdAt).getTime() + (index * 86400000), // Spread points over days
              y: item.qty // Assuming each data point has a 'qty' property
            }));

            setChartData({
              labels: metric.name,
              datasets: [{
                label: heartRateMetric.name,
                data: chartDataPoints,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            });
          }
        }

        const heartRateMetric2 = data[1].data.metrics[1].data;

          if (heartRateMetric2) {
            // Limit to 20 data points
            const metric = data[0].data.metrics;

            const chartDataPoints2 = heartRateMetric2.slice(0, 20).map((item: any, index: number) => ({
              x: new Date(data[0].createdAt).getTime() + (index * 86400000), // Spread points over days
              y: item.qty // Assuming each data point has a 'qty' property
            }));

            setChartData2({
              labels: metric.name,
              datasets: [{
                label: heartRateMetric2.name,
                data: chartDataPoints2,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            });
          }

        console.log('Processed Data:', data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching processed data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    }

    fetchProcessedData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Your existing content */}
        
        {/* Add Chart Section */}
        {chartData && (
          <div className="w-full max-w-4xl mt-8">
            <h2 className="text-2xl font-bold mb-4">Resting Heart Rate</h2>
            <Line 
              data={chartData} 
              options={{
                responsive: true,
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      unit: 'day'
                    },
                    title: {
                      display: true,
                      text: 'Date'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Quantity'
                    }
                  }
                },
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'Health Metrics Overview'
                  }
                }
              }} 
            />
          </div>
        )}
        {chartData2 && (
          <div className="w-full max-w-4xl mt-8">
            <h2 className="text-2xl font-bold mb-4">Heart Rate Variablity</h2>
            <Line 
              data={chartData2} 
              options={{
                responsive: true,
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      unit: 'day'
                    },
                    title: {
                      display: true,
                      text: 'Date'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Quantity'
                    }
                  }
                },
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'Health Metrics Overview'
                  }
                }
              }} 
            />
          </div>
        )}
      </main>
    </div>
  );
}