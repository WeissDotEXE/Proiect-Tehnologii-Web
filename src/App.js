import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Loginform";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
export default App;
