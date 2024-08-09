import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lms = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://blackrock-prod.onrender.com/api/allMediaUploads"
        );
        setVideos(response.data);
        const uniqueCategories = new Set(
          response.data.flatMap((video) => video.videoTag)
        );
        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.videoTag.includes(selectedCategory))
    : videos;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToLearningPath = () => {
    navigate("/personal-learning-path");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-56"
        } w-64 z-50 shadow-lg`}
        style={{ transition: "transform 0.4s ease-in-out" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-600 pb-2">
            Menu
          </h2>
          <button
            className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            onClick={navigateToLearningPath}
          >
            Scopes of this market
          </button>
          <button
            className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            onClick={() => navigate("/CaseStudies")}
          >
            Case Studies
          </button>
          <button
            className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            onClick={() => navigate("/uploadvideo")}
          >
            Upload Video
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
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-8"
        }`}
      >
        <div className="heading flex flex-row flex-wrap justify-center mt-10 min-w-full">
          <h1 className="text-5xl font-bold">Learning Management System</h1>
        </div>
        <div className="flex flex-col flex-wrap mt-10 ml-10 self-center">
          <label htmlFor="category" className="p-3">
            Filter by category:{" "}
          </label>
          <select
            className="select select-bordered w-full max-w-96"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="container flex flex-row flex-wrap mb-16">
          {filteredVideos.map((video, index) => (
            <div
              className="card bg-base-100 w-96 shadow-xl mt-10 ml-auto mr-auto min-w-96"
              key={index}
            >
              <figure>
                <video src={video.url} controls></video>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{video.title}</h2>
                <p>{video.name}</p>
                <div className="card-actions justify-end">
                  {video.videoTag.map((tag, tagIndex) => (
                    <div className="badge badge-outline" key={tagIndex}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lms;
