import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

import { todoProject } from "../utils/config";

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
      <div className="">
        <ProjectCard
          title={todoProject.title}
          description={todoProject.description}
          link={todoProject.link}
        />
      </div>
    </div>
  );
}

export default Work;
