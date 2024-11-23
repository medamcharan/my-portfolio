import GlobalStyles from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom"; // Correct usage
import Project from "./components/Project";
import Education from "./components/Education";



function App() {
  return (
    <>
      <GlobalStyles />
      <AppBar />
      
      <Routes> {/* Define Routes here */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
       
      </Routes>
    </>
  );
}

export default App;
