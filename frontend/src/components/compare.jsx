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
  const [bondData, setBondData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState("AAPL"); // Default symbol
  const [selectedBondType, setSelectedBondType] = useState("IN01"); // Default bond type

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

  // Sample bond data
  const bondDataSample = [
    { date: "2024-01-01", bondType: "IN01", value: 101 },
    { date: "2024-01-02", bondType: "IN01", value: 102 },
    { date: "2024-01-03", bondType: "IN01", value: 103 },
    { date: "2024-01-04", bondType: "IN01", value: 104 },
    { date: "2024-01-05", bondType: "IN01", value: 105 },
    { date: "2024-01-06", bondType: "IN01", value: 106 },
    { date: "2024-01-07", bondType: "IN01", value: 107 },
    { date: "2024-01-08", bondType: "IN01", value: 108 },
    { date: "2024-01-09", bondType: "IN01", value: 109 },
    { date: "2024-01-10", bondType: "IN01", value: 110 },
    { date: "2024-01-01", bondType: "IN02", value: 107.5278 },
    { date: "2024-01-02", bondType: "IN02", value: 107.45 },
    { date: "2024-01-03", bondType: "IN02", value: 107.5488 },
    { date: "2024-01-04", bondType: "IN02", value: 107.6 },
    { date: "2024-01-05", bondType: "IN02", value: 107.7 },
    { date: "2024-01-06", bondType: "IN02", value: 107.8 },
    { date: "2024-01-07", bondType: "IN02", value: 107.9 },
    { date: "2024-01-08", bondType: "IN02", value: 108.0 },
    { date: "2024-01-09", bondType: "IN02", value: 108.1 },
    { date: "2024-01-10", bondType: "IN02", value: 108.2 },
    { date: "2024-01-01", bondType: "IN05", value: 110.85 },
    { date: "2024-01-02", bondType: "IN05", value: 110.7 },
    { date: "2024-01-03", bondType: "IN05", value: 110.8 },
    { date: "2024-01-04", bondType: "IN05", value: 110.9 },
    { date: "2024-01-05", bondType: "IN05", value: 111.0 },
    { date: "2024-01-06", bondType: "IN05", value: 111.1 },
    { date: "2024-01-07", bondType: "IN05", value: 111.2 },
    { date: "2024-01-08", bondType: "IN05", value: 111.3 },
    { date: "2024-01-09", bondType: "IN05", value: 111.4 },
    { date: "2024-01-10", bondType: "IN05", value: 111.5 },
    { date: "2024-01-01", bondType: "IN07", value: 113.7 },
    { date: "2024-01-02", bondType: "IN07", value: 113.85 },
    { date: "2024-01-03", bondType: "IN07", value: 113.75 },
    { date: "2024-01-04", bondType: "IN07", value: 113.9 },
    { date: "2024-01-05", bondType: "IN07", value: 114.0 },
    { date: "2024-01-06", bondType: "IN07", value: 114.1 },
    { date: "2024-01-07", bondType: "IN07", value: 114.2 },
    { date: "2024-01-08", bondType: "IN07", value: 114.3 },
    { date: "2024-01-09", bondType: "IN07", value: 114.4 },
    { date: "2024-01-10", bondType: "IN07", value: 114.5 },
    { date: "2024-01-01", bondType: "IN10", value: 99.54 },
    { date: "2024-01-02", bondType: "IN10", value: 99.63 },
    { date: "2024-01-03", bondType: "IN10", value: 99.56 },
    { date: "2024-01-04", bondType: "IN10", value: 99.5 },
    { date: "2024-01-05", bondType: "IN10", value: 99.55 },
    { date: "2024-01-06", bondType: "IN10", value: 99.6 },
    { date: "2024-01-07", bondType: "IN10", value: 99.65 },
    { date: "2024-01-08", bondType: "IN10", value: 99.7 },
    { date: "2024-01-09", bondType: "IN10", value: 99.75 },
    { date: "2024-01-10", bondType: "IN10", value: 99.8 },
    { date: "2024-01-01", bondType: "IN20", value: 120.75 },
    { date: "2024-01-02", bondType: "IN20", value: 120.75 },
    { date: "2024-01-03", bondType: "IN20", value: 120.75 },
    { date: "2024-01-04", bondType: "IN20", value: 120.8 },
    { date: "2024-01-05", bondType: "IN20", value: 120.85 },
    { date: "2024-01-06", bondType: "IN20", value: 120.9 },
    { date: "2024-01-07", bondType: "IN20", value: 121.0 },
    { date: "2024-01-08", bondType: "IN20", value: 121.1 },
    { date: "2024-01-09", bondType: "IN20", value: 121.2 },
    { date: "2024-01-10", bondType: "IN20", value: 121.3 },
    { date: "2024-01-01", bondType: "IN25", value: 120.79 },
    { date: "2024-01-02", bondType: "IN25", value: 120.004 },
    { date: "2024-01-03", bondType: "IN25", value: 120.0005 },
    { date: "2024-01-04", bondType: "IN25", value: 120.9 },
    { date: "2024-01-05", bondType: "IN25", value: 120.95 },
    { date: "2024-01-06", bondType: "IN25", value: 121.0 },
    { date: "2024-01-07", bondType: "IN25", value: 121.05 },
    { date: "2024-01-08", bondType: "IN25", value: 121.1 },
    { date: "2024-01-09", bondType: "IN25", value: 121.15 },
    { date: "2024-01-10", bondType: "IN25", value: 121.2 },
  ];

  useEffect(() => {
    // Fetch initial stock data on component mount
    setLoading(true);
    fetchStockData(symbol);
    // Initialize bond data
    setBondData(bondDataSample);
  }, []); // Empty dependency array to run only once

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

  const handleBondTypeChange = (e) => {
    setSelectedBondType(e.target.value);
  };

  // Filter bond data based on selected bond type
  const filteredBondData = bondData.filter(
    (bond) => bond.bondType === selectedBondType
  );

  // Prepare data for the stock chart
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

  // Prepare data for the bond chart
  const bondChartData = {
    labels: filteredBondData.map(({ date }) => date),
    datasets: [
      {
        label: `Bond Type: ${selectedBondType}`,
        data: filteredBondData.map(({ value }) => value),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
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
      <h1 className="text-2xl font-bold mb-4">Stock High Prices and Bonds</h1>
      <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        onKeyPress={handleKeyPress} // Add the key press handler
        placeholder="Enter stock symbol (e.g., AAPL)"
        className="border border-gray-300 p-2 rounded mb-4"
      />
      <div className="mb-4">
        <label htmlFor="bondType" className="mr-2">
          Select Bond Type:
        </label>
        <select
          id="bondType"
          value={selectedBondType}
          onChange={handleBondTypeChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="IN01">IN01</option>
          <option value="IN02">IN02</option>
          <option value="IN05">IN05</option>
          <option value="IN07">IN07</option>
          <option value="IN10">IN10</option>
          <option value="IN20">IN20</option>
          <option value="IN25">IN25</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 p-10 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Stock Prices</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={stockChartData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">
            Average Prices Over Years
          </h2>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={averageChartData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Bond Prices</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={bondChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
