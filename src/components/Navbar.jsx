import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setCategory, toggleDarkMode, user, handleLogout }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setCategory(category);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-dark text-dark fs-4" onClick={() => handleCategoryClick("general")}>
            BTU News
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-light">
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("technology")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("business")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("sports")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("health")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick("entertainment")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => user && navigate("/weather")} style={{ cursor: user ? 'pointer' : 'not-allowed' }}>
                Weather
              </div>
            </li>
          </ul>
          <button className={`btn btn-secondary ms-auto`} onClick={toggleDarkMode}>Toggle Dark Mode</button>
          
          {user ? (
          <div className="user-info d-flex align-items-center">
            <span className="text-light me-3">{user.username}</span>
            <button className="btn btn-danger navbar-btn ms-3" onClick={handleLogout}>Logout</button>
          </div>
          ) : (
            <button className="btn btn-primary navbar-btn ms-auto" onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
