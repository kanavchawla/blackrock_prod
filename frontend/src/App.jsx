import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import Lms from "./components/lms";
import Guidex from "./components/guidex";
import Footer from "./components/footer";
import VideoUpload from "./components/VideoUpload";
import Chatbot from "./components/chatbot";
import ResourceSearch from "./components/resourceSearch";
import AskQuestionPage from "./components/AskQuestion";
import ViewQuestionsPage from "./components/ViewQuestion";
import AnswerQuestionPage from "./components/AnswerQuestion";
import Compare from "./components/compare";
function App() {
  return (
    <>
      <Nav />
      <Chatbot />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lms" element={<Lms />} />
          <Route path="/uploadvideo" element={<VideoUpload />} />
          <Route path="/guidex" element={<Guidex />} />
          <Route path="/search" element={<ResourceSearch />} />
          <Route path="/AskQuestion" element={<AskQuestionPage />} />
          <Route path="/ViewQuestion" element={<ViewQuestionsPage />} />
          <Route path="/answerquestion/:id" element={<AnswerQuestionPage />} />

          <Route path="/compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
