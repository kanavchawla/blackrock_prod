import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    title: "Tech Startup Success",
    description: "A deep dive into the rapid growth of a tech startup.",
    story: `
      **Background**: Tech Innovators Inc. was founded in 2015 by three college friends with a vision to revolutionize the tech industry. Starting from a small garage, they built a product that quickly caught the attention of major investors.

      **Growth Factors**:
      - **Innovative Technology**: Their cutting-edge technology provided solutions that were previously unavailable.
      - **Strategic Partnerships**: Formed key alliances with industry giants to expand their market reach.
      - **Effective Marketing**: Utilized a combination of social media campaigns and influencer partnerships to drive brand awareness.

      **Results**:
      - **Market Penetration**: Achieved a 50% market share in their segment within 3 years.
      - **Financial Milestones**: Reached a valuation of $5 billion in 2020.
      - **Customer Base**: Expanded from a local customer base to a global presence.

      **Lessons Learned**:
      - **Adaptability**: The ability to pivot quickly in response to market feedback was crucial.
      - **Team Dynamics**: Building a strong, cohesive team was essential for scaling the company effectively.
    `
  },
  {
    title: "Real Estate Boom",
    description: "An analysis of the booming real estate market in urban centers.",
    story: `
      **Background**: The real estate market in major urban centers has experienced unprecedented growth over the last decade, driven by various economic and demographic factors.

      **Growth Factors**:
      - **Urbanization**: Increasing migration to cities has driven demand for residential and commercial properties.
      - **Low-Interest Rates**: Historically low mortgage rates have encouraged property investments.
      - **Population Growth**: Rising population in cities has led to a surge in real estate development.

      **Results**:
      - **Property Values**: Average property values have increased by over 40% in the past 5 years.
      - **Investment Opportunities**: New development projects have generated significant returns for investors.
      - **Market Trends**: The rise of mixed-use developments and smart buildings.

      **Lessons Learned**:
      - **Market Research**: Thorough research and understanding of local markets are crucial for successful investments.
      - **Risk Management**: Diversifying investments across different property types can mitigate risks.
    `
  },
  {
    title: "Mutual Fund Mastery",
    description: "Insights into successful mutual fund management.",
    story: `
      **Background**: Mutual funds have become a preferred investment vehicle for many, offering diversified portfolios and professional management.

      **Key Strategies**:
      - **Asset Allocation**: Successful funds use a balanced mix of equities, bonds, and other assets to achieve growth while managing risk.
      - **Risk Management**: Employing strategies like diversification and hedging to protect against market volatility.
      - **Performance Tracking**: Regular monitoring and adjustment of the fund’s portfolio to align with investment goals.

      **Results**:
      - **Consistent Returns**: Top-performing funds have achieved annualized returns of 12-15% over the past decade.
      - **Investor Satisfaction**: High levels of investor trust and satisfaction due to transparent management and performance.

      **Lessons Learned**:
      - **Investment Discipline**: Sticking to a well-defined investment strategy and avoiding impulsive decisions is key.
      - **Continuous Learning**: Keeping abreast of market trends and economic indicators enhances fund management effectiveness.
    `
  },
  {
    title: "Private Equity Expansion",
    description: "Exploring the growth of private equity investments.",
    story: `
      **Background**: Private equity investments have surged as investors seek higher returns and more control over their investments.

      **Growth Factors**:
      - **High Returns**: Private equity offers the potential for higher returns compared to traditional investments.
      - **Strategic Management**: Investors often take an active role in managing the companies they invest in, driving growth and profitability.
      - **Market Expansion**: Increased interest from institutional investors and high-net-worth individuals.

      **Results**:
      - **Investment Growth**: Private equity assets under management have grown by over 30% in the last five years.
      - **Successful Exits**: Numerous high-profile IPOs and acquisitions have provided lucrative returns for investors.

      **Lessons Learned**:
      - **Due Diligence**: Thorough evaluation of investment opportunities and management teams is essential.
      - **Value Creation**: Actively participating in the growth and strategic direction of portfolio companies can significantly enhance returns.
    `
  }
];

const CaseStudyPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCaseStudyClick = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeModal = () => {
    setSelectedCaseStudy(null);
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
          <h1 className="text-5xl font-bold">Case Studies</h1>
        </div>
        <div className="container flex flex-col items-center mt-10">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-xl transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleCaseStudyClick(caseStudy)}
            >
              <h2 className="text-2xl font-bold mb-2">{caseStudy.title}</h2>
              <p>{caseStudy.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-3xl relative overflow-y-auto h-3/4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full focus:outline-none hover:bg-red-600"
              >
                X
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedCaseStudy.title}</h2>
              <div className="text-lg whitespace-pre-line leading-relaxed">
                {selectedCaseStudy.story}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPage;
