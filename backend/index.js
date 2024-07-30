const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const { PythonShell } = require('python-shell');
const axios = require("axios");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
app.use(bodyParser.json());
const { exec } = require('child_process');

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());
app.use("/api", require("./routes/lmsRoutes.js"));
app.use("/api", require("./routes/Auth.js"));

app.post("/generate-poster", (req, res) => {
  const { companyName, postDescription } = req.body;

  const prompt = `Generate a poster for ${companyName} in english. The poster should attract people by highlighting: ${postDescription}. Create a simple poster.`;

  const options = {
    method: "POST",
    hostname: "open-ai21.p.rapidapi.com",
    port: null,
    path: "/texttoimage2",
    headers: {
      "x-rapidapi-key": "e9b0c87e6amsh6a6a105e6646513p139ac4jsn2172b23e94ea",
      "x-rapidapi-host": "open-ai21.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  const request = https.request(options, (response) => {
    const chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      res.json(JSON.parse(body));
    });
  });

  request.write(
    JSON.stringify({
      text: prompt,
    })
  );
  request.end();
});



app.post('/predict', (req, res) => {
  const { company, amount, time } = req.body;

  if (!company || !amount || !time) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const script = `python predict.py ${company} ${amount} ${time}`;

  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    try {
      res.json(JSON.parse(stdout));
    } catch (parseError) {
      console.error(`Parse Error: ${parseError.message}`);
      res.status(500).json({ error: 'Failed to parse JSON output' });
    }
  });
});




const questionSchema = new mongoose.Schema({
  question: String,
  answers: [String],
});

const Question = mongoose.model('Question', questionSchema);

// API endpoints
app.post('/questions', async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).send(newQuestion);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});



// Endpoint to get a question by ID
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).send('Question not found');
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to update a question with a new answer
app.put('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).send('Question not found');
    question.answers.push(req.body.answer);
    await question.save();
    
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});
/////////////////////////////////////////////
app.listen(5000, async () => {
  console.log("connected to port : " + 5000);
  try {
    await mongoose.connect(
      "mongodb+srv://sverma4be21:7vh4djSQN9HoRhus@cluster0.tnnmrss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
