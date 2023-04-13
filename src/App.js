import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./components/ContextAPI";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Routing/Contact";
import PageNotFound from "./components/Routing/PageNotFound";
import Technologies from "./components/Routing/Technologies";
import Html from "./components/Routing/Html";
import CSS from "./components/Routing/Css";
import Protect from "./components/Routing/Protect";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? <Nav /> : null}
      <Routes>
        <Route path="/" element={isloggedin ? <Home /> : <Login />} />

        <Route
          path="/tech"
          element={
            <Protect>
              <Technologies />
            </Protect>
          }
        >
          <Route path="" element={<Navigate to="html" />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<CSS />} />
        </Route>
        
        <Route
          path="/contact"
          element={isloggedin ? <Contact /> : <Navigate to="/" />}
        />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;