import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import WeatherPage from "./components/WeatherPage";
import LoginPage from "./components/LoginPage";
import './styles/themes.css';

export const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    // Apply dark or light class to the body element
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar setCategory={setCategory} toggleDarkMode={toggleDarkMode} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} darkMode={darkMode}/>} />
        <Route path="/" element={<NewsBoard category={category} darkMode={darkMode} />} />
        <Route path="/weather" element={<WeatherPage darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

export default App;
