
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import AddGame from "./pages/AddGame"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Profile from "./pages/Profile/Profile";
import AuthChecker from "./components/AuthChecker"
import "./index.css"

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Leaderboard />} />
      <Route exact path='/game/add' element={<AddGame />} />

      <Route exact path='/login' element={<LoginPage />} />

      <Route exact path="/register" element={<RegisterPage />} />


      {/*Private Routes*/}
      <Route element={<AuthChecker />}>
        <Route exact path='/my-profile' element={<Profile />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;