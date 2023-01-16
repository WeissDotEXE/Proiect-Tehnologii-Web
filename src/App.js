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
import NoteContent from "./pages/NoteContent/NoteContent";
import CreateNote from "./pages/CreateNote/CreateNote";
function App() {
  const currentPage = useLocation();

  return (
    <div>
      {/* <Header /> */}
      <div>
        {currentPage.pathname !== "/login" &&
          currentPage.pathname !== "/register" && (
            <Navbar currentPage={currentPage.pathname} />
          )}
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/studygroup" element={<StudyGroupPage />} />
          <Route
            path="/studygroup/:groupId/:groupName"
            element={<StudyGroupMessage />}
          />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/notes/:id" element={<NoteContent />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/createstudygroup" element={<CreateStudyGroup />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
