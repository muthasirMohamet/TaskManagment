import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Project from './Pages/Project.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/Login.jsx';
import SingUp from './Pages/SingUp.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import AssignedPersonCreation from './Pages/AssignedPerson.jsx';
import TaskCreation from './Pages/TaskCreation.jsx';
import EditTask from './Pages/EditTask.jsx';
import Terms from './Pages/Terms.jsx';

function App() {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/signup','/terms'];
  const showHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render the Header */}
      {showHeader && <Header />}
      {/* Routers */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/details" element={<ProjectDetails />} />
        <Route path="/task" element={<TaskCreation />} />
        <Route path="/AssignedPerson" element={<AssignedPersonCreation />} />
        <Route path="/edit-task/:taskName" element={<EditTask />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
