import React from 'react'; 
import { Line } from 'react-chartjs-2'; 
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  ChartOptions, 
  ChartData,
} from 'chart.js'; 

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the types for the props
interface GraphicProps {
  data: number[];      // Array of numbers representing the data points (e.g., stock prices)
  labels: string[];    // Array of strings for the x-axis labels (e.g., months or time)
}

const Graphic: React.FC<GraphicProps> = ({ data, labels }) => {
  // Define the chart data structure
  const chartData: ChartData<'line'> = {
    labels: labels,  // X-axis labels provided via props
    datasets: [
      {
        label: 'Sui Value',  // You can change this label as per your need
        data: data,  // Data provided via props
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Background color of the chart area
        borderWidth: 2,
        tension: 0.4,  // Creates smooth curves in the line
      },
    ],
  };

  // Define chart options for customization
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,  // Makes the chart responsive
    maintainAspectRatio: false,  // Allow chart to resize freely
    plugins: {
      legend: {
        display: true,
        position: 'top',  // Legend displayed on top
      },
      title: {
        display: true,
        text: 'Sui Value Chart',  // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Labels (X-Axis)',  // X-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values (Y-Axis)',  // Y-axis title
        },
        beginAtZero: true,  // Y-axis starts at zero
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full h-[500px]"> {/* Full width and height */}
      <div className="w-full h-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graphic;
