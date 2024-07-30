const express = require("express");
const router2 = express.Router();
const cloudinary = require("cloudinary").v2;
const Lms = require("../Models/lmsModel");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: "dqf4waory",
  api_key: "636383912193541",
  api_secret: "lrJvdfaT9KAcF86hqVa3q7pg2WU",
});

const uploadedMedia = [];

router2.post("/mediaUpload", async (req, res) => {
  // console.log("hi");
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).send({ msg: "No files were uploaded" });

    // console.log(req.files);
    const file = req.files.file;

    if (file.size > 1024 * 1024 * 100) {
      // Increased video size to 100MB
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (!file.mimetype.startsWith("video/")) {
      // Only allow video formats
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect" });
    }

    const uploadOptions = { folder: "test", resource_type: "video" };

    cloudinary.uploader.upload(
      file.tempFilePath,
      uploadOptions,
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);
        const mediaMetadata = {
          public_id: result.public_id,
          url: result.secure_url,
          resource_type: result.resource_type,
        };
        uploadedMedia.push(mediaMetadata);

        const { name, title, description, location, videoTag } = req.body;
        const newContent = new Lms({
          name,
          title,
          url: result.secure_url,
          description,
          location,
          videoTag: videoTag.split(","),
        });
        const savedContent = await newContent.save();

        res.json(savedContent);
      }
    );
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router2.get("/allMediaUploads", async (req, res) => {
  try {
    const mediaUploads = await Lms.find({});
    res.json(mediaUploads);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router2;
