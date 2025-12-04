import React from "react";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Detail from "./views/Detail.jsx";
import Settings from "./views/Settings.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Capstone Project Running</h1>
      <p>Select a component to display:</p>

      {/* TEMP SAMPLE VIEW — Change to real navigation later */}
      <Home />
    </div>
  );
}

export default App;
