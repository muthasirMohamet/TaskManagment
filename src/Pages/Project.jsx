import React, { useState } from 'react';

const ProjectCreation = () => {
  const [project, setProject] = useState({
    name: '',
    startDate: '',
    endDate: '',
    personInCharge: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save project to local storage
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    localStorage.setItem('projects', JSON.stringify([...existingProjects, project]));
    console.log('Project saved:', project);
    // Optionally, clear form fields after submission
    setProject({
      name: '',
      startDate: '',
      endDate: '',
      personInCharge: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Project Name"
            value={project.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={project.startDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={project.endDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="personInCharge" className="block text-sm font-medium text-gray-700">Person In Charge</label>
          <input
            type="text"
            name="personInCharge"
            id="personInCharge"
            placeholder="Person In Charge"
            value={project.personInCharge}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectCreation;
