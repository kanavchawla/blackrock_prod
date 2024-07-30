import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

const AnswerQuestionPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/questions/${id}`);
      setQuestion(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching question');
      setLoading(false);
      console.error('Error fetching question:', err);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/questions/${id}`, { answer });
      setQuestion(response.data);
      setAnswer('');
      setIsModalOpen(true); // Open the modal on successful submission
    } catch (err) {
      setError('Error submitting answer');
      console.error('Error submitting answer:', err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="container mx-auto p-6 max-w-xl"><p className="text-center">Loading...</p></div>;
  }

  if (error) {
    return <div className="container mx-auto p-6 max-w-xl"><p className="text-red-500 text-center">{error}</p></div>;
  }

  if (!question) {
    return <div className="container mx-auto p-6 max-w-xl"><p className="text-center">Question not found.</p></div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Answer Question</h1>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
        <p className="text-lg mb-4">{question.question}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
        <input
          type="text"
          className="input input-bordered w-full p-2 mb-4"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Answers</h2>
        <ul className="space-y-2">
          {question.answers.map((ans, index) => (
            <li key={index} className="border p-4 mb-2 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg">
              {ans}
            </li>
          ))}
        </ul>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Thank You Modal"
        className="modal-content bg-white bg-opacity-90 shadow-lg rounded-lg p-6 border border-gray-200"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Thank You!</h2>
        <p className="text-center mb-6">Thank you for your answer. Your contribution is valuable!</p>
        <button onClick={closeModal} className="btn btn-primary mx-auto block">Close</button>
      </Modal>
    </div>
  );
};

export default AnswerQuestionPage;
