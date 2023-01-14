import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudyGroupPage from "./pages/StudyGroupPage/StudyGroupPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CreateStudyGroup from "./pages/CreateStudyGroup/CreateStudyGroup";
import { useLocation } from "react-router-dom";
function App() {
  const currentPage = useLocation();

  return (
    <div>
      {/* <Header /> */}
      <div>
        <Navbar currentPage={currentPage.pathname} />
        <Routes>
          <Route path="/studygroup" element={<StudyGroupPage />} />
          <Route path="/auth" element={<AuthPage />} />
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
