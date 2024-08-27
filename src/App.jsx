import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { menuRoutes } from "./components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <div id="main">
        <Router>
          <Routes>
            {menuRoutes.map((route, index) => {
              const Layout = route.layout || React.Fragment;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Layout>{route.element}</Layout>}
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
