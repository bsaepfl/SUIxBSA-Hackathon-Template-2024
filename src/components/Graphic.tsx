import React, { useEffect, useState } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the types for the props
interface GraphicProps {
  data: number[];      // Array of numbers representing the data points (e.g., stock prices)
  labels: string[];    // Array of strings for the x-axis labels (e.g., months or time)
}

const Graphic: React.FC<GraphicProps> = ({ data, labels}) => {
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
        tension: 0.2,  // Creates smooth curves in the line
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
        beginAtZero: false,  // Y-axis starts at zero
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

// Custom hook to manage stock prices
const useStockPrices = () => {
  const StockPrices = [
    2.28, 2.291, 2.27, 2.261, 2.279, 2.286, 2.27, 2.265, 2.279, 
    2.281, 2.27, 2.29, 2.299, 2.281, 2.274, 2.29, 2.295, 2.281, 
    2.279, 2.29, 2.269, 2.26, 2.278, 2.285, 2.269, 2.264, 2.278, 
    2.28, 2.269, 2.289, 2.298, 2.28, 2.273, 2.289, 2.294, 2.28, 
    2.278, 2.289, 2.268, 2.259, 2.277, 2.284, 2.268, 2.263, 2.277, 
    2.279, 2.268, 2.288, 2.297, 2.279, 2.272, 2.288, 2.293, 2.279, 
    2.277, 2.288, 2.267, 2.258, 2.276, 2.283, 2.267, 2.262, 2.276, 
    2.278, 2.267, 2.287, 2.296, 2.278, 2.271, 2.287, 2.292, 2.278, 
    2.276, 2.287, 2.266, 2.257, 2.275, 2.282, 2.266, 2.261, 2.275, 
    2.277, 2.266, 2.286, 2.295, 2.277, 2.27, 2.286, 2.291, 2.277, 
    2.275, 2.286, 2.265, 2.256, 2.274, 2.281, 2.265, 2.26, 2.274, 
    2.276, 2.265, 2.285, 2.294, 2.276, 2.269, 2.285, 2.29, 2.276, 
    2.274, 2.285, 2.264, 2.255, 2.273, 2.28, 2.264, 2.259, 2.273, 
    2.275, 2.264, 2.284, 2.293, 2.275, 2.268, 2.284, 2.289, 2.275, 
    2.273, 2.284, 2.263, 2.254, 2.272, 2.279, 2.263, 2.258, 2.272, 
    2.274, 2.263, 2.283, 2.292, 2.274, 2.267, 2.283, 2.288, 2.274, 
    2.272, 2.283, 2.262, 2.253, 2.271, 2.278, 2.262, 2.257, 2.271, 
    2.273, 2.262, 2.282, 2.291, 2.273, 2.266, 2.282, 2.287, 2.273, 
    2.271, 2.282, 2.261, 2.252, 2.27, 2.277, 2.261, 2.256, 2.27, 
    2.272, 2.261, 2.281, 2.29, 2.272, 2.265, 2.281, 2.286, 2.272, 
    2.27, 2.281, 2.26, 2.251, 2.269, 2.276, 2.26, 2.255, 2.269, 
    2.271, 2.26, 2.28, 2.289, 2.271, 2.264, 2.28, 2.285, 2.271, 
    2.269, 2.28, 2.259, 2.25, 2.268, 2.275, 2.259, 2.254, 2.268, 
    2.27, 2.259, 2.279, 2.288, 2.27, 2.263, 2.279, 2.284, 2.27, 
    2.268, 2.279, 2.258, 2.249, 2.267, 2.274, 2.258, 2.253, 2.267, 
    2.269, 2.258, 2.278, 2.287, 2.269, 2.262, 2.278, 2.283, 2.269, 
    2.267, 2.278, 2.257, 2.248, 2.266, 2.273, 2.257, 2.252, 2.266, 
    2.268, 2.257, 2.277, 2.286, 2.268, 2.261, 2.277, 2.282, 2.268, 
    2.266, 2.277, 2.257, 2.248, 2.266, 2.273, 2.257, 2.252, 2.266, 
    2.268, 2.257, 2.277, 2.286, 2.268, 2.261, 2.277, 2.282, 2.268, 
    2.266, 2.277, 2.257, 2.248, 2.266, 2.273, 2.257, 2.252, 2.266, 
    2.268, 2.257, 2.277, 2.286, 2.268, 2.261, 2.277, 2.282, 2.268,
  ];

  const [currentIndex, setCurrentIndex] = useState(11); // Start from the 12th index
  const [currentValues, setCurrentValues] = useState(StockPrices.slice(0, 11)); // Initial values

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < StockPrices.length) {
        setCurrentValues((prevValues) => {
          const newValues = [...prevValues.slice(1), StockPrices[currentIndex]];
          setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next index
          return newValues;
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]); // Depend on currentIndex

  return currentValues; // Return the current stock prices
};

const StockPriceDisplay = () => {
  const currentPrices = useStockPrices(); // Use the custom hook to get current prices

  return (
    <div>
      <h1>Current Stock Prices</h1>
      <ul>
        {currentPrices.map((price, index) => (
          <li key={index}>{price.toFixed(3)}</li>
        ))}
      </ul>
    </div>
  );
};

// Main component to render both chart and stock price display
const App: React.FC = () => {
  const currentPrices = useStockPrices(); // Call the hook here to get the current prices
  const labels = Array.from({length: currentPrices.length }, (_, i) => 'Time ${i + 1}');

  return (
    <div>
      <Graphic data={currentPrices} labels={labels} />
      <StockPriceDisplay />
    </div>
  );
};

export default App;