// import React from "react";

// interface CardProps {
//   title: string;
//   description: string;
//   link: string;
// }

// function ProjectCard({ title, description, link }: CardProps) {
//   return (
//     <div className=" max-w-xs p-6  shadow border border-gray-800 rounded-xl">
//       <a href={link}>
//         <p className="mb-2 text-m font-bold tracking-tight text-[#8fbcbb]">
//           {title}
//         </p>
//       </a>
//       <p className="mb-3 font-normal">{description}</p>
//       <a
//         href={link}
//         target="_blank"
//         className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white  bg-gray-800 rounded-lg  focus:ring-1 focus:outline-none focus:ring-gray-300"
//         rel="noreferrer">
//         Read more
//         <svg
//           aria-hidden="true"
//           className="w-3 h-3 ml-2 -mr-1"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg">
//           <path
//             fillRule="evenodd"
//             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//             clipRule="evenodd"></path>
//         </svg>
//       </a>
//     </div>
//   );
// }

// export default ProjectCard;

import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: CardProps) {
  return (
    <div className="w-60 md:w-72 p-6 shadow border border-gray-800 rounded-xl">
      <a href={link}>
        <p className="mb-2 text-m font-bold tracking-tight text-[#8fbcbb]">
          {title}
        </p>
      </a>
      <p className="mb-3 font-normal text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-gray-800 rounded-lg focus:ring-1 focus:outline-none focus:ring-gray-300"
        rel="noreferrer">
        Read more
        <svg
          aria-hidden="true"
          className="w-3 h-3 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  );
}

export default ProjectCard;
