import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const App = () => {
  const [highPrices, setHighPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState("AAPL"); // Default symbol

  // Sample average prices data
  const averagePricesData = [
    { year: 2014, average_price: -0.19 },
    { year: 2015, average_price: -11.59 },
    { year: 2016, average_price: 8.63 },
    { year: 2017, average_price: 12.57 },
    { year: 2018, average_price: -1.15 },
    { year: 2019, average_price: 18.83 },
    { year: 2020, average_price: 24.43 },
    { year: 2021, average_price: -3.51 },
    { year: 2022, average_price: -0.23 },
    { year: 2023, average_price: 13.08 },
    { year: 2024, average_price: 15.61 },
  ];

  const fetchStockData = async (symbol) => {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2000-01-09/2023-02-10?adjusted=true&sort=asc&limit=50000&apiKey=26JHlABQ2Dd17Wg7VAPtq5pB0IRFkMXU`
      );
      console.log(response.data); // Log the entire response data

      const { results } = response.data;

      // Check if results are defined
      if (!results) {
        throw new Error("No data available for the given symbol");
      }

      const highs = results.map((result) => ({
        date: new Date(result.t).toISOString().split("T")[0], // Convert timestamp to date string
        high: result.h,
      }));

      setHighPrices(highs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Only fetch data if the input is not empty
      if (symbol.trim() !== "") {
        setLoading(true); // Show loading indicator when pressing Enter
        setError(null); // Clear previous errors when changing symbol
        fetchStockData(symbol); // Fetch data for the current symbol
      }
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    setLoading(true);
    fetchStockData(symbol);
  }, []); // Empty dependency array to run only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Calculate the average high price
  const averageHighPrice =
    highPrices.reduce((sum, { high }) => sum + high, 0) / highPrices.length;

  // Calculate percentage differences from the average
  const percentageDifferences = highPrices.map(({ high }) => {
    return ((high - averageHighPrice) / averageHighPrice) * 100; // Calculate percentage difference
  });

  // Prepare data for the stock chart
  const stockChartData = {
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], // Set labels from 2014 to 2024
    datasets: [
      {
        label: "Percentage Difference from Average High Price",
        data: percentageDifferences, // Use percentage differences as data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the average prices chart
  const averageChartData = {
    labels: averagePricesData.map(({ year }) => year),
    datasets: [
      {
        label: "Average Prices",
        data: averagePricesData.map(({ average_price }) => average_price),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock High Prices</h1>
      <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        onKeyPress={handleKeyPress} // Add the key press handler
        placeholder="Enter stock symbol (e.g., AAPL)"
        className="border border-gray-300 p-2 rounded mb-4"
      />
      <div className="flex space-x-4">
        <div className="flex-1 p-10 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Stock Prices</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={stockChartData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">
            Average Prices Over Years of gold
          </h2>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={averageChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
