import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const projectToEdit = savedProjects.find(p => p.name === projectName);
    setProject(projectToEdit);

    const savedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(savedPeople);
  }, [projectName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = savedProjects.map(p => p.name === project.name ? project : p);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    navigate('/dashboard');
  };

  if (!project) return null;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={project.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled
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
          <select
            name="personInCharge"
            id="personInCharge"
            value={project.personInCharge}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a person</option>
            {people.map((person, index) => (
              <option key={index} value={person.name}>
                {person.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProject;
