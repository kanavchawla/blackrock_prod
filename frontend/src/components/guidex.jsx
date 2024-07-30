import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import HashLoader from 'react-spinners/HashLoader';
const Guidex = () => {
  const [formData, setFormData] = useState({
    state: '',
    gender: '',
    age: '',
    invest: ''
  });
  const [options, setOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
    const genAI = new GoogleGenerativeAI("AIzaSyCLzLgikraSgNptmvZrMsGx9kWkVKbDo90");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = `Generate a json object on entrepreneurship option on the basis of ${formData.state},${formData.age},${formData.gender} and ${formData.invest} investments.Structure of json "entrepreneurship_options": [
    {
      "option_name": "Startup Accelerator",
      "description": "A program that provides mentorship, resources, and funding to early-stage startups.",
      "investment_range": {
        "minimum": 88000,
        "maximum": 9999999
      },
      "target_audience": "Founders with a validated idea and a strong team.",
      "benefits": [
        "Access to mentors and advisors",
        "Networking opportunities",
        "Funding",
        "Workspace",
        "Support services"
      ],
      "location": "UP",
      "website": "https://www.exampleaccelerator.com"
    },`;
    const result = await model.generateContent(prompt);
    const jsonString = JSON.parse(extractJsonString(result.response.text()));
    setOptions(jsonString.entrepreneurship_options);
    setShowPopup(true);
    setLoading(false);
    setFormData({
      state: '',
      gender: '',
      age: '',
      invest: ''
    });
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
              <h1 className="text-2xl font-semibold">Guided Entrepreneurship</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="State"
                    />
                    <label
                      htmlFor="state"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      State
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="gender"
                      name="gender"
                      type="text"
                      value={formData.gender}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Gender"
                    />
                    <label
                      htmlFor="gender"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Gender
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="age"
                      name="age"
                      type="text"
                      value={formData.age}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Age"
                    />
                    <label
                      htmlFor="age"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Age
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="invest"
                      name="invest"
                      type="text"
                      value={formData.invest}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Initial Investment"
                    />
                    <label
                      htmlFor="invest"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Initial Investment
                    </label>
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
          <div className="loader"><HashLoader color="white" /></div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md mx-auto z-50 max-h-[90vh] overflow-y-auto" style={{minWidth:"806px"}}>
            <h2 className="text-2xl font-bold mb-4 text-black">Entrepreneurship Options</h2>
            <button onClick={handleClosePopup} className="absolute top-4 right-4 text-black">X</button>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div key={index} className="bg-white bg-opacity-25 p-4 rounded-lg text-white">
                  <h3 className="text-xl font-semibold text-black"><strong>{option.option_name}</strong></h3>
                  <p>{option.description}</p>
                  <p><strong className='text-black'>Investment Range:</strong> ${option.investment_range.minimum} - ${option.investment_range.maximum}</p>
                  <p><strong className='text-black'>Target Audience:</strong> {option.target_audience}</p>
                  <ul className="list-disc list-inside">
                    <strong className='text-black'>Benefits:</strong>
                    {option.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <a href={option.website} target="_blank" rel="noopener noreferrer" className="text-blue-300">Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guidex;
