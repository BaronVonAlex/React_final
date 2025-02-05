import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import './styles/themes.css'; 

export const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar setCategory={setCategory} toggleDarkMode={toggleDarkMode} />
      <NewsBoard category={category} darkMode={darkMode} />
    </div>
  );
}

export default App;
