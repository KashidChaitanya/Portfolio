import React from 'react';
import "./projects.css";
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import Separator from '../../common/separator';

function Projects() {
  const data= ProjectData;
  return (
    <div className='projects'>

      <Separator />

      <label className='section-title'>Projects</label>

      <div>

        {data.map((project)=>{
          return <ProjectCard project={project}/>
        })}

      </div>


       </div>
  );
}

export default Projects;