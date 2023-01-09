import Link from "next/link";
import WorksComponent from "../components/WorksComponent";

import { works } from "../utils/config";

function Work() {
  return (
    <div className="w-full flex h-auto flex-col p-5 md:pl-10 [&>*]:mb-3 lg:w-1/2 lg:p-8">
      <div>
        <h1 className="font-bold">
          <Link href="/allWorks">Work</Link>
        </h1>
      </div>
      <div className="">
        <p className="text-gray-500">Coming soon...</p>
        {/* <WorksComponent
          year={works.year}
          title={works.title}
          desc={works.desc}
          tech={works.tech}
        /> */}
      </div>
    </div>
  );
}

export default Work;
