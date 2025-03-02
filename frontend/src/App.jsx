import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import AddGame from "./pages/AddGame";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile/Profile";
import AuthChecker from "./components/AuthChecker";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <Sidebar />}

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Leaderboard />} />
          <Route exact path="/game/add" element={<AddGame />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />

          {}
          <Route element={<AuthChecker />}>
            <Route exact path="/my-profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
