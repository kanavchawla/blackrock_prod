import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/questions');
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching questions');
        setLoading(false);
        console.error('Error fetching questions:', err);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-10 text-center text-blue-600">All Questions</h1>
      <ul className="space-y-4">
        {questions.length === 0 ? (
          <p className="text-center text-lg">No questions available.</p>
        ) : (
          questions.map((q) => (
            <li 
              key={q._id} 
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-4">
              <p className="text-lg mb-10">{q.question}</p>
              <Link to={`/answerquestion/${q._id}`} className="btn btn-primary">
                Answer
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewQuestionsPage;
