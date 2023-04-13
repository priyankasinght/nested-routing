import { useContext } from "react";
import { AuthContext } from "./ContextAPI";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/tech">Technologies</Link>
        <Link to="/contact">ContactUs</Link>
        <button
          className="logout-btn"
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
