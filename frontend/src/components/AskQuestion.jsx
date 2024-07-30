import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AskQuestionPage = () => {
  const [question, setQuestion] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/questions', { question, answers: [] });
      console.log('Question saved:', response.data); // Log response to ensure correct storage
      setQuestion('');
      setIsModalOpen(true); // Open the modal on successful submission
    } catch (error) {
      console.error('Error saving question:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-md mb-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Ask a Question</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="question" className="label">
              <span className="label-text text-lg font-medium">Your Question</span>
            </label>
            <input
              id="question"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Submit
          </button>
        </form>
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
        <p className="text-center mb-6">Your question has been submitted and will be answered shortly by fellow community members.</p>
        <button onClick={closeModal} className="btn btn-primary mx-auto block">Close</button>
      </Modal>
    </div>
  );
};

export default AskQuestionPage;
