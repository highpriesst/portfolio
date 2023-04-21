import React from "react";
import ProjectCard from "../components/ProjectCard";
import {
  todoProject,
  tracktailor,
  connectApp,
  weatherApp,
} from "../utils/config";

function AllWorks() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex">
        <ProjectCard
          title={todoProject.title}
          description={todoProject.description}
          link={todoProject.link}
        />
        <ProjectCard
          title={tracktailor.title}
          description={tracktailor.description}
          link={tracktailor.link}
        />
        <ProjectCard
          title={connectApp.title}
          description={connectApp.description}
          link={connectApp.link}
        />
        <ProjectCard
          title={weatherApp.title}
          description={weatherApp.description}
          link={weatherApp.link}
        />
      </div>
    </div>
  );
}

export default AllWorks;
