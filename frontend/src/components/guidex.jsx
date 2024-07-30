import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import HashLoader from "react-spinners/HashLoader";

const Guidex = () => {
  const [formData, setFormData] = useState({
    familiarity: "",
    reasonsNotConsidered: [],
    lackInformation: "",
    concernAmountRequired: "",
    suitability: "",
    trustFinancialInstitutions: "",
    marketFluctuations: "",
    marketDownturns: "",
    concernLoss: "",
    economicConditions: "",
    complexity: "",
    returnsJustifyRisks: "",
  });

  const [options, setOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value],
    });
  };

  function extractJsonString(str) {
    const regex = /```json([\s\S]*?)```/;
    const match = str.match(regex);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const genAI = new GoogleGenerativeAI(
      "AIzaSyCLzLgikraSgNptmvZrMsGx9kWkVKbDo90"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Analyze the user's perception about the capital market based on the following responses:
    Familiarity with capital investments: ${formData.familiarity}
    Main reasons for not considering capital investments: ${formData.reasonsNotConsidered.join(
      ", "
    )}
    Lack of sufficient information to make informed investment decisions: ${
      formData.lackInformation
    }
    Concern about the amount of money required to start investing: ${
      formData.concernAmountRequired
    }
    Belief that capital investments are suitable for financial situation: ${
      formData.suitability
    }
    Trust in financial institutions and investment firms: ${
      formData.trustFinancialInstitutions
    }
    Concern about fluctuations and volatility in the investment market: ${
      formData.marketFluctuations
    }
    Belief that the potential for market downturns outweighs the benefits of investing: ${
      formData.marketDownturns
    }
    Concern about the possibility of losing invested money: ${
      formData.concernLoss
    }
    Influence of current economic conditions on willingness to invest: ${
      formData.economicConditions
    }
    Perception of complexity or difficulty in managing capital investments: ${
      formData.complexity
    }
    Belief that potential returns on capital investments justify the risks involved: ${
      formData.returnsJustifyRisks
    }

    Structure of the response:
    {
      "user_perception": [
        "Point 1: User's perception",
        "Point 2: User's perception",
        ...
      ],
      "hesitations": [
        {
          "reason": "User's hesitation reason",
          "explanation": "Why this perception might be incorrect with factual data with numbers as example"
        },
        ...
      ]
    }`;

    const result = await model.generateContent(prompt);
    const jsonString = extractJsonString(result.response.text());
    const analysis = JSON.parse(jsonString);
    setOptions([analysis]);
    setShowPopup(true);
    setLoading(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Capital Investment Perception
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <label
                      htmlFor="familiarity"
                      className="block text-gray-600 text-sm"
                    >
                      Familiarity with capital investments:
                    </label>
                    <select
                      id="familiarity"
                      name="familiarity"
                      value={formData.familiarity}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Very familiar">Very familiar</option>
                      <option value="Somewhat familiar">
                        Somewhat familiar
                      </option>
                      <option value="Not very familiar">
                        Not very familiar
                      </option>
                      <option value="Not familiar at all">
                        Not familiar at all
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-600 text-sm">
                      Main reasons for not considering capital investments:
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Lack of knowledge"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">Lack of knowledge</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Fear of losing money"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">Fear of losing money</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Insufficient funds to invest"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">
                          Insufficient funds to invest
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Lack of trust in financial institutions"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">
                          Lack of trust in financial institutions
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Complexity of investments"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">Complexity of investments</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Prefer other forms of savings/investments"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">
                          Prefer other forms of savings/investments
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="reasonsNotConsidered"
                          value="Other"
                          onChange={handleMultiChange}
                        />
                        <span className="ml-2">Other (please specify)</span>
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="lackInformation"
                      className="block text-gray-600 text-sm"
                    >
                      Do you feel that you lack sufficient information to make
                      informed investment decisions?
                    </label>
                    <select
                      id="lackInformation"
                      name="lackInformation"
                      value={formData.lackInformation}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="concernAmountRequired"
                      className="block text-gray-600 text-sm"
                    >
                      Are you concerned about the amount of money required to
                      start investing?
                    </label>
                    <select
                      id="concernAmountRequired"
                      name="concernAmountRequired"
                      value={formData.concernAmountRequired}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Very concerned">Very concerned</option>
                      <option value="Somewhat concerned">
                        Somewhat concerned
                      </option>
                      <option value="Not very concerned">
                        Not very concerned
                      </option>
                      <option value="Not concerned at all">
                        Not concerned at all
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="suitability"
                      className="block text-gray-600 text-sm"
                    >
                      Do you believe that capital investments are suitable for
                      your financial situation?
                    </label>
                    <select
                      id="suitability"
                      name="suitability"
                      value={formData.suitability}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="trustFinancialInstitutions"
                      className="block text-gray-600 text-sm"
                    >
                      How much do you trust financial institutions and
                      investment firms?
                    </label>
                    <select
                      id="trustFinancialInstitutions"
                      name="trustFinancialInstitutions"
                      value={formData.trustFinancialInstitutions}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Completely trust">Completely trust</option>
                      <option value="Mostly trust">Mostly trust</option>
                      <option value="Somewhat trust">Somewhat trust</option>
                      <option value="Do not trust at all">
                        Do not trust at all
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="marketFluctuations"
                      className="block text-gray-600 text-sm"
                    >
                      How do you feel about the fluctuations and volatility in
                      the investment market?
                    </label>
                    <select
                      id="marketFluctuations"
                      name="marketFluctuations"
                      value={formData.marketFluctuations}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Very concerned">Very concerned</option>
                      <option value="Somewhat concerned">
                        Somewhat concerned
                      </option>
                      <option value="Not very concerned">
                        Not very concerned
                      </option>
                      <option value="Not concerned at all">
                        Not concerned at all
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="marketDownturns"
                      className="block text-gray-600 text-sm"
                    >
                      Do you think the potential for market downturns outweighs
                      the benefits of investing?
                    </label>
                    <select
                      id="marketDownturns"
                      name="marketDownturns"
                      value={formData.marketDownturns}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="concernLoss"
                      className="block text-gray-600 text-sm"
                    >
                      How concerned are you about the possibility of losing your
                      invested money?
                    </label>
                    <select
                      id="concernLoss"
                      name="concernLoss"
                      value={formData.concernLoss}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Very concerned">Very concerned</option>
                      <option value="Somewhat concerned">
                        Somewhat concerned
                      </option>
                      <option value="Not very concerned">
                        Not very concerned
                      </option>
                      <option value="Not concerned at all">
                        Not concerned at all
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="economicConditions"
                      className="block text-gray-600 text-sm"
                    >
                      How do current economic conditions influence your
                      willingness to invest?
                    </label>
                    <select
                      id="economicConditions"
                      name="economicConditions"
                      value={formData.economicConditions}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Significantly decrease willingness">
                        Significantly decrease willingness
                      </option>
                      <option value="Somewhat decrease willingness">
                        Somewhat decrease willingness
                      </option>
                      <option value="No influence">No influence</option>
                      <option value="Somewhat increase willingness">
                        Somewhat increase willingness
                      </option>
                      <option value="Significantly increase willingness">
                        Significantly increase willingness
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="complexity"
                      className="block text-gray-600 text-sm"
                    >
                      Do you find capital investments too complex or difficult
                      to manage?
                    </label>
                    <select
                      id="complexity"
                      name="complexity"
                      value={formData.complexity}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="returnsJustifyRisks"
                      className="block text-gray-600 text-sm"
                    >
                      Do you feel that the potential returns on capital
                      investments justify the risks involved?
                    </label>
                    <select
                      id="returnsJustifyRisks"
                      name="returnsJustifyRisks"
                      value={formData.returnsJustifyRisks}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1 flex justify-center items-center mx-auto">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="loader">
            <HashLoader color="white" />
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div
            className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md mx-auto z-50 max-h-[90vh] overflow-y-auto"
            style={{ minWidth: "806px" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              Perception Analysis
            </h2>
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-black"
            >
              X
            </button>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-25 p-4 rounded-lg text-white"
                >
                  <h3 className="font-semibold">User Perception:</h3>
                  <ul className="list-disc ml-5">
                    {option.user_perception.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mt-4">
                    Reasons and Explanations:
                  </h3>
                  {option.hesitations.map((hesitation, idx) => (
                    <div key={idx} className="mt-2">
                      <p className="font-bold">Reason:</p>
                      <p>{hesitation.reason}</p>
                      <p className="font-bold">Explanation:</p>
                      <p>{hesitation.explanation}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guidex;
