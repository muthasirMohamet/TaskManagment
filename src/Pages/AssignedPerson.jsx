import React, { useState } from 'react';

const AssignedPersonCreation = () => {
  const [person, setPerson] = useState({
    id: '',
    name: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve existing people from local storage
    const existingPeople = JSON.parse(localStorage.getItem('people')) || [];
    // Save new person
    localStorage.setItem('people', JSON.stringify([...existingPeople, person]));
    console.log('Person added:', person);
    // Optionally, clear form fields after submission
    setPerson({
      id: '',
      name: '',
      role: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Assigned Person</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="ID"
            value={person.id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={person.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            value={person.role}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Person
        </button>
      </form>
    </div>
  );
};

export default AssignedPersonCreation;
