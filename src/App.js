import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudyGroupPage from "./pages/StudyGroupPage/StudyGroupPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Navbar />
        <RegisterForm />

        <Routes>
          <Route path="/studygroup" element={<StudyGroupPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/taskpage" element={<TaskPage />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
