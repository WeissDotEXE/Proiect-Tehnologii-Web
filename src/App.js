import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import StudyGroupPage from "./pages/StudyGroupPage/StudyGroupPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CreateStudyGroup from "./pages/CreateStudyGroup/CreateStudyGroup";
import StudyGroupMessage from "./pages/StudyGroupMessage/StudyGroupMessage";
import { useLocation } from "react-router-dom";
import NotePage from "./pages/NotePage/NotePage";
import Note from "./components/Note/Note";
function App() {
  const currentPage = useLocation();

  return (
    <div>
      {/* <Header /> */}
      <div>
        {currentPage.pathname !== "/login" && (
          <Navbar currentPage={currentPage.pathname} />
        )}
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/studygroup" element={<StudyGroupPage />} />
          <Route
            path="/studygroup/:groupId/:groupName"
            element={<StudyGroupMessage />}
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/createstudygroup" element={<CreateStudyGroup />} />
          <Route path="/notes/:userID" element={<NotePage />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
