import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom"; // Routes and Route only
import Hero from "./components/Hero";
import Project from "./components/Project";
import Education from "./components/Education";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
};

export default App;
