import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loader from "./loader"; // Import your loader component

const extractJsonString = (text) => {
  const jsonMatch = text.match(/(\{.*\})/s);
  if (jsonMatch) {
    return jsonMatch[1];
  } else {
    throw new Error("No JSON string found in response");
  }
};

const App = () => {
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const sendData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        company,
        amount: parseFloat(amount),
        time: parseInt(time, 10),
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const fetchAIAnalysis = async () => {
        const genAI = new GoogleGenerativeAI(
          "AIzaSyCLzLgikraSgNptmvZrMsGx9kWkVKbDo90"
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Analyze the investment prediction data based on the following inputs and outputs:

        Inputs:
        - Company Name: ${company}
        - Initial Investment Amount: $${amount}
        - Time Period (in years): ${time}

        Outputs:
        - Risk Factor: ${100 - data.risk_factor}
        - Return on Investment: $${data.investment_return}

        Please provide an in-depth analysis that includes:
        1. **Investment Insights**:
           - Summarize what the risk factor indicates about the investment opportunity.
           - Explain the implications of the return on investment based on the given amount and time.

        2. **Investment Suitability**:
           - Analyze whether the investment is suitable given the risk factor and return.
           - Consider factors like the amount invested and the time period.

        3. **Recommendations**:
           - Provide recommendations on whether the investment is advisable based on the data.
           - Include any potential risks or benefits that should be considered.

        4. **Additional Context**:
           - Discuss any other relevant factors that could impact the investment decision.
           - If applicable, suggest improvements or adjustments to optimize the investment outcome.

        Format the response as follows:
        {
          "investment_insights": "Detailed insights on the investment based on the risk factor and return.",
          "investment_suitability": "Analysis of the suitability of the investment given the inputs.",
          "recommendations": "Recommendations based on the provided data and analysis.",
          "additional_context": "Any other relevant information or context."
        }
      `;

        try {
          const result = await model.generateContent(prompt);
          const jsonString = extractJsonString(result.response.text());
          const analysis = JSON.parse(jsonString);
          setOptions([analysis]);
          setShowResults(true);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchAIAnalysis();
    }
  }, [data, company, amount, time]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Prediction Data</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Company:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input input-bordered w-full mt-1"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered w-full mt-1"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Time:
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input input-bordered w-full mt-1"
              placeholder="in years"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Send Data
        </button>
      </form>
      {loading && <Loader />}
      {error && <p className="mt-4 text-red-500">Error: {error.message}</p>}
      {data && (
        <div className="mt-4 flex flex-wrap w-full max-w-4xl justify-center">
          <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-md flex flex-col justify-center items-center">
              <ReactSpeedometer
                value={100 - data.risk_factor}
                maxValue={100}
                currentValueText={`Risk Factor: ${100 - data.risk_factor}`}
                needleColor="red"
                startColor="green"
                segments={10}
                endColor="blue"
                height={400}
                width={400}
                ringWidth={50}
                needleHeightRatio={0.8}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold mb-2 text-center">
                Investment Summary
              </h2>
              <div className="text-center">
                <p>
                  <strong>Initial Investment:</strong> ${amount}
                </p>
                <p>
                  <strong>Return on Investment:</strong> $
                  {data.investment_return}
                </p>
                <p>
                  <strong>Percentage Change:</strong>
                  <span
                    className={
                      (data.investment_return - amount) / amount >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {(
                      ((data.investment_return - amount) / amount) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showResults && (
        <div className="mt-4 flex flex-wrap w-full max-w-5xl justify-center">
          <div className="w-full md:w-4/5 p-2 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Analysis Report
              </h2>
              <div className="text-left w-full max-w-3xl">
                {options.map((option, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold mb-2">
                      Investment Insights
                    </h3>
                    <p className="mb-4">{option.investment_insights}</p>
                    <h3 className="text-lg font-bold mb-2">
                      Investment Suitability
                    </h3>
                    <p className="mb-4">{option.investment_suitability}</p>
                    <h3 className="text-lg font-bold mb-2">Recommendations</h3>
                    <p className="mb-4">{option.recommendations}</p>
                    <h3 className="text-lg font-bold mb-2">
                      Additional Context
                    </h3>
                    <p>{option.additional_context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
