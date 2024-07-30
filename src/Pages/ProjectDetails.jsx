import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <p>No project data available.</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Project Details: {project.name}</h2>
      <p className="text-sm text-gray-600"><strong>Start Date:</strong> {project.startDate}</p>
      <p className="text-sm text-gray-600"><strong>End Date:</strong> {project.endDate}</p>
      <p className="text-sm text-gray-600"><strong>Person In Charge:</strong> {project.personInCharge}</p>
    </div>
  );
};

// Define prop types
ProjectDetails.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    personInCharge: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectDetails;
