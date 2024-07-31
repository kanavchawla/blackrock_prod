import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import Lms from "./components/lms";
import Guidex from "./components/guidex";
import Footer from "./components/footer";
import VideoUpload from "./components/VideoUpload";
import Chatbot from "./components/chatbot";
import Login from "./pages/login";
import Open from "./routing/OpenRoute";
import Protected from "./routing/ProtectedRoute";
import ResourceSearch from "./components/resourceSearch";
import AskQuestionPage from "./components/AskQuestion";
import ViewQuestionsPage from "./components/ViewQuestion";
import AnswerQuestionPage from "./components/AnswerQuestion";
import Compare from "./components/compare";
import PersonalLearningPath from "./components/PersonalLearningPath.js";
import CaseStudies from "./components/CaseStudies.jsx";
import Risk from "./components/risk";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomerList from "./components/InterestList.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageSwitcher />
        <Nav />

        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Open>
                <Login />
              </Open>
            }
          />
          <Route
            path="/lms"
            element={
              <Protected>
                <Lms />
              </Protected>
            }
          />
          <Route
            path="/uploadvideo"
            element={
              <Protected>
                <VideoUpload />
              </Protected>
            }
          />
          <Route
            path="/guidex"
            element={
              <Protected>
                <Guidex />
              </Protected>
            }
          />
          <Route path="/search" element={<ResourceSearch />} />
          <Route path="/AskQuestion" element={<AskQuestionPage />} />
          <Route
            path="/personal-learning-path"
            element={<PersonalLearningPath />}
          />
          <Route path="/ViewQuestion" element={<ViewQuestionsPage />} />
          <Route path="/answerquestion/:id" element={<AnswerQuestionPage />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/interestList" element={<CustomerList />} /><Route path="/risk" element={<Risk />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
