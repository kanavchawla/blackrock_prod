import React, { useState } from "react";
import axios from "axios";

function VideoUpload() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [videoTag, setVideoTag] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput && !videoTag.includes(tagInput)) {
      setVideoTag([...videoTag, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setVideoTag(videoTag.filter((t) => t !== tag));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("file", url);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("videoTag", videoTag.join(",")); // Sending tags as a comma-separated string

    try {
      const response = await axios.post(
        "http://localhost:5000/api/mediaUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error.response ? error.response.data : error.message); // Handle the error as needed
    }

    // setName("");
    // setTitle("");
    // setUrl("");
    // setDescription("");
    // setLocation("");
    // setTagInput([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Upload Video</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={handleTitleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Title"
                    />
                    <label
                      htmlFor="title"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Title
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="url"
                      name="url"
                      type="file"
                      accept="video/*"
                      onChange={handleUrlChange}
                      className="peer placeholder-transparent mt-6 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Video"
                    />
                    <label
                      htmlFor="url"
                      className="absolute left-0 -top-3.5 mt-3 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Video
                    </label>
                  </div>
                  <div className="relative mt-3">
                    <textarea
                      autoComplete="off"
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleDescriptionChange}
                      className="peer placeholder-transparent mt-3 h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Description"
                    ></textarea>
                    <label
                      htmlFor="description"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Description
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="location"
                      name="location"
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Location"
                    />
                    <label
                      htmlFor="location"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Location
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="videoTag"
                      name="videoTag"
                      type="text"
                      value={tagInput}
                      onChange={handleTagInputChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Video Tags"
                    />
                    <label
                      htmlFor="url"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Add tags
                    </label>
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="bg-blue-500 text-white mt-4 rounded-md px-2 py-1"
                    >
                      Add Tag
                    </button>
                    <div className="tags-container mt-2 flex flex-wrap">
                      {videoTag.map((tag) => (
                        <div
                          key={tag}
                          className="tag bg-blue-200 rounded-full px-2 py-1 mr-2 mt-2 flex items-center"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2 text-red-500"
                          >
                            x
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
