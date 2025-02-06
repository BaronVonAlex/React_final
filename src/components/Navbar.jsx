import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setCategory, toggleDarkMode }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-dark text-dark fs-4" onClick={() => handleCategoryClick("general")}>BTU News</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-light">
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("entertainment")}>Entertainment</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => navigate("/weather")}>Weather</div>
            </li>
          </ul>
          <button className={`btn btn-secondary ms-auto`} onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
