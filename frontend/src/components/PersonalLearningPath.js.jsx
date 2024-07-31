import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const investmentDomains = [
  {
    name: "Stocks",
    description: "Learn about buying, selling, and analyzing stocks.",
    details: `
      **Overview**: Stocks represent ownership in a company. Investing in stocks involves buying shares to gain profits through price appreciation and dividends.

      **Key Concepts**:
      - **Market Trends**: Understanding market movements and company performance.
      - **Investment Strategies**: Long-term vs. short-term investments, and risk management.
      - **Analysis Tools**: Using charts, financial reports, and news to make informed decisions.
    `
  },
  {
    name: "Mutual Funds",
    description: "Understand the dynamics of mutual fund investments.",
    details: `
      **Overview**: Mutual funds pool money from many investors to invest in a diversified portfolio of stocks, bonds, or other securities.

      **Key Concepts**:
      - **Types of Funds**: Equity, bond, and money market funds.
      - **Diversification**: Reducing risk by spreading investments across various assets.
      - **Fund Management**: Active vs. passive management and expense ratios.
    `
  },
  {
    name: "Bonds",
    description: "Get insights into bond markets and bond investments.",
    details: `
      **Overview**: Bonds are fixed-income securities where you lend money to a government or corporation in exchange for periodic interest payments.

      **Key Concepts**:
      - **Bond Types**: Government, corporate, and municipal bonds.
      - **Yield**: Understanding bond yield and its impact on investment returns.
      - **Risk Factors**: Interest rate risk and credit risk.
    `
  },
  {
    name: "Real Estate",
    description: "Explore investment opportunities in real estate.",
    details: `
      **Overview**: Real estate investment involves purchasing properties to generate income or capital gains.

      **Key Concepts**:
      - **Property Types**: Residential, commercial, and industrial properties.
      - **Investment Strategies**: Rental income, property flipping, and REITs.
      - **Market Analysis**: Evaluating property values and market trends.
    `
  },
  {
    name: "Angel Investing",
    description: "Learn how to invest in startups as an angel investor.",
    details: `
      **Overview**: Angel investing involves providing capital to startups in exchange for equity or convertible debt.

      **Key Concepts**:
      - **Investment Stages**: Seed funding and early-stage investments.
      - **Due Diligence**: Evaluating startup potential and risk.
      - **Exit Strategies**: Understanding potential returns and exit options.
    `
  },
  {
    name: "Private Equity",
    description: "Dive into private equity investments and strategies.",
    details: `
      **Overview**: Private equity involves investing in private companies or taking public companies private.

      **Key Concepts**:
      - **Investment Strategies**: Buyouts, venture capital, and growth capital.
      - **Value Creation**: Improving company performance and increasing value.
      - **Exit Strategies**: IPOs, mergers, and acquisitions.
    `
  }
];

const PersonalLearningPath = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleExploreClick = (domain) => {
    setSelectedDomain(domain);
  };

  const closeModal = () => {
    setSelectedDomain(null);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } w-64 z-50 shadow-lg`}
        style={{ transition: "transform 0.4s ease-in-out" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-600 pb-2">Menu</h2>
          <button
            className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            onClick={() => navigate("/lms")}
          >
            Back to LMS
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full shadow-md focus:outline-none"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-8"}`}>
        <div className="heading flex flex-row flex-wrap justify-center mt-10 min-w-full">
          <h1 className="text-5xl font-bold">Learning Path</h1>
        </div>
        <div className="container flex flex-col items-center mt-10">
          {investmentDomains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <h2 className="text-2xl font-bold mb-2">{domain.name}</h2>
              <p>{domain.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                onClick={() => handleExploreClick(domain)}
              >
                Explore {domain.name}
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDomain && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-3xl relative overflow-y-auto h-3/4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full focus:outline-none hover:bg-red-600"
              >
                X
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedDomain.name}</h2>
              <div className="text-lg whitespace-pre-line leading-relaxed">
                {selectedDomain.details}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalLearningPath;
