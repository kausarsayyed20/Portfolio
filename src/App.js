import React from "react";
import Introduction from "./Components/Introduction/Introduction.component.jsx";
import MyNavbar from "./Components/Navbar/MyNavbar.component.jsx";
import Skills from "./Components/Skills/Skills.component.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Introduction />
      <br />
      <Skills />

    </div>
  );
}

export default App;
