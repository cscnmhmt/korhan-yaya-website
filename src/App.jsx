import { React, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getData } from './service/service';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState([]);

  useEffect(() => {
    getData(setProjects);
  }, []);

  function handleClickedProject(project) {
    setClickedProject(project);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home projects={projects} setter={handleClickedProject} />}
      />
      <Route path="/about" element={<About />} />
      <Route
        path=":project"
        element={<ProjectDetail clickedProject={clickedProject} />}
      />
    </Routes>
  );
}

export default App;
