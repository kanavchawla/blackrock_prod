import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Lms = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/allMediaUploads"
        );
        setVideos(response.data);
        console.log(videos);
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

  return (
    <div>
      <div className="heading flex flex-row flex-wrap ml-auto mr-auto mt-10 justify-center min-w-full">
        <h1 className="text-5xl font-bold">Learning Management System</h1>
      </div>
      <div className="flex flex-col flex-wrap mt-10 ml-10 self-center">
        <label htmlFor="lms" className="p-3">
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
        {/* card starts */}
        {filteredVideos.map((video, index) => (
          <div className="card bg-base-100 w-96 shadow-xl mt-10 ml-auto mr-auto min-w-96">
            <figure>
              <video src={video.url} controls></video>
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {video.title}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>{video.name}</p>
              <div className="card-actions justify-end">
                {video.videoTag.map((tag, index) => (
                  <div className="badge badge-outline" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          //card ends
        ))}
      </div>
    </div>
  );
};

export default Lms;
