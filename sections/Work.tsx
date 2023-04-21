import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

import {
  todoProject,
  connectApp,
  tracktailor,
  weatherApp,
} from "../utils/config";

function Work() {
  return (
    <div className="w-full flex h-auto flex-col p-5 md:pl-10 [&>*]:mb-3 lg:w-1/2 lg:p-8">
      <div>
        <h1 className="font-bold">
          <Link href="/allWorks">
            <h1>Work</h1>
          </Link>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <ProjectCard
          title={todoProject.title}
          description={todoProject.description}
          link={todoProject.link}
        />
        <ProjectCard
          title={connectApp.title}
          description={connectApp.description}
          link={connectApp.link}
        />
        <ProjectCard
          title={tracktailor.title}
          description={tracktailor.description}
          link={tracktailor.link}
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

export default Work;
