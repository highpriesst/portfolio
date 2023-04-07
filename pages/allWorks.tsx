import React from "react";
import ProjectCard from "../components/ProjectCard";
import { todoProject } from "../utils/config";

function AllWorks() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex">
        <ProjectCard
          title={todoProject.title}
          description={todoProject.description}
          link={todoProject.link}
        />
      </div>
    </div>
  );
}

export default AllWorks;
