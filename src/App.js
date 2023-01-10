import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudyGroupPage from "./pages/StudyGroupPage/StudyGroupPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TaskPage from "./pages/TaskPage/TaskPage";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <div>
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
