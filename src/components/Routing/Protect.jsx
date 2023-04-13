import { useContext } from "react";
import { AuthContext } from "../ContextAPI";
import { Navigate } from "react-router-dom";

function Protect({ children }) {
  const { isloggedin } = useContext(AuthContext);
  if (isloggedin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default Protect;