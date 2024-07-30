import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails'; // Ensure path is correct

const ProjectDetailsPage = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    try {
      // Retrieve project from local storage
      const savedProject = JSON.parse(localStorage.getItem('project'));
      console.log('Retrieved project:', savedProject); // Debug line
      if (savedProject) {
        setProject(savedProject);
      } else {
        console.log('No project data found.');
      }
    } catch (error) {
      console.error('Error retrieving project:', error);
    }
  }, []);

  return (
    <div className="p-7 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Project Details</h1>
      {project ? (
        <ProjectDetails project={project} />
      ) : (
        <p>No project data available.</p>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
