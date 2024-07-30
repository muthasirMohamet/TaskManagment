import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the list of tasks, projects, and people from local storage or API
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const savedPeople = JSON.parse(localStorage.getItem('people')) || [];

    // Debugging: Log retrieved data
    console.log('Retrieved Tasks:', savedTasks);
    console.log('Retrieved Projects:', savedProjects);
    console.log('Retrieved People:', savedPeople);

    setTasks(savedTasks);
    setProjects(savedProjects);
    setPeople(savedPeople);
  }, []);

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTask = (index) => {
    navigate(`/edit-task/${index}`);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleEditProject = (index) => {
    navigate(`/edit-project/${index}`);
  };

  // Create a map for project ID to project name
  const projectMap = projects.reduce((acc, project) => {
    acc[project.id] = project.name;
    return acc;
  }, {});

  // Debugging: Log the projectMap
  console.log('Project Map:', projectMap);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Workers' Process Dashboard</h2>

      {/* Tasks Table */}
      <h3 className="text-xl font-semibold mb-4">Tasks</h3>
      <table className="min-w-full divide-y divide-gray-200 mb-6">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Person</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Process</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{task.taskName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{projectMap[task.projectId] || 'Unknown Project'}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.assignedPerson}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.process}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEditTask(index)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Projects Table */}
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <table className="min-w-full divide-y divide-gray-200 mb-6">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person In Charge</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{project.personInCharge}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEditProject(index)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(index)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* People List */}
      <h3 className="text-xl font-semibold mb-4">People</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {people.map((person, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
