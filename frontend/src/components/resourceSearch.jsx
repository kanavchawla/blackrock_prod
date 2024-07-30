import React, { useState } from 'react';
import axios from 'axios';

const ResourceSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyB3VmgQVCT5Ad7JsUCDi4w2fhFCLl4Zj7s';
  const SEARCH_ENGINE_ID = 'b1b0d066933374619';

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          key: API_KEY,
          cx: SEARCH_ENGINE_ID,
          q: query,
          num: 5, // Limit the number of results to 5
        },
      });
      setResults(response.data.items || []);
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg shadow hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <ul className="space-y-4 mt-6">
        {results.slice(0, 5).map((result) => (
          <li key={result.cacheId} className="border-b border-gray-200 pb-4">
            <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {result.title}
            </a>
            <p className="text-gray-600 mt-1">{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceSearch;
