// src/components/CustomerList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customers");
        setCustomers(response.data);
        setLoading(false);
        if (customers) console.log("dekh hi le ab: ", customers);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-4">Person of Interest Calculator</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-3 px-4 border-b border-gray-300">Username</th>
            <th className="py-3 px-4 border-b border-gray-300">Age</th>
            <th className="py-3 px-4 border-b border-gray-300">Income Level</th>
            <th className="py-3 px-4 border-b border-gray-300">
              Education Level
            </th>
            <th className="py-3 px-4 border-b border-gray-300">Occupation</th>
            <th className="py-3 px-4 border-b border-gray-300">
              Risk Survey Score
            </th>
            <th className="py-3 px-4 border-b border-gray-300">
              Time to Purchase
            </th>
            <th className="py-3 px-4 border-b border-gray-300">
              Finance Education
            </th>
            <th className="py-3 px-4 border-b border-gray-300">
              Content Engagement Time
            </th>
            <th className="py-3 px-4 border-b border-gray-300">Visits</th>
            <th className="py-3 px-4 border-b border-gray-300">Avg Time</th>
            <th className="py-3 px-4 border-b border-gray-300">
              Avg Order Value
            </th>
            <th className="py-3 px-4 border-b border-gray-300">
              Purchase Consistency
            </th>
            <th className="py-3 px-4 border-b border-gray-300">
              Person of Interest
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {customers &&
            customers.map((customer) => (
              <tr
                key={customer._id}
                className="hover:bg-gray-200 transition-colors duration-300"
              >
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.username}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.age}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.incomeLevel.label} (Weight:{" "}
                  {customer.incomeLevel.weight})
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.educationLevel}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.occupation}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.riskSurveyScore}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.timeToPurchase}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.financeEducation ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.contentEngagementTime}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.digitalEngagement.visits}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.digitalEngagement.avgTime}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.purchaseHistory.avgOrderValue}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.purchaseConsistency.lastThreeMonths.join(", ")}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {customer.personOfInterest ? "Yes" : "No"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
