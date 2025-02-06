import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import WeatherPage from "./components/WeatherPage";
import './styles/themes.css'; 

export const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark" : "light"}>
        <Navbar setCategory={setCategory} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<NewsBoard category={category} darkMode={darkMode} />} />
          <Route path="/weather" element={<WeatherPage darkMode={darkMode}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
